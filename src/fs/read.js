import fs from 'fs';
import { readFile } from 'fs/promises';
const sourcefile = './src/fs/files/fileToRead.txt';

const read = async () => {
    if (!fs.existsSync(sourcefile)) throw new Error('FS operation failed');
    let content = await readFile(sourcefile, {encoding:'UTF-8'})
    console.log(content);
};

await read();