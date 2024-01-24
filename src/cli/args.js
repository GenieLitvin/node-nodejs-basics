const parseArgs = () => {
    let argvs = process.argv
    argvs.forEach((element, i) => {
        if(element.slice(0,2)=='--'){
            console.log(` ${element.slice(2)} is ${argvs[i+1]}`)
        }
    });
};

parseArgs();