import React, { Component, PropTypes } from 'react';
import Paper                           from 'material-ui/Paper';
import FlatButton                      from 'material-ui/FlatButton';
import FloatingActionButton            from 'material-ui/FloatingActionButton';
import ModeEditIcon                    from 'material-ui/svg-icons/content/create';

import styles from './ProductCard.less';

export default class ProductCard extends Component {
    static propTypes = {
        previewMode       : PropTypes.bool.isRequired,
        name              : PropTypes.string.isRequired,
        id                : PropTypes.string.isRequired,
        description       : PropTypes.string.isRequired,
        dateOfAddition    : PropTypes.string,
        onExploreBtnClick : PropTypes.func.isRequired
    };

    renderContentPreview = () => {
        return (
            <div className={styles.content}>
                {`${this.props.description.slice(0, 30)}...`}
            </div>
        );
    }

    renderFullContent = () => {
        return (
            <div className={styles.content}>
                <div className={styles.subHeader}>Color</div>
                <div className={styles.info}>{this.props.color}</div>
                <div className={styles.subHeader}>Description</div>
                <div className={styles.info}>{this.props.description}</div>
            </div>
        );
    };

    renderExploreBtn = () => {
        return (
            <FlatButton
                primary
                className = {styles.exploreBtn}
                label     = 'Explore'
                onClick   = {this.props.onExploreBtnClick.bind(null, this.props.id)}
            />
        );
    };

    renderDeleteBtn = () => {
        return (
            <FlatButton
                primary
                className = {styles.exploreBtn}
                label     = 'Delete product'
            />
        );
    };

    renderEditBtn = () => {
        return (
            <FloatingActionButton secondary
                className = {styles.fab}
                // onClick   = {onAddBtnClick}
            >
                <ModeEditIcon />
            </FloatingActionButton>
        );
    };

    render() {
        const { previewMode } = this.props;

        return (
            <Paper className={previewMode ? styles.miniPaper : styles.paper} >
                <div className={styles.header}>
                    <h5>{this.props.name}</h5>
                    <span className={styles.date}>{this.props.dateOfAddition}</span>
                    {
                        !previewMode
                        ?
                            this.renderEditBtn()
                        :
                            null
                    }
                </div>
                {
                    previewMode
                    ?
                        this.renderContentPreview()
                    :
                        this.renderFullContent()
                }
                {
                    previewMode
                    ?
                        this.renderExploreBtn()
                    :
                        this.renderDeleteBtn()
                }
            </Paper>
        );
    }
}
