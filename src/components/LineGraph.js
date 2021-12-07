import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from "react";

function LineGraph(){
    
     const [data, setData] = useState([])
    
    
   
    async function apiGet() {
        const response = await fetch('http://localhost:8081/issues/search/dataLineGraph');
        const data1 = await response.json();
        setData(data1._embedded.graphLines);
  }
      
  
      useEffect(() => {
        console.log("executed only once!");
         apiGet();
         console.log("data only once!");

         console.log(data);

  }, [""]);
  

    const dataLine = {
        labels:  data.map((key)=>(key.indentifiedDate)),
        datasets: [{
            label: 'Issues',
            data: data.map((key)=>(key.statusCount)),
            backgroundColor: [
              'rgb(255, 99, 132)',
            ],
            tension: 0.5,
            hoverOffset: 4
        }]
    }
  
  const options=  {
     plugins: {
          title: {
            display: true,
            text: "Issue's timeline"
          },
        },
    responsive: true,
    scales: {
        y: {
            ticks: {
                stepSize: 1,
                font: {
                    size: 10,
                }
            }
        },
        x: {
            ticks: {
                font: {
                    size: 10
                }
            }
        }
    }
  }


    return(     
        <>
            <Line options={options} data={dataLine} />
        </>
        
    );
}

export default LineGraph;
