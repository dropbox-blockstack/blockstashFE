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

class SideMenu extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        const { classes } = this.props;
        return(
            <Drawer className={classes.drawer} variant="permanent" anchor="left">
                <Paper>
                    <List>
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
        )
    }
}

SideMenu.propTypes = {
    classes : PropTypes.object.isRequired,
}

export default withStyles(styles)(SideMenu);