import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

@Injectable()
export class FileService {
  async readFile(path: string): Promise<string> {
    return await fs.readFile(path, 'utf8');
  }

  async readJson<T>(path: string): Promise<T> {
    const data = await this.readFile(path);
    return JSON.parse(data) as T;
  }
}
