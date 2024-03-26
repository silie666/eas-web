import CryptoJS from "crypto-js";

class LaravelEncrypt {
  private key = "fKxtzLtrF5Yopw5MHFWsmaHCvlrpeLTh2WmcATaQ55g=";

  public decrypt(encryptStr): string {
    encryptStr = CryptoJS.enc.Base64.parse(encryptStr);
    let encryptData = encryptStr.toString(CryptoJS.enc.Utf8);
    encryptData = JSON.parse(encryptData);
    const iv = CryptoJS.enc.Base64.parse(encryptData.iv);
    const decrypted = CryptoJS.AES.decrypt(encryptData.value, CryptoJS.enc.Base64.parse(this.key), {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Utf8.stringify(decrypted);
  }

  public encrypt(data): string {
    let iv: CryptoJS.lib.WordArray | string = CryptoJS.lib.WordArray.random(16);
    const key = CryptoJS.enc.Base64.parse(this.key);
    const options = {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    };
    let encrypted: any = CryptoJS.AES.encrypt(data, key, options);
    encrypted = encrypted.toString();
    iv = CryptoJS.enc.Base64.stringify(iv);
    let result: { iv: string; value: any; mac: string } | string | CryptoJS.lib.WordArray = {
      iv,
      value: encrypted,
      mac: CryptoJS.HmacSHA256(iv + encrypted, key).toString()
    };
    result = JSON.stringify(result);
    result = CryptoJS.enc.Utf8.parse(result);
    return CryptoJS.enc.Base64.stringify(result);
  }
}

export default LaravelEncrypt;
