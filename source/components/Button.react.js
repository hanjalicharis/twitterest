var React = require('react');

var buttonStyle = {
    margin: '10px 10px 10px 0'
};


var Button = React.createClass({

    render() {
        return (
            <button style={buttonStyle} onClick={this.props.handleClick}>
                {this.props.label}
            </button>
        );
    }

});

module.exports = Button;