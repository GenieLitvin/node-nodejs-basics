import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';
import { stdout }  from 'node:process';
const hash = createHash('sha256');

const file = './src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const stream = createReadStream(file);
    stream.pipe(hash).setEncoding('hex').pipe(stdout);
}

await calculateHash();