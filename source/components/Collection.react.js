var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Header = require('./Header.react');
var TweetList = require('./TweetList.react');
var CollectionControls = require('./CollectionControls.react');


var Collection = React.createClass({

    createHtmlMarkupStringOfTweetList() {
        var htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets} />
        );
        var htmlMarkup = {
            html: htmlString
        };
        return JSON.stringify(htmlMarkup);
    },

    getListOfTweetIds() {
        return Object.keys(this.props.tweets);
    },

    getNumberOfTweetsInCollection() {
        return this.getListOfTweetIds().length;
    },

    render() {

        var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();
        if (numberOfTweetsInCollection > 0) {
            var tweets = this.props.tweets;
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var handleRemoveAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return (
                <div>
                    <CollectionControls numberOfTweetsInCollection={numberOfTweetsInCollection}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllTweetsFromCollection={handleRemoveAllTweetsFromCollection} />
                    <TweetList tweets={tweets} onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
                </div>
            );
        }
        return <Header headerText="Your collection is empty" />;
    }
});

module.exports = Collection;