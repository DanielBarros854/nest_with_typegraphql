import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly UserRository: UserRepository) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return this.UserRository.createUser(createUserInput);
  }

  async findAll() {
    return this.UserRository.users();
  }

  async findOne(id: number) {
    return this.UserRository.user({ id });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    return this.UserRository.updateUser({ id }, updateUserInput);
  }

  async remove(id: number) {
    return this.UserRository.deleteUser({ id });
  }
}
