import React, { Component } from 'react';

import styles from './Footer.less';

export default class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                Developed by
                <a
                    className={styles.link}
                    href='https://github.com/yaDaryStil'
                    target='_blank'
                >
                    yaDaryStil
                </a>
                (Kyiv 2017)
            </div>
        );
    }
}
