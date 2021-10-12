var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var assign = require('object-assign');

var tweet = null;

function setTweet(recievedTweet) {
    tweet = recievedTweet;
}

function emitChange() {
    TweetStore.emit('change');
}

var TweetStore = assign({}, EventEmitter.prototype, {
    addChangeListener(callback) {
        this.on('change', callback);
    },
    removeChangeListener(callback) {
        this.removeListener('change', callback);
    },
    getTweet() {
        return tweet;
    }
});

function handleAction(action) {
    if (action.type === 'recieved_tweet') {
        setTweet(action.tweet);
        emitChange();
    }
}

TweetStore.dispatchToken = AppDispatcher.register(handleAction);
module.export = TweetStore;


