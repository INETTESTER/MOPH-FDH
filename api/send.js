import http from 'k6/http';
import { token, domain } from './env.js';

export function send() {
    const url = domain + '/FMU/ecimp/v1/send';

    const payload = JSON.stringify({
        fileType: 'txt',
        maininscl: 'UCS',
        dataTypes: ['IP'],
        opRefer: false,
        importDup: true,
        assignToMe: false,
        file: {
            ins: {
                blob: '77u/SE58SU5TQ0x8U1VCVFlQRXxDSUR8SENPREV8REFURUVYUHxIT1NQTUFJTnxIT1NQU1VCfEdPVkNPREV8R09WTkFNRXxQRVJNSVROT3xET0NOT3xPV05SUElEfE9XTk5BTUV8QU58U0VRfFNVQklOU0NMfFJFTElOU0NMfEhUWVBFCjEyMzc4NTR8VUNTfHwzNDMwOTAwMjg4NTc1fDAwMDAwfHwxMTA0MXwxMDI0M3x8fFBQMTc1Mjg3NTk1Nnx8fHw2ODAwMDg0NjF8MTIzNzg1NDI1MDIxOVUzfHx8MQo=',
                blobName: 'INS.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 227,
            },
            pat: {
                blob: '77u/SENPREV8SE58Q0hBTkdXQVR8QU1QSFVSfERPQnxTRVh8TUFSUklBR0V8T0NDVVBBfE5BVElPTnxQRVJTT05fSUR8TkFNRVBBVHxUSVRMRXxGTkFNRXxMTkFNRXxJRFRZUEUKMDAwMDB8MTIzNzg1NHwzOHwwNHwxOTU4MDExOXwyfDJ8fDA5OXwzNDMwOTAwMjg4NTc1fOC4meC4p+C4peC4quC4siDguIjguLHguJnguJfguKPguYDguKrguJnguLIs4LiZ4Liy4LiHfOC4meC4suC4h3zguJnguKfguKXguKrguLJ84LiI4Lix4LiZ4LiX4Lij4LmA4Liq4LiZ4LiyfDEK',
                blobName: 'PAT.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 264,
            },
            opd: null,
            orf: null,
            odx: null,
            oop: null,
            ipd: {
                blob: '77u/SENPREV8SE58QU58REFURUFETXxUSU1FQURNfERBVEVEU0N8VElNRURTQ3xESVNDSFN8RElTQ0hUfFdBUkREU0N8REVQVHxBRE1fV3xVVUN8U1ZDVFlQRQowMDAwMHwxMjM3ODU0fDY4MDAwODQ2MXwyMDI1MDIxOXwxNzA4fDIwMjUwMjIxfDE0MDB8MnwxfDA3MDB8fDYyfDF8SQo=',
                blobName: 'IPD.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 161,
            },
            idx: {
                blob: '77u/SENPREV8QU58RElBR3xEWFRZUEV8RFJEWAowMDAwMHw2ODAwMDg0NjF8SDI1OXwxfDQyNDgwCjAwMDAwfDY4MDAwODQ2MXxINTQ0fDJ8NDI0ODAK',
                blobName: 'IDX.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 87,
            },
            iop: {
                blob: '77u/SENPREV8QU58T1BFUnxPUFRZUEV8RFJPUElEfERBVEVJTnxUSU1FSU58REFURU9VVHxUSU1FT1VUCjAwMDAwfDY4MDAwODQ2MXwxMzQxfHw0MjQ4MHwyMDI1MDIyMXwxNDAwfHwKMDAwMDB8NjgwMDA4NDYxfDEzNzF8fDQyNDgwfDIwMjUwMjIxfDE0MDB8fAo=',
                blobName: 'IOP.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 149,
            },
            cht: {
                blob: '77u/SENPREV8SE58QU58REFURXxUT1RBTHxQQUlEfFBUVFlQRXxQRVJTT05fSUR8U0VRfE9QRF9NRU1PfElOVk9JQ0VfTk98SU5WT0lDRV9MVAowMDAwMHwxMjM3ODU0fDY4MDAwODQ2MXwyMDI1MDIyMXwxMjk3Mi4wMHwwLjAwfFVDfDM0MzA5MDAyODg1NzV8MTIzNzg1NDI1MDIxOVUzfHwxMjM3ODU0MjUwMjE5VTN8Cg==',
                blobName: 'CHT.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 181,
            },
            cha: {
                blob: '77u/SENPREV8SE58QU58REFURXxDSFJHSVRFTXxBTU9VTlR8UEVSU09OX0lEfFNFUQowMDAwMHwxMjM3ODU0fDY4MDAwODQ2MXwyMDI1MDIyMXwxMXw4MDAuMDB8MzQzMDkwMDI4ODU3NXwxMjM3ODU0MjUwMjE5VTMK',
                blobName: 'CHA.txt',
                blobType: 'text/plain',
                encoding: 'UTF-8',
                size: 417,
            }
        },
        dateSendFdhF: '2026-06-22T11:25:42',
        dateSendFdhC: '2026-06-22T11:25:42',
    });

    const params = {
        headers: {
            'User-Agent': 'FDH/1.0 00000',
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    };

    const response = http.post(url, payload, params);

    //console.log('Response body:', response.body);

    return response;
}