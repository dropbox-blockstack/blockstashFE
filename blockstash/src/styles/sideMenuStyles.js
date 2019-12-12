const drawerWidth = 300;

const styles = {
    root : {
        display : "flex",
    },
    appBar : {
        width : `calc(100% - ${drawerWidth}px)`,
        marginLeft : drawerWidth
    },
    drawer : {
        width : drawerWidth,
        // borderRight : "1px solid black"
        borderRight : "1px solid black",
    },
}

export default styles;