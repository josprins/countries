import React from 'react';
import { Link } from 'react-router-dom';
import SingleCountryDetails from './SingleCountryDetails';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Container from '@material-ui/core/Container';

// Material UI custom styles
const useStyles = makeStyles(theme => ({
  backBtn: {
    color: 'black',
    display: 'flex',
    marginTop: '80px',
    textDecoration: 'none',
  },
  btnText: {
    marginTop: '2px',
    marginLeft: '8px',
    fontSize: '16px',
  },
  singleCountryContainer: {
    marginTop: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  flagImg: {
    height: '401px',
    width: '560px',
    borderRadius: '10px',
  },
  loading: {
    width: '200px',
    margin: '50px auto 0 auto',
  },
  '@media (max-width: 1240px)': {
    singleCountryContainer: {
      flexDirection: 'column',
      marginTop: '50px',
    },
    backBtn: {
      marginTop: '50px',
    },
    countryDataContainer: {
      marginTop: '25px',
      paddingBottom: '25px',
      marginLeft: 0,
      width: '550px',
    },
  },
  '@media (max-width: 600px)': {
    flagImg: {
      width: '500px',
      height: 'auto',
    },
    countryDataContainer: {
      width: '450px',
    },
  },
  '@media (max-width: 415px)': {
    flagImg: {
      width: '300px',
      height: 'auto',
    },
    countryDataContainer: {
      width: '290px',
    },
    countryData: {
      flexWrap: 'nowrap',
      height: '100%',
    },
    dataItem: {
      marginRight: 0,
    },
  },
}));

export default function SingleCountry(props) {
  const classes = useStyles();

  return (
    // Render single country page
    <Container maxWidth='lg'>
      <Link
        to='/'
        className={classes.backBtn}
        style={props.darkMode ? { color: '#fafafa' } : { color: 'black' }}
      >
        <ArrowBackIcon />
        <p className={classes.btnText}>Back</p>
      </Link>
      {props.country.length > 0 ? (
        props.country.map((item, index) => (
          <div className={classes.singleCountryContainer} key={index}>
            <img
              src={item.flag}
              alt={`Flag of ${item.name}`}
              className={classes.flagImg}
            />
            <SingleCountryDetails
              name={item.name}
              nativeName={item.nativeName}
              region={item.region}
              subregion={item.subregion}
              capitol={item.capitol}
              topLevelDomain={item.topLevelDomain}
              currencies={item.currencies}
              languages={item.languages}
              borders={item.borders}
              population={item.population}
              getBorderCountry={props.getBorderCountry}
            />
          </div>
        ))
      ) : (
        <div className={classes.loading}>
          <h2 style={{ fontSize: '30px' }}>Loading...</h2>
        </div>
      )}
    </Container>
  );
}
