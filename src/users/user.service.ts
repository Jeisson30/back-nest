import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async createUser(newUser: Partial<User>): Promise<User> {
        return await this.userRepository.save(newUser);
    }

    async updateUser(id: number, updatedUser: Partial<User>): Promise<User> {
        await this.userRepository.update(id, updatedUser);
        return await this.userRepository.findOne({ where: { id } });
    }

    async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }

    async getUser(id: number): Promise<User> {
        return await this.userRepository.findOne({ where: { id } });
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }

}
