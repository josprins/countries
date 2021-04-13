import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '264px',
    margin: '0 15px 75px 15px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  media: {
    height: '160px',
    width: '264px',
    paddingTop: '56.25%', // 16:9
  },
  listItem: {
    margin: 0,
    padding: 0,
  },
  cardContainer: {
    marginTop: '48px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  cardLink: {
    textDecoration: 'none',
  },
  title: {
    fontWeight: 'bold',
  },
}));

export default function AllCountries(props) {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      {props.countries.map((country, index) => (
        <Link
          to={`/${country.name}`}
          className={classes.cardLink}
          onClick={() => props.getSingleCountry(country.name)}
          key={index}
        >
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={country.flag}
              title={country.name}
            />
            <CardContent>
              <List>
                <Typography variant='h6' className={classes.title}>
                  {country.name}
                </Typography>
                <ListItem className={classes.listItem}>
                  <strong>Population: </strong>&nbsp;
                  {/* toLocaleString to get
                  comma's in the right places */}
                  {country.population.toLocaleString()}
                </ListItem>
                <ListItem className={classes.listItem}>
                  <strong>Region: </strong>&nbsp; {country.region}
                </ListItem>
                <ListItem className={classes.listItem}>
                  <strong>Capital: </strong>&nbsp; {country.capital}
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}