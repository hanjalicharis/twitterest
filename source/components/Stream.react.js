var React = require('react');
var SnapkiteStreamClient = require('snapkite-stream-client');
var StreamTweet = require('./StreamTweet.react');
var Header = require('./Header.react');

var Stream = React.createClass({
    getInitialState() {
        return {
            tweet: null
        }
    },
    componentDidMount() {
        SnapkiteStreamClient.initialiseStream(this.handleNewTweet);
    },
    componentWillUnmount() {
        SnapkiteStreamClient.destroyStream();
    },
    handleNewTweet(tweet) {
        this.setState({
            tweet: tweet
        });
    },
    render() {
        var tweet = this.state.tweet;
        if (tweet) {
            return (
                <StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection} />
            );
        }
        return (
            <Header text="Waiting for Twitter photos!" />
        );
    }
});

module.exports = Stream;