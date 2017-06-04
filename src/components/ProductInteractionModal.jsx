import React, { Component, PropTypes }   from 'react';
import Dialog                            from 'material-ui/Dialog';
import FlatButton                        from 'material-ui/FlatButton';
import TextField                         from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import styles from './ProductInteractionModal.less';

const RED_COLOR_LABEL = 'RED';
const GREEN_COLOR_LABEL = 'GREEN';
const BLUE_COLOR_LABEL = 'BLUE';

export default class ProductInteractionModal extends Component {
    static propTypes = {
        error            : PropTypes.object.isRequired,
        isOpen           : PropTypes.bool.isRequired,
        title            : PropTypes.string.isRequired,
        cancelBtnLabel   : PropTypes.string.isRequired,
        submitBtnLabel   : PropTypes.string.isRequired,
        onCancelBtnClick : PropTypes.func.isRequired,
        onSubmitBtnClick : PropTypes.func.isRequired
    };

    state = {
        nameInputValue: '',
        descriptionInputValue: '',
        selectedColorValue: RED_COLOR_LABEL
    };

    handleNameInputChange = (e, nextValue) => {
        this.setState({ nameInputValue: nextValue });
    };

    handleDescriptionInputChange = (e, nextValue) => {
        this.setState({ descriptionInputValue: nextValue });
    };

    handleColorValueChange = (e, nextColorValue) => {
        this.setState({ selectedColorValue: nextColorValue });
    };

    handleSubmitBtnClick = () => {
        this.props.onSubmitBtnClick({
            name: this.state.nameInputValue,
            description: this.state.descriptionInputValue,
            color: this.state.selectedColorValue
        });
    };

    render() {
        const { error, onCancelBtnClick } = this.props;

        const actions = [
            <FlatButton
                key        = {1}
                label      = {this.props.cancelBtnLabel}
                onTouchTap = {onCancelBtnClick}
            />,
            <FlatButton primary
                key        = {2}
                label      = {this.props.submitBtnLabel}
                onTouchTap = {this.handleSubmitBtnClick}
            />
        ];

        return (
            <Dialog
                open             = {this.props.isOpen}
                title            = {this.props.title}
                actions          = {actions}
                contentClassName = {styles.content}
                onRequestClose   = {onCancelBtnClick}
            >
                <TextField fullWidth
                    hintText          = 'My awesome product v2000'
                    floatingLabelText = 'Product name'
                    value             = {this.state.nameInputValue}
                    errorText         = {error.isError ? error.data.name : null}
                    onChange          = {this.handleNameInputChange}
                />
                <TextField fullWidth
                    hintText          = 'The best product in the market'
                    floatingLabelText = 'Product description'
                    value             = {this.state.descriptionInputValue}
                    errorText         = {error.isError ? error.data.description : null}
                    onChange          = {this.handleDescriptionInputChange}
                />
                <RadioButtonGroup
                    name            = 'color'
                    defaultSelected = {this.state.selectedColorValue}
                    className       = {styles.radioBtnGroup}
                    onChange        = {this.handleColorValueChange}
                >
                    <RadioButton
                        value = {RED_COLOR_LABEL}
                        label = 'Red'
                    />
                    <RadioButton
                        value = {GREEN_COLOR_LABEL}
                        label = 'Green'
                    />
                    <RadioButton
                        value = {BLUE_COLOR_LABEL}
                        label = 'Blue'
                    />
                </RadioButtonGroup>
            </Dialog>
        );
    }
}
