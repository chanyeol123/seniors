import { httpClient } from '@/lib/httpClient';

export function chatInquiry(page: number, offset: number, code: string) {
  return httpClient.get(`/rooms?page=${page}&offset=${offset}`, {
    headers: {
      Authorization: code,
    },
  });
}

export function chatCreate() {
  return httpClient.post('/rooms');
}
