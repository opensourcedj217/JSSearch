# @ds-javascript/search

## Usage
```js
const Search = require('@ds-javascript/search');
const search = new Search()
```

## API

**.linear(array,element)** 
It performs linear search on array and finds a given element.\n
Returns index of element if found otherwise -1.
```javascript
search.linear([34,51,1,2,3,45,56,687], 45)
```

**.binary(array,element)**
It performs binary search on array and finds a given element.\n
Returns index of element if found otherwise -1.\n
*Array needs to be in sorted order then only binary search will return valid result.*
```javascript
search.binary([1,2,3,34,45,51,56,687], 45)
```