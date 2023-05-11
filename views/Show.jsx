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
        <form method="POST" action={`/destinations/${flight._id}`}>
          <label>Choose Destination</label>
          <select name="airport">
            <option value="AUS">AUS</option>
            <option value="DAL">DAL</option>
            <option value="LAX">LAX</option>
            <option value="SAN">SAN</option>
            <option value="SEA">SEA</option>
          </select>
          <br />
          Date: <input type="datetime-local" name="arrival" />
          <input type="submit" value="submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Show;