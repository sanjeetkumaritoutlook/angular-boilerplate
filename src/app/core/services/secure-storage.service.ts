import { Injectable } from '@angular/core';
import SecureStorage from 'secure-web-storage';
import * as CryptoJS from 'crypto-js';
import { STORAGE_SECRET_KEY } from 'src/app/constants/constant';

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService {
  constructor() {}
  secureLocalStorage = new SecureStorage(localStorage, {
    hash: function hash(key): void {
      key = CryptoJS.SHA256(key, STORAGE_SECRET_KEY);
      return key.toString();
    },
    encrypt: function encrypt(data): void {
      data = CryptoJS.AES.encrypt(data, STORAGE_SECRET_KEY);
      data = data.toString();
      return data;
    },
    decrypt: function decrypt(data): void {
      data = CryptoJS.AES.decrypt(data, STORAGE_SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    },
  });

  secureSessionStorage = new SecureStorage(sessionStorage, {
    hash: function hash(key): void {
      key = CryptoJS.SHA256(key, STORAGE_SECRET_KEY);
      return key.toString();
    },
    encrypt: function encrypt(data): void {
      data = CryptoJS.AES.encrypt(data, STORAGE_SECRET_KEY);
      data = data.toString();
      return data;
    },
    decrypt: function decrypt(data): void {
      data = CryptoJS.AES.decrypt(data, STORAGE_SECRET_KEY);
      data = data.toString(CryptoJS.enc.Utf8);
      return data;
    },
  });
}
