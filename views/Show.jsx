const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const flight = this.props;
    return (
      <DefaultLayout title="Show Page" link="/pokemons" text="Home">
        <div>
          Airline: {flight.airline}
          Flight No: {flight.flightNo}
          Departure: {flight.departs}
          Airport: {flight.airport}
        </div>
        Destination Airport:
        {flight.destinations.map((destination, index) => {
          return (
            <div key={index}>
              {destination.airport}
              {destination.arrival}
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}

module.exports = Show;
