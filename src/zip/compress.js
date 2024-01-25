import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { promisify }from 'node:util';
const pipe = promisify(pipeline);


const sourcePath = './src/zip/files/fileToCompress.txt';
const distPath = './src/zip/files/archive.gz';

const compress = async () => {
    const gzip = createGzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(distPath);
    await pipe(source, gzip, destination);
};

await compress();