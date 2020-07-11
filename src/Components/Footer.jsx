import React from 'react';

import {AppBar, Toolbar, Container} from "@material-ui/core";

import Styles from "./Footer.module.css"

const Footer = () => {
    return (
        <>
            <AppBar position="static" className={Styles.AppBar}>
                <Container maxWidth="md">
                    <Toolbar>
                        Copyright © 2020 - Kristijan Knezevic
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};

export default Footer;