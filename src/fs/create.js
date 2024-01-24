import fs from 'fs';
import { writeFile } from 'node:fs/promises';

const pathFile = './src/fs/files/fresh.txt';

const create = async () => {
    if (fs.existsSync(pathFile)) throw new Error('FS operation failed');
    writeFile(pathFile, 'I am fresh and young');
};

await create();