import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block"
  }
})

export default function Create() {
  const classes = useStyles()
  const history = useHistory()

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category,setCategory] = useState("game");


  const handleClick = (e) => {

    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch('http://localhost:8000/notes',{
      method:'POST',
      headers:{"Content-type":"application/json"},
      body: JSON.stringify({title,details,category})
    }).then(()=>history.push('/'))
    }

  }

  return (
    <Container>

      <Typography
        className={classes.title}
        variant='h3'
        color='textSecondary'
        align="center"
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleClick}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className={classes.field}>
        <FormLabel>Note Category</FormLabel>
        <RadioGroup value = {category} onChange={(e)=>{setCategory(e.target.value)}}>
          <FormControlLabel value="money" control={<Radio />} label="money"/>
          <FormControlLabel value="todos" control={<Radio />} label="todos"/>
          <FormControlLabel value="play" control={<Radio />} label="play"/>
          <FormControlLabel value="game" control={<Radio />} label="game"/>

        </RadioGroup>

        </FormControl>

        <Button
          className={classes.btn}

          variant="contained"
          type="submit"
          color="primary"
          endIcon={<ArrowForwardIosOutlinedIcon />}
        >
          Submit
        </Button>

      </form>



    </Container>
  )
}
