import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NightsStayOutlinedIcon from '@material-ui/icons/NightsStayOutlined';
import Brightness7Icon from '@material-ui/icons/Brightness7';

// Material UI custom styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 700,
    fontFamily: "'Nunito Sans', sans-serif",
    textDecoration: 'none',
  },
  appbar: {
    padding: '18px',
  },
  '@media (max-width: 415px)': {
    title: {
      fontSize: '18px',
    },
    appbar: {
      padding: '16px 5px',
    },
    '@media (max-width: 375px)': {
      title: {
        fontSize: '16px',
      },
    },
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <AppBar
      position='static'
      className={classes.appbar}
      style={props.darkMode ? darkStyle : null}
      color='inherit'
      elevation={props.darkMode ? 10 : 3}
    >
      <Toolbar>
        <Typography
          variant='h5'
          className={classes.title}
          component={Link}
          to='/'
          onClick={props.goHome}
          style={props.darkMode ? { color: '#fafafa' } : { color: 'black' }}
        >
          Where in the world?
        </Typography>
        <Button color='inherit' onClick={props.handleDarkMode}>
          {props.darkMode ? (
            // Switch between darkmode icon and lightmode icon
            <Brightness7Icon style={{ color: '#fafafa' }} />
          ) : (
            <NightsStayOutlinedIcon />
          )}
          &nbsp; {props.darkMode ? 'lightmode' : 'darkmode'}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

// Style for handling darkmode on appbar
const darkStyle = {
  backgroundColor: '#242424',
  color: '#fff',
};
