import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Typography } from "@mui/material";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "Horizontal-bar",
        },
        xaxis: {
          categories: [
            "Momo",
            "Pizza",
            "Burger",
            "Khajaset",
            "Chowmein",
            "Parotha",
            "ChickenItem",
            "Cold Drinks",
          ],
        },
      },
      series: [
        {
          name: "Food",
          data: [130, 90, 45, 50, 49, 60, 70, 19],
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <Typography sx={{textAlign:"center", fontWeight:600, fontSize:"1.9rem"}}>The Day</Typography>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="1000"
        />
      </div>
    );
  }
}

export default App;
