import { Injectable } from '@nestjs/common';
import { IUser } from './user.interface';
import { FileService } from 'src/file/file.service';
@Injectable()
export class UserService {
  private readonly filePath = 'src/data/users.json';
  constructor(private readonly fileService: FileService) {}

  test(): string[] {
    return [];
  }

  async findAll(): Promise<IUser[]> {
    return await this.fileService.readJson<IUser[]>(this.filePath);
  }
}
