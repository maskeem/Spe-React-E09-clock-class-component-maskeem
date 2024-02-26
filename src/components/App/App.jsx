import React from 'react';
import axios from 'axios';
import CityForm from '../CityForm/CityForm';
import Clock from '../Clock/Clock';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    /* --- Création de state ---
    Pour créer nos variables d'état on utilise :
    - 'function component' : le hook useState
    - 'class component' : la propriété de classe this.state définie dans le constructeur
    */
    this.state = {
      inputValue: '',
      location: '',
      datetime: '',
    };
  }

  fetchTime = async () => {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      try {
        const result = await axios.get(
          `https://timezone.abstractapi.com/v1/current_time/?api_key=b8fe551eb2914f2e9299f214fc2ce86c&location=${inputValue}`
        );
        this.setDatetime(result.data.datetime);
        this.setLocation(result.data.timezone_location);
      } catch (e) {
        console.log(e);
      }
    } else {
      this.resetClock();
    }
  };

  /* --- Modification de state ---
  Pour modifier la valeur d'une variable d'état on utilise :
  - 'function component' : le setter renvoyé par useState
  - 'class component' : la méthode de classe héritée de la classe parente React.Component : this.setState */
  setInputValue = (newValue) => {
    this.setState({
      inputValue: newValue,
    });
  };

  setDatetime = (datetime) => {
    this.setState({
      datetime,
    });
  };

  incrementDateTime = () => {
    const { datetime } = this.state;
    const dt = new Date(datetime);
    const dtNext = dt.setSeconds(dt.getSeconds() + 1);
    this.setState({
      datetime: dtNext,
    });
  };

  setLocation = (location) => {
    this.setState({
      location,
      inputValue: '',
    });
  };

  resetClock = () => {
    this.setState({
      location: '',
      datetime: '',
    });
  };

  render() {
    /* --- Lecture de state ---
    Pour lire une valeur du state on utilise :
    - 'function component' : la valeur renvoyée par le hook useState
    - 'class component' : la valeur stockée dans la propriété de classe this.state */
    const { inputValue, location, datetime } = this.state;
    return (
      <div className="App">
        <h1>O&apos;Clock</h1>
        <CityForm
          inputValue={inputValue}
          handleChange={this.setInputValue}
          handleSubmit={this.fetchTime}
        />
        {datetime !== '' && (
          <Clock
            city={location}
            time={datetime}
            addOneSecond={this.incrementDateTime}
            resetClock={this.resetClock}
          />
        )}
      </div>
    );
  }
}

export default App;
