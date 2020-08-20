import * as fs from 'fs';
import { fileExists } from './fileExists';

export const deleteFile = (filename: string): Promise<any> => new Promise(async (resolve, reject) => {
    const alreadyExists = await fileExists(filename);
    !alreadyExists ? resolve(filename) : fs.unlink(filename, (err) => err ? reject(err) : resolve(filename));
})