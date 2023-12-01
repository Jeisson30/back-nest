
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('createUser')
    async createUser(@Body() newUser: Partial<User>): Promise<User> {
        return await this.userService.createUser(newUser);
    }

    @Put('updateUser/:id')
    async updateUser(@Param('id') id: number, @Body() updatedUser: Partial<User>): Promise<User> {
        return await this.userService.updateUser(id, updatedUser);
    }

    @Delete('deleteUser/:id')
    async deleteUser(@Param('id') id: number): Promise<void> {
        await this.userService.deleteUser(id);
    }

    @Get(':id')
    async getUser(@Param('id') id: number): Promise<User> {
        return await this.userService.getUser(id);
    }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getAllUsers();
    }
}

