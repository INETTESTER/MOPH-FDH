import http from 'k6/http';
import { token, cookie, domain } from './env.js';

export function trackupload() {
  const url = domain + '/FMU/ecimp/v1/trackupload';

  const payload = `{
    "upload_uid": "fd296dc4-7204-4f69-81b2-a88ac1dd21e3-230"
  }`;

  const params = {
    headers: {
      'User-Agent': 'FDH/1.0 00000',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Cookie': cookie,
    },
  };

  const response = http.post(url, payload, params);

  //console.log('Response body:', response.body);
  //console.log(`[${new Date().toISOString()}] Start GetObject`);

  return response;
}