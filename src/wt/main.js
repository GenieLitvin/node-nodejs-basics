import { Worker} from 'node:worker_threads';
import os from 'node:os';
const cpuCores = os.cpus().length;
 
const result = [];
let finished =0;

const performCalculations = async () => {

  for (let i = 0; i < cpuCores; i++) {
    const worker = new Worker('./src/wt/worker.js',{ workerData: 10+ i});  
    worker.on('message', data => {result[i]=data; } );
    worker.on("exit", code => { finished++; if(finished==4) console.log(result)} );
  } 

};


await performCalculations();
