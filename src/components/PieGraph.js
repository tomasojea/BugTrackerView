

import { Pie } from 'react-chartjs-2';

import React, { useEffect, useState } from "react";

 
   
 

function PieGraph(){
    
    const [data, setData] = useState([])
    
    
   
    async function apiGet() {
        const response = await fetch('http://localhost:8081/issues/search/dataPieGraph');
        const data1 = await response.json();
        setData(data1._embedded.graphDatas);
  }
      
  
      useEffect(() => {
        console.log("executed only once!");
        apiGet();
        console.log("data only once!");
        console.log(data);

  }, [""]);
  
  const dataGraph = {
    labels: data.map((key)=>(key.priority)),
    datasets: [{
        label: 'My First Dataset',
        data: data.map((key)=>(key.priorityCount)),
        backgroundColor: [
          'rgb(54, 199, 118)',
          'rgb(255, 205, 86)',
          'rgb(255, 99, 132)'
        ]
    }]
  }
  
   
     
    return(     
        <>
           <Pie  data={dataGraph} options={{responsive: true,maintainAspectRatio: false,plugins: {
                title: {
                  display: true,
                  text: 'Total issues by priority'
                }
        }}}/>

        </>
        
    );
}


export default PieGraph;


