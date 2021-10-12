var AppDispatcher = require('../dispatcher/AppDispatcher');

function RecieveTweet(tweet) {

    console.log("New tweet recieved! About to display it!");
    var action = {
        type: 'recieve_tweet',
        tweet: tweet
    };

    AppDispatcher.dispatch(action);
}

module.exports = {
    recieveTweet: RecieveTweet
};
