import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
  root: {
    width: '480px',
  },
  searchContainer: {
    display: 'flex',
    marginTop: '48px',
    justifyContent: 'space-between',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  select: {
    marginLeft: '-10px',
  },
  searchIcon: {
    color: '#ababab',
  },
  searchBtn: {
    height: '40px',
    marginLeft: '5px',
  },
  inputForm: {
    display: 'flex',
    alignItems: 'center',
  },
  '@media(max-width: 689px)': {
    root: {
      width: '100%',
    },
    formControl: {
      width: '100%',
    },
    select: {
      marginLeft: '0px',
    },
    searchContainer: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();

  return (
    <div className={classes.searchContainer}>
      <form className={classes.inputForm}>
        <TextField
          id='full-width inputField'
          className={classes.root}
          placeholder={`Search for countries...`}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon className={classes.searchIcon} />
              </InputAdornment>
            ),
          }}
          variant='outlined'
          onChange={props.searchCountries}
        />
      </form>

      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Filter by Region</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={props.region}
          className={classes.select}
          onChange={props.filterRegion}
        >
          <MenuItem value='Africa'>Africa</MenuItem>
          <MenuItem value='Americas'>Americas</MenuItem>
          <MenuItem value='Asia'>Asia</MenuItem>
          <MenuItem value='Europe'>Europe</MenuItem>
          <MenuItem value='Oceania'>Oceania</MenuItem>
          <MenuItem value='allregions'>All Regions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
