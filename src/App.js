import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Container from '@material-ui/core/Container';
import Search from './components/Search';
import CountriesContainer from './components/CountriesContainer';
import SingleCountry from './components/SingleCountry';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './css/main.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState('');
  const [regionCountries, setRegionCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const palletType = darkMode ? 'dark' : 'light';
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
  });

  // Get all countries
  const getCountries = async () => {
    await axios
      .get(`https://restcountries.eu/rest/v2/all`)
      .then(res => setCountries(res.data));
  };

  // Get single country page
  const getSingleCountry = country => {
    setCountry(countries.filter(item => item.name === country));
  };

  // Click on border button to get border country inside single country page
  const getBorderCountry = borderCountry => {
    const allCountriesCopy = countries;
    const getBorderCountry = allCountriesCopy.filter(
      country => country.alpha3Code === borderCountry
    );
    setCountry(getBorderCountry);
  };

  // Use text input to search countries
  const searchCountries = e => {
    let searchTerm = e.target.value;
    const countryList = countries;

    if (searchTerm) {
      const results = countryList.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
      );
      setCountries(results);
    }

    if (!searchTerm) getCountries();
  };

  // Filter countries on region
  const filterRegion = e => {
    const region = e.target.value;
    const allCountriesCopy = countries;
    const getRegionCountries = allCountriesCopy.filter(
      country => country.region === region
    );
    if (region === 'allregions') {
      getCountries();
      setRegion('');
      setRegionCountries([]);
    } else {
      setRegion(region);
      setRegionCountries(getRegionCountries);
    }
  };

  // Reset state when home link (title) is clicked
  const goHome = () => {
    setRegion('');
    setRegionCountries([]);
    setCountry([]);
    getCountries();
  };

  // Handle darkmode
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Get all countries on initial load
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Router className='App'>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header
          goHome={goHome}
          handleDarkMode={handleDarkMode}
          darkMode={darkMode}
        />
        <Switch>
          <Route exact path='/'>
            <Container maxWidth='lg'>
              <Search
                searchCountries={searchCountries}
                filterRegion={filterRegion}
                region={region}
              />
              <CountriesContainer
                countries={countries}
                region={region}
                regionCountries={regionCountries}
                getSingleCountry={getSingleCountry}
              />
            </Container>
          </Route>
          <Route path='/:id'>
            <SingleCountry
              country={country}
              getBorderCountry={getBorderCountry}
              darkMode={darkMode}
            />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
