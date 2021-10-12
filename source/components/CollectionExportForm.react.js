var React = require('react');

var formStyle = {
    display: 'inline-block',
};

var CollectionExportForm = React.createClass({

    render() {
        return (
            <form action="http://codepen.io/pen/define" style={formStyle} method="POST" target="_blank">
                <input type="hidden" name="data" value={this.props.htmlMarkup} />
                <button type="submit" className="btn btn-default">EXPORT AS HTML</button>
            </form>
        );
    }

});

module.exports = CollectionExportForm;