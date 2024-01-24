import fs from 'fs';
import { opendir } from 'fs/promises';
const sourceFolder = './src/fs/files/';


const list = async () => {
    if (!fs.existsSync(sourceFolder)) throw new Error('FS operation failed');
    const dir = await opendir(sourceFolder);
    for await (const dirent of dir)
      console.log(dirent.name);
};

await list();