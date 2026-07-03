import http from 'k6/http';
import { token, cookie, domain } from './env.js';

export function trackupload() {
  const url = domain + '/FMU/ecimp/v1/trackupload';

  const payload = `{
    "upload_uid": "370ee53b-b9f4-47ac-a892-601e31f4f7da-13"
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