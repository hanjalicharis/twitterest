var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');

var CollectionControls = React.createClass({

    getInitialState() {
        return {
            name: 'New Collection',
            isEditingName: false
        };
    },

    getHeaderText() {
        var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
        var text = numberOfTweetsInCollection;

        if (numberOfTweetsInCollection === 1) {
            text = text + ' tweet';
        }
        else {
            text = text + ' tweets';
        }

        return (
            <span>
                {text} <strong> {this.state.name} </strong>
            </span>
        );
    },

    toggleEditCollectionName() {
        this.setState({
            isEditingName: !this.state.isEditingName
        });
    },

    setCollectionName(name) {
        this.setState({
            name: name,
            isEditingName: false
        });
    },

    render() {
        if (this.state.isEditingName) {
            return (
                <CollectionRenameForm
                    name={this.state.name}
                    onChangeCollectionName={this.setCollectionName}
                    onCancelCollectionNameChange={this.toggleEditCollectionName}
                />
            );
        }

        return (
            <div>
                <Header text={this.getHeaderText()} />
                <Button
                    label="Rename your collection"
                    handleClick={this.toggleEditCollectionName} />
                <Button
                    label="Empty collection"
                    handleClick={this.props.onRemoveAllTweetsFromCollection} />
                <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
            </div>
        );
    }
});


module.exports = CollectionControls;
