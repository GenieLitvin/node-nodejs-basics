import { workerData, threadId, parentPort } from "node:worker_threads";


// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try{
      const value = nthFibonacci(workerData);
      parentPort.postMessage({ data : value,  status: 'resolved'});
    }catch(err){
      parentPort.postMessage({ data : null,  status: 'error'});
    }
};

sendResult();

