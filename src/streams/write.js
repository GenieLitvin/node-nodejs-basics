import fs  from 'node:fs';
const filePath = './src/streams/files/fileToWrite.txt';

const write = async () => {
    fs.createWriteStream(filePath).write('hello');
};

await write();