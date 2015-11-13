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

AspectImage accepts the same props as Image plus a new prop called `sources`. The `sources` prop is an object whose keys are pixel ratios (that is, screen scales like "2" or "3"). Its values are Image sources to display on screens with the respective pixel ratio. This is how you use it:

```js
<AspectImage
  sources={{ uri: 'https://example.com/icon@3x.png' }} />
```

## Implementation

AspectImage chooses the image source for the closest pixel ratio that is greater than or equal to screen's pixel ratio.

