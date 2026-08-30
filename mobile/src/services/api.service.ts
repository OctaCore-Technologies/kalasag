import axios from 'axios';
import type { RelayNode } from 'shared';

const API_BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:4000';

const client = axios.create({ baseURL: API_BASE_URL });

export async function fetchNodes(): Promise<RelayNode[]> {
  const response = await client.get<RelayNode[]>('/nodes');
  return response.data;
}
