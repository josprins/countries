import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  countryDataContainer: {
    marginLeft: '80px',
  },
  countryData: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginTop: '23px',
    height: '170px',
  },
  dataItem: {
    marginBottom: '10px',
    fontSize: '16px',
    marginRight: '100px',
  },
  borderContainer: {
    display: 'flex',
    marginTop: '35px',
    flexWrap: 'wrap',
  },
  borderCountry: {
    padding: '0 15px',
    marginRight: '15px',
    marginBottom: '15px',
  },
  borderTitle: {
    marginRight: '15px',
    marginTop: '1px',
  },
}));

const SingleCountryDetails = props => {
  const classes = useStyles();

  return (
    <div className={classes.countryDataContainer}>
      <h2 style={{ fontSize: '32px' }}>{props.name}</h2>
      <div className={classes.countryData}>
        <p className={classes.dataItem}>
          <strong>Native Name: </strong> {props.nativeName}
        </p>
        <p className={classes.dataItem}>
          <strong>Population: </strong> {props.population.toLocaleString()}
        </p>
        <p className={classes.dataItem}>
          <strong>Region: </strong> {props.region}
        </p>
        <p className={classes.dataItem}>
          <strong>Sub Region: </strong> {props.subregion}
        </p>
        <p className={classes.dataItem}>
          <strong>Capital: </strong> {props.capital}
        </p>
        <p className={classes.dataItem}>
          <strong>Top Level Domain: </strong> {props.topLevelDomain}
        </p>
        <p className={classes.dataItem}>
          <strong>Currency: </strong>{' '}
          {props.currencies.map(currency => currency.code)}
        </p>

        <p className={classes.dataItem}>
          <strong>Languages: </strong>{' '}
          {props.languages.map(language => `${language.name}  `)}
        </p>
      </div>
      <div className={classes.borderContainer}>
        {props.borders.length === 0 ? null : (
          <p className={classes.borderTitle}>
            <strong>Border countries: </strong>
          </p>
        )}

        {props.borders.map((border, index) => (
          <Button
            variant='outlined'
            size='small'
            className={classes.borderCountry}
            key={index}
            onClick={() => props.getBorderCountry(border)}
            component={Link}
            to={`/${border}`}
          >
            {border}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SingleCountryDetails;
