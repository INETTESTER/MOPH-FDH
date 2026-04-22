import http from 'k6/http';
import { token, cookie } from './env.js';

export function trackupload() {
  const url = 'https://nhsoapi.nhso.go.th/FMU/ecimp/v1/trackupload';

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

  return response;
}