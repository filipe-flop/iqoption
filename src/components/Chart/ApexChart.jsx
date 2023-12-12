import Chart from "react-apexcharts";

export default function ApexChart(props) {
  const series = [
    {
      name: "xx",
      data: props.data
    }
  ];
  const options = {
    chart: {
      height: 350,
      type: "area",
      zoom: {
        enabled: true
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2,
      curve: "straight",
      lineCap: "butt"
    },
    colors: ["#210124"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: true,
        gradientToColors: ["#DB162F"],
        opacityFrom: 1,
        opacityTo: 1,
        type: "vertical",
        stops: [0, 30]
      }
    },
    grid: {
      show: true,
      borderColor: '#90A4AE',
      strokeDashArray: 2,
      position: 'back',
      xaxis: {
          lines: {
              show: true
          }
      },   
      yaxis: {
          lines: {
              show: true
          }
      },  
      row: {
          colors: "#8f9199",
          opacity: 0
      },  
      column: {
          colors: undefined,
          opacity: 0.5
      },  
      padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
      },  
    },
    plotOptions: {
      area: {
          fillTo: 'origin',
      }
    }
  }

  return (
    <div id="chart">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}