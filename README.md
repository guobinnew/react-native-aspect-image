# AspectImage
A responsive Image component that adjust height by width

## Installation

1.  overwrite react-native DIR of your project
2.  add AspectImage.js into your project

Require it with:

```js
let AspectImage = require('./AspectImage');
```

## Usage

```js
<AspectImage
  sources={{ uri: 'xxxx' }}  style={styles.img}/>
  
  var {width, height} = Dimensions.get('window');
  var styles = StyleSheet.create({
      img:{
         width: width;
      }
  });
```
Every Picture keep aspect ratio unchanged.
![Demo](https://raw.githubusercontent.com/guobinnew/react-native-aspect-image/master/demo.png)

## Implementation

AspectImage adjust the image height according to width.

## References

http://stackoverflow.com/questions/31654244/react-native-retrieve-actual-image-sizes
