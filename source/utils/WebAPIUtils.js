var TweetActionCreators = require('../actions/TweetActionCreators');
var SnapkiteStreamClient = require('snapkite-stream-client');

function initializeStreamOfTweets() {
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet);
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
};