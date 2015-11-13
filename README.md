# AspectImage
A responsive Image component that adjust height by real width, and keeping aspect ratio unchanged.

## Installation

1.  overwrite react-native DIR of your project( need to modify RCTImageView.m in L199~L204 )
2.  add AspectImage.js into your project

## Usage

```js
var AspectImage = require('./AspectImage');

<AspectImage
  sources={{ uri: 'xxxx' }}  style={styles.img}/>
<AspectImage
  sources={{ uri: 'xxxx' }}  style={styles.img}/>
  
var {width, height} = Dimensions.get('window');
var styles = StyleSheet.create({
      img:{
         flex:1,
         width: width;
      }
  });
```
Each picture has a different height. AspectImage can adjust the image height according to width.
![Demo](https://raw.githubusercontent.com/guobinnew/react-native-aspect-image/master/demo.png)


## References

http://stackoverflow.com/questions/31654244/react-native-retrieve-actual-image-sizes
