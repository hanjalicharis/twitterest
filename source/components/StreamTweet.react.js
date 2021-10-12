var React = require('react');
var Tweet = require('./Tweet.react');
var Header = require('./Header.react');
var ReactDOM = require('react-dom');

var StreamTweet = React.createClass({

    getInitialState() {
        console.log("1. Initial State");
        return {
            headerText: null,
            numberOfCharactersIsIncreasing: null
        };
    },

    componentWillMount() {
        console.log("2. Component Will Mount");
        this.setState({
            headerText: "Latest Tweet",
            numberOfCharactersIsIncreasing: true
        });
        window.twitterest = {
            numberOfRecievedTweets: 1,
            numberOfDisplayedTweets: 1
        }
    },

    componentDidMount() {
        console.log("3. Component Did Mount");
        var componentDOMRepresentation = ReactDOM.findDOMNode(this);

        window.twitterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.twitterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },

    componentWillReceiveProps(nextProps) {
        console.log("4. Component Will Receive Props");
        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIncreasing = nextTweetLength > currentTweetLength;

        var headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = "Latest Tweet";
        } else {
            headerText = "Oldest Tweet";
        }

        this.setState({
            headerText: headerText
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = "Number of characters is increasing!";
        } else {
            headerText = "Latest Tweet"
        }

        this.setState({
            headerText: headerText
        });

        window.twitterest.numberOfRecievedTweets++;
    },

    shouldComponentUpdate(nextProps, nextState) {
        console.log("5. Should Component Update");
        return (nextProps.tweet.text.length > 20);
    },

    componentWillUpdate(nextProps, nextState) {
        console.log("6. Component Will Update");

    },

    componentDidUpdate(prevProps, prevState) {
        console.log("7. Component Did Update");
        console.log(window.twitterest.numberOfDisplayedTweets++);
        window.twitterest.numberOfDisplayedTweets++;
    },

    componentWillUnmount() {
        console.log("8. Component Will Unmount");
        delete window.twitterest;
    },

    render() {
        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section >
        );
    }
});

module.exports = StreamTweet;
