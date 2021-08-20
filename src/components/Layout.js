import React from 'react'
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Avatar } from '@material-ui/core';
import { pink } from '@material-ui/core/colors';

const  drawerWidth = 240

const menuItems = [
    {
        text:'My Notes',
        icon: <SubjectOutlined color="secondary" />,
        path:'/'
    },
    {
        text:'Create Note',
        icon: <AddCircleOutlineOutlined color="secondary" />,
        path:'/create'
    }
]

const useStyle = makeStyles(( theme )=>{
    return {
        page:{
            background:'#f5f5f5',
            width:'100%',
            padding: theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display:'flex'
        },
        active:{
            background:'#f4f4f4'
        },
        title:{
            padding:theme.spacing(2)
        },
        appbar:{
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        welcome:{
            textAlign: 'center',
            flexGrow :1 ,
            color: pink[500],
            fontFamily: "'Poppins', sans-serif",
            //fontFamily: "Poppins",
            //fontWeight:'extraBold',
            fontSize:'40px'
        },
        avatar:{
            marginLeft: theme.spacing(2),
            background:pink[500]
        }

    }
    
})

const Layout = ({children}) => {
    const classes= useStyle()
    const history = useHistory()
    const location = useLocation()
    return (  

        
        <div className={classes.root}>

            <AppBar 
            elevation={0}
            className={classes.appbar}
            >
                <Toolbar>
                    <Typography className={classes.welcome}>
                        Notify
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar className={classes.avatar} >
                        N
                    </Avatar>
                </Toolbar>
            </AppBar>

         {/* side drawer */}
            <Drawer 
            className = {classes.drawer}
            variant="permanent"
            anchor='left'
            classes={{paper:classes.drawerPaper}}>
                <div>
                    <Typography variant='h5' className={classes.title}>
                       Menu
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item=>(
                        <ListItem 
                        button
                        key={item.text}
                        onClick={()=>history.push(item.path)}
                        className={location.pathname==item.path? classes.active:null}
                        >
                            <ListItemIcon color="secondary">{item.icon} </ListItemIcon>
                            <ListItemText>{ item.text}</ListItemText>
                        </ListItem>

                    ))}
                </List>

            </Drawer>

        {/* notes content/ create note contents */}
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
            {children}
            </div>
            
        </div>


    );
}
 
export default Layout;
