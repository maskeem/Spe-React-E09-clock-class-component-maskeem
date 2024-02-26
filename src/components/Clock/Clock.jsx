import React from 'react';
import './Clock.scss';
import addZeroBefore from '../../utils/clockFormat';

class Clock extends React.Component {
  /* --- création d'un Effet de bord ---
  Pour lancer un effet de bord après le montage du composant, on place notre code dans :
  - 'function component' : la callback du hook useEffect
  - 'class component' : la méthode héritée de notre classe parent : componentDidMount */
  componentDidMount() {
    const { addOneSecond } = this.props;
    this.intervalId = setInterval(() => {
      addOneSecond();
    }, 1000);
  }

  /* --- nettoyage d'un Effet de bord ---
  Pour nettoyer un effet de bord avant le démontage du composant, on place notre code dans :
  - 'function component' : la callback retournée par la callback du hook useEffect
  - 'class component' : la méthode hérité de notre classe parent : componentWillUnmount */
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    /* --- props ---
    Les props sont déstructurées depuis :
    - les paramètres dans un 'fonction component'
    - la propriété de classe this.props dans un 'class component' */
    const { city, time, resetClock } = this.props;
    const dateTime = new Date(time);

    return (
      <div className="Clock">
        <button type="button" className="Clock-close" onClick={resetClock}>
          X
        </button>
        <h2>{city}</h2>
        <p className="Clock-time">
          <span>{addZeroBefore(dateTime.getHours())}</span>:
          <span>{addZeroBefore(dateTime.getMinutes())}</span>:
          <span>{addZeroBefore(dateTime.getSeconds())}</span>
        </p>
      </div>
    );
  }
}

export default Clock;
