import http from 'k6/http';
import { cookie } from './env.js';

export function get_token() {
  const url = 'https://nhsoapi.nhso.go.th/FMU/ecimp/v1/auth';

  const payload = JSON.stringify({
    username: 'fdhprovider',
    password: 'tsazgCXRq5iZPVt1FYWV',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookie, // ใช้จาก cookie.js
    },
  };

  const response = http.post(url, payload, params);

  //console.log('Response body:', response.body);

  return response;
}