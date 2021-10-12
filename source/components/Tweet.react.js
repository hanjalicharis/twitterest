var React = require('react');

var tweetStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '300px',
    height: '400px',
    margin: '10px'
};

var imageStyle = {
    maxHeight: '400px',
    maxWidth: '300px',
    boxShadow: '0px 1px 1px 0px #aaa',
    border: '1px solid black'
};

var Tweet = React.createClass({

    propTypes: {

        tweet(properties, propertyName, componentName) {
            var tweet = properties[propertyName];
            if (!tweet) {
                return new Error('Tweet is required!');
            }
            if (!tweet.media) {
                return new Error('Tweet must have some kind of media!');
            }
        },
        onImageClick: React.PropTypes.func
    },
    handleImageClick(tweet) {
        var tweet = this.props.tweet;
        var onImageClick = this.props.onImageClick;
        if (onImageClick) {
            onImageClick(tweet);
        }
    },
    render() {
        var tweet = this.props.tweet;
        var tweetMediaUrl = tweet.media[0].url;
        return (
            <div style={tweetStyle}>
                <img src={tweetMediaUrl} style={imageStyle} onClick={this.handleImageClick} />
            </div>
        );
    }

});

module.exports = Tweet;