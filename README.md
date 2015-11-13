# AspectImage
A responsive Image component that adjust height by width

## Installation

```
npm install react-native-aspect-image --save
```

Require it with:

```js
let AspectImage = require('react-native-aspect-image');
```

## Usage

```js
<AspectImage
  sources={{ uri: 'https://example.com/icon@3x.png' }} />
```

![Demo](https://raw.githubusercontent.com/guobinnew/react-native-aspect-image/master/demo.png)

## Implementation

AspectImage chooses the image source for the closest pixel ratio that is greater than or equal to screen's pixel ratio.

