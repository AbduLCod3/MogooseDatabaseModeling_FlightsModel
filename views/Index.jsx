const React = require("react");
const DefaultLayout = require("./layout/Default");

class Index extends React.Component {
  render() {
    const { flight } = this.props;

    return (
      <DefaultLayout
        title="Flights Page"
        link="/flights/new"
        text="Create New Flight"
      >
        <ul>
          {flight.map((flights, i) => {
            return (
              <li key={i}>
                <div>{flights.airline}</div>

                <div>{flights.flightNo}</div>

                <div>{flights.departs}</div>

                <div>{flights.airport}</div>

                <div>
                  <a href={`/flights/${flights._id}`}>Show Flight Details</a>
                </div>
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
