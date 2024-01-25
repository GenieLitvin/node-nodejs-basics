import fs  from 'node:fs';
import { stdout } from 'node:process';
const filePath = './src/streams/files/fileToRead.txt';

const read = async () => {
    fs.createReadStream(filePath).pipe(stdout)
};

await read();