var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react')

var inputStyle = {
    marginRight: '10px'
};

var CollectionRenameForm = React.createClass({

    getInitialState() {
        return {
            inputValue: this.props.name
        }
    },
    setInputValue(inputValue) {
        this.setState({
            inputValue: inputValue
        });
    },

    handleInputValueChange(event) {
        var inputValue = event.target.value;
        this.setInputValue(inputValue);
    },

    handleFormSubmit(event) {
        event.preventDefault();
        var collectionName = this.state.inputValue;
        this.props.onChangeCollectionName(collectionName);
    },

    handleFormCancel(event) {
        event.preventDefault();
        var collectionName = this.props.name;
        this.setInputValue(collectionName);
        this.props.onCancelCollectionNameChange();
    },
    componentDidMount() {
        this.refs.collectionName.focus();
    },

    render() {
        return (
            <form className="form-inline" onSubmit={this.handleFormSubmit}>
                <Header headerText="New Collection Name: " />
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="New Collection Name"
                        style={inputStyle}
                        value={this.state.inputValue}
                        onChange={this.handleInputValueChange}
                        ref="collectionName"
                    />
                </div>
                <Button type="button" label="Cancel" onClick={this.handleFormCancel} />
                <Button type="submit" label="Confirm" />
            </form>
        );
    }
});

module.exports = CollectionRenameForm;