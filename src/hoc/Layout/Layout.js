import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Footer from "../../components/Navigation/Footer/Footer";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


import classes from "./Layout.module.css";



class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };

    render () {
        return (
            <>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
                <Footer/>
            </>
        )
    }
}

export default Layout;