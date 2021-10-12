var React = require('react');
var Tweet = require('./Tweet.react');

var listStyle = {
    padding: '0'
};

var listItemStyle = {
    display: 'inline-block',
    listStyle: 'none'
};

var TweetList = React.createClass({

    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    },

    getTweetElement(tweetId) {
        var tweet = this.props.tweets[tweetId];
        var handleRemoveTweetFromCollection = this.props.RemoveTweetFromCollection;
        var tweetElement;

        if (handleRemoveTweetFromCollection) {
            tweetElement = (
                <Tweet tweet={tweet} onClick={handleRemoveTweetFromCollection} />
            );
        } else {
            tweetElement = <Tweet tweet={tweet} />;
        }
        return <li style={listItemStyle} key={tweetId}> {tweetElement} </li>
    },

    render() {
        return (
            <ul style={listStyle}>
                {this.getListOfTweetIds().map(this.getTweetElement)}
            </ul>
        );
    }
});

module.exports = TweetList;