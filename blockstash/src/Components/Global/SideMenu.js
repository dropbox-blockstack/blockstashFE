import React from 'react';
import styles from '../../styles/sideMenuStyles';
import PropTypes from 'prop-types';
// Material UI Imports
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';

class SideMenu extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <CssBaseline />
                <AppBar className={classes.appBar} position="fixed">
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Permanent drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer} variant="permanent" anchor="left">
                    <Paper>
                        <List className={classes.list}>
                            <ListItem button >
                                <ListItemText>Hello World</ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemText>Hello World</ListItemText>
                            </ListItem>
                            <ListItem button >
                                <ListItemText>Hello World</ListItemText>
                            </ListItem>
                        </List>
                    </Paper>
                </Drawer>
            </div>
        )
    }
}

SideMenu.propTypes = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(SideMenu);