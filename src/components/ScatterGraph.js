import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import React, { useEffect, useState } from "react";


function ScatterGraph(){
    const [data, setData] = useState([])
    
    async function apiGet() {
        const response = await fetch('http://localhost:8081/issues/search/dataScatterGraph');
        const dataAPI = await response.json();
        setData(dataAPI._embedded.graphScatters);
//        dataAPI.forEach( i=> {
//                let count = parseInt(i.countPriority)
//                let salary = parseInt(i.countPriority)
//                scatter.push({"x": age,
//                             "y": salary})
//            })
        
    }
    
     useEffect(() => {
        console.log("executed only once!");
        apiGet();
        ;
       
    }, [""]);
    
   
    
   const dataScatter = {
    labels:["Open","Closed","In progress"],
    datasets: [
        {
        label: 'Low',
        data: data.filter(data => data.priority === "Low" ).map(filteredData => (filteredData.countPriority)),
        backgroundColor: ['rgb(54, 199, 118)'],
        },
        {
        label: 'High',    
        data: data.filter(data => data.priority === "High" ).map(filteredData => (filteredData.countPriority)),
        backgroundColor:  ['rgb(255, 99, 132)'],
        },
        {
        label: 'Medium',
        data: data.filter(data => data.priority === "Medium").map(filteredData => (filteredData.countPriority)),
        backgroundColor: ['rgb(255, 205, 86)']
        }]
    }
    
 const options = {
        plugins: {
          title: {
            display: true,
            text: 'Priorities per status'
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          }
        }
      
  }
    
    return(
           
         <Bar data={dataScatter} options={options}  />
            
        )
}

export default ScatterGraph;


