# calculate-cos-distance-js
This little package will help you calculate cos distance between two vectors.

`npm i calculate-cos-distance`

## Usage
`cosDistance(vector1, vector2 [, precision])`

Calculates distance between `vector1` and `vector2`, both of them must be arrays of the same length

`precision` is the argument that defines precision of returned number (default = 5)

```js
const { cosDistance } = require("calculate-cos-distance");

console.log(cosDistance([1, 2, 3], [3, 2, 1])) // 0.71428;
console.log(cosDistance([10, -2, 3], [4, 10.23, 1])) // 0.19947;
console.log(cosDistance([10, -2, 3], [4, 10.23, 1], 10)) // 0.1994690265;
```
or
```js
import { cosDistance } from "calculate-cos-distance";

console.log(cosDistance([1, 2, 3], [3, 2, 1])) // 0.71428;
console.log(cosDistance([10, -2, 3], [4, 10.23, 1])) // 0.19947;
console.log(cosDistance([10, -2, 3], [4, 10.23, 1], 10)) // 0.1994690265;
```


## API
You can use functions that is implemented in lhis library:

`dotProduct(vector1, vector2)` will calculate dot product of two vectors
`vectorLen(vector)` will calculate vector length of passed vector

```js
const { dotProduct, vectorLen } = require("calculate-cos-distance");

dotProduct([1, 2, 3], [3, 2, 1]);
vectorLen([1, 2, 3]);
```
