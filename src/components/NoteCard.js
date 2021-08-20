import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, makeStyles, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { CallMissedSharp, DeleteOutlined } from '@material-ui/icons';
import { blue, green, pink, yellow } from '@material-ui/core/colors';


//Important
const useStyles = makeStyles ({
   avatar:{
       background:(note)=>{
            if(note.category== 'money')
            {
                return yellow[700]
            }
            if(note.category== 'todos')
            {
                return green[500]
            }
            if(note.category== 'play')
            {
                return pink[500]
            }
            return blue[500]
            
       }
        
   }
})



export default function NoteCard({note, handleDelete}){
    const classes = useStyles(note)

    return(

        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=>handleDelete(note.id)}>
                        <DeleteOutlined  />
                        </IconButton>
                    }
                    title= {note.title}
                    subheader= { note.category}
                
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {note.details}
                    </Typography>
                </CardContent>

            </Card> 
        </div>
    )
}