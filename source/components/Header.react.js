var React = require('react');

var headerStyle = {
    fontSize: '16 px',
    display: 'inline-block',
    margin: '0 auto'
};

var Header = React.createClass({

    getDefaultProps() {
        return {
            text: 'Tweets'
        };
    },

    render() {
        return (
            <h2 style={headerStyle}>{this.props.text}</h2>
        );
    }
});

module.exports = Header;