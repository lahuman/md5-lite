import * as fs from 'fs';
import * as path from 'path';
import * as md5 from 'md5';
import * as md5File from 'md5-file';

const BUFFER_SIZE: number = 100000;

export function md5Lite(filePath: string): string {
    const basePath = path.resolve(filePath);
    const st = fs.statSync(basePath);

    // 대용량의 경우만 처리
    if (st.size > (BUFFER_SIZE * 2)) {
        let firstBuffer = Buffer.alloc(BUFFER_SIZE);
        let lastBuffer = Buffer.alloc(BUFFER_SIZE);
        const res = fs.openSync(basePath, 'r');
        fs.readSync(res, firstBuffer, 0, BUFFER_SIZE, 0);
        fs.readSync(res, lastBuffer, 0, BUFFER_SIZE, (st.size - BUFFER_SIZE));
        return md5(Buffer.concat([firstBuffer, lastBuffer]));
    } else {
        return md5File.sync(basePath);
    }
}

