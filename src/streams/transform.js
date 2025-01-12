import { Transform } from 'node:stream';

const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, String(chunk).split("").reverse().join(""));
    },
  });


const transform = async () => {
   process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();



