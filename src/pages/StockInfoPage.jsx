// Temp
import React from "react";
import { render } from "react-dom";
import { getData } from "../utilities";
import Chart from "../components/Chart";
import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <TypeChooser>
        {(type) => <Chart type={type} data={this.state.data} />}
      </TypeChooser>
    );
  }
}

const StockInfoPage = () => {
  return <ChartComponent />;
};

export default StockInfoPage;
