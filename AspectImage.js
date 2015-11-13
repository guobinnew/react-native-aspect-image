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
        var aspectRatio = size.width / size.height;
        var width = this.state.layoutWidth;
        var measuredHeight = width / aspectRatio;
        this.setState({
            style: {
                width: width,
                height: measuredHeight
            }
        });
    },

    onImageLayout:function(e){
        var layout = e.nativeEvent.layout;
        this.setState({
            layoutWidth: layout.width
        });
    },

    render: function () {
        return (
            <Image
                {...this.props}
                style={[this.props.style, this.state.style]}
                onLoad={this.onImageLoad}
                onLayout={this.onImageLayout}
                />
        );
    }
});

module.exports = AspectImage;