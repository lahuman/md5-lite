import * as fs from 'fs';
import * as path from 'path';
import md5 = require('md5');
import md5File = require('md5-file');

class LiteMd5 {
    
    constructor(private BUFFER_SIZE:number=100000) {
    }
 
    liteMd5(filePath:string):string {
        const st = fs.statSync(path.join(__dirname, filePath));

        // 대용량의 경우만 처리
        if (st.size > (this.BUFFER_SIZE * 2)) {
            let firstBuffer = Buffer.alloc(this.BUFFER_SIZE);
            let lastBuffer = Buffer.alloc(this.BUFFER_SIZE);
            const res = fs.openSync(path.join(__dirname, filePath), 'r');
            fs.readSync(res, firstBuffer, 0, this.BUFFER_SIZE, 0);
            fs.readSync(res, lastBuffer, 0, this.BUFFER_SIZE, (st.size - this.BUFFER_SIZE));
            return md5( Buffer.concat([firstBuffer, lastBuffer]));
        } else {
            return md5File.sync(path.join(__dirname, filePath));
        }
    }

}

export function liteMd(filePath: string): string {
    console.log(__dirname)
   return new LiteMd5().liteMd5(filePath);
}

