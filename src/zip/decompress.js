import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,createWriteStream
} from 'node:fs';
import { promisify }from 'node:util';

const distPath = './src/zip/files/fileToCompress.txt';
const sourcePath = './src/zip/files/archive.gz';

const decompress = async () => {
    const source = createReadStream(sourcePath);
    const writeStream = createWriteStream(distPath);
    const unzip = createUnzip();
  
    source.pipe(unzip).pipe(writeStream);
};

await decompress();