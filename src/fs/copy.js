import fs from 'fs';
import { cp } from 'fs/promises';

const sourceDir = './src/fs/files';
const distDir = './src/fs/files_copy';


const copy = async () => {
    if (fs.existsSync(distDir)) throw new Error('FS operation failed');
    cp(sourceDir,distDir,{ recursive: true });
};

await copy();
