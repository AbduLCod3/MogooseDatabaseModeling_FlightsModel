const React = require("react");
const DefaultLayout = require("./layout/Default");

// Show component
class Show extends React.Component {
  render() {
    const flight = this.props.flight;
    return (
      // Default layout
      <DefaultLayout title="Show Page" link="/flights" text="Home">
        <div>
          {/* Flight details */}
          Airline: {flight.airline}
          Flight No: {flight.flightNo}
          Departure: {flight.departs.toString()}
          Airport: {flight.airport}
        </div>
        {/* Destination details */}
        Destination Airport:
        {/* Map destinations */}
        {flight.destinations.map((destination, index) => {
          return <div key={index}>{destination.airport}</div>;
        })}
      </DefaultLayout>
    );
  }
}

// Export component
module.exports = Show;
