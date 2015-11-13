'use strict';

var React = require('react-native');
var {
    Image,
    } = React;


var AspectImage = React.createClass({
    getInitialState: function () {
        return {
            style: {height: 1}
        };
    },

    onImageLoad: function (e) {
        var size = e.nativeEvent.size;
        console.log('nativeEvent==' + size.width + ':' + size.height);
        var aspectRatio = size.width / size.height;
        var measuredHeight = width / aspectRatio;
        console.log('width==' + width);
        console.log('measuredHeight==' + measuredHeight);
        this.setState({
            style: {
                width: width,
                height: measuredHeight
            }
        });
    },

    render: function () {
        return (
            <Image
                {...this.props}
                style={[this.props.style, this.state.style]}
                onLoad={this.onImageLoad}
                />
        );
    }
});

module.exports = AspectImage;