import fs from 'fs';
import { rm } from 'fs/promises';
const sourcefile = './src/fs/files/fileToRemove.txt';

const remove = async () => {
    if (!fs.existsSync(sourcefile)) throw new Error('FS operation failed');
    rm(sourcefile);
};

await remove();

