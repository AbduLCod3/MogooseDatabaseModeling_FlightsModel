const React = require("react");
const DefaultLayout = require("./layout/Default");

class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    return (
      <DefaultLayout title="Show Page" link="/flights" text="Home">
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
            </div>
          );
        })}
      </DefaultLayout>
    );
  }
}

module.exports = Show;
