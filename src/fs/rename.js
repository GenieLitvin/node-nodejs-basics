import fs from 'fs';
import { rename as rnm} from 'fs/promises';

const sourcefile = './src/fs/files/wrongFilename.txt';
const distfile = './src/fs/files/properFilename.md';


const rename = async () => {
    if (!fs.existsSync(sourcefile) || fs.existsSync(distfile) ) throw new Error('FS operation failed');
    rnm(sourcefile,distfile,{ recursive: true });
};

await rename();