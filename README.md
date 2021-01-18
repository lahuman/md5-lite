# md5-lite

파일을 청크(Chunk) 사이즈 처리를 해서 성능 향상을 목적으로 만들어진 모듈입니다.
파일 크기가 200000byte(0.2MB) 이상일 경우 초기 100000byte (0.1MB)와 마지막 100000byte을 이용하여 md5 hash 처리 합니다.
그보다 크기가 작을 경우 전체 데이터의 전체를 md5 hash 처리 합니다.

This module is designed to improve performance by processing files in chunk size.
If the file size is more than 200000 bytes (0.2MB), the md5 hash is processed using the initial 100000 bytes (0.1MB) and the last 100000 bytes.
If the size was smaller than that, md5 hashed the entire data.

## Installation 
```sh
npm install md5-lite --save
yarn add md5-lite
bower install md5-lite --save
```
## Usage

### Javascript
```javascript
const {md5Lite} = require('md5-lite');
console.log(md5Lite('./filepath'));
```
```sh
0486c21a4d40d0f3b0bdad3925db439e
```

### TypeScript
```typescript
import {md5Lite} from 'md5-lite';
console.log(md5Lite('./filepath'))
```
```sh
0486c21a4d40d0f3b0bdad3925db439e
```



## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
- Copyright 2020 © <a href="https://lahuman.github.io" target="_blank">lahuman</a>.
