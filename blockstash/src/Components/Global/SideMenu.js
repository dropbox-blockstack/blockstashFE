import React from 'react';

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
            </div>
        )
    }
}

export default SideMenu;