const React = require("react");
const DefaultLayout = require("./layout/Default");

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="Add Flight" link="/flights" text="Home">
        <form action="/flights" method="POST">
          <div className="form1">
            AIRLINE:
            <select id="Airline" name="Airline">
              <option value="American">America</option>
              <option value="Southwest">Southwest</option>
              <option value="United">United</option>
            </select>
            <br />
            Flight No: <input type="text" name="flightNo" /> <br />
            Date: <input type="date" name="date" />
            <br />
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
          <input type="submit" value="Create Flight" />
        </form>
        <br />
      </DefaultLayout>
    );
  }
}

module.exports = New;
