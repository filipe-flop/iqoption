import React, {useState, useEffect} from "react";
import ApexChart from "../components/Chart/ApexChart";

export function PageContent() {
    const [data, updateData] = useState([1, 2, 3, 4, 5, 6]);
  
    useEffect(() => {
        const interval = setInterval(() => {
          const val = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
          let array = [...data, val];
          array.shift();
          updateData(array);
        }, 2000);
        return () => {
          window.clearInterval(interval); // clear the interval in the cleanup function
        };
      }, [data]);

    return (
      <div className="App">
        <ApexChart data={data} title="Product Trends by Month" />
      </div>
    );
  }

  export default PageContent;