import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from "react";

function BarGraph(){
    
    const [data, setData] = useState([]) 
  
    async function apiGet() {
        const response = await fetch('http://localhost:8081/peoples/search/dataBarGraph');
        const data1 = await response.json();
        setData(data1._embedded.graphBars);
    }
  
    useEffect(() => {
        console.log("executed only once!");
        apiGet();
        console.log("data only once!");
        console.log(data);
    }, [""]);
  
    const dataGraph = {
        labels: data.map((key)=>(key.personName)) ,
        legend:[{
        }],
        datasets: [{
            label: 'Issues',
            data: data.map((key)=>(key.issueCount)),
            backgroundColor: [
              'rgb(255, 99, 132)',
            ],
            hoverOffset: 4
        }]
    }
  

    const options=  {
        
         plugins: {
          title: {
            display: true,
            text: 'Total issues by employee'
          },
        },
        responsive: true,
        scales: {
            y: {
              ticks: {
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
            
            <Bar options={options} 
            data={dataGraph} />
        </>
        
    );
}

export default BarGraph;