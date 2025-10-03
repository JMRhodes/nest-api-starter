import { Injectable, Inject } from '@nestjs/common';
import { Pool, PoolClient } from 'pg';

@Injectable()
export class AppService {
  constructor(@Inject('POSTGRES_POOL') private readonly sql: Pool) {}

  async getTable(name: string): Promise<any[]> {
    const client: PoolClient = await this.sql.connect();
    const { rows } = await client.query(`SELECT * FROM ${name}`);
    return rows;
  }
}
