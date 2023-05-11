const React = require("react");
const DefaultLayout = require("./layout/Default");

// New component
class New extends React.Component {
  render() {
    return (
      // Default layout
      <DefaultLayout title="Add A NewFlight" link="/flights" text="Home">
        {/* Flight creation form */}
        <form action="/flights" method="POST">
          <div className="form1">
            {/* Select airline */}
            AIRLINE:
            <select id="Airline" name="airline">
              <option value="American">America</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
            <br />
            {/* Flight number input */}
            Flight No: <input type="number" name="flightNo" /> <br />
            {/* Departure date input */}
            Date: <input type="date" name="departs" />
            <br />
            {/* Airport select */}
            <label>Choose Airport</label>
            <select name="airport">
              <option value="AUS">AUS</option>
              <option value="DAL">DAL</option>
              <option value="LAX">LAX</option>
              <option value="SAN">SAN</option>
              <option value="SEA">SEA</option>
            </select>
            <br />
          </div>
          {/* Submit button */}
          <input type="submit" value="Create Flight" />
        </form>
        <br />
      </DefaultLayout>
    );
  }
}

// Export component
module.exports = New;
