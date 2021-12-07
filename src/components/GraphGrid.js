import Grid from '@mui/material/Grid';
//import Card from '@mui/material/Card';
//import CardHeader from '@mui/material/CardHeader';
//import CardMedia from '@mui/material/CardMedia';
//import CardContent from '@mui/material/CardContent';
import GraphContainer from "../components/GraphContainer"
import BarGraph from "../components/BarGraph"
import LineGraph from "../components/LineGraph"
import PieGraph from "../components/PieGraph"
import ScatterGraph from "../components/ScatterGraph"
import {useState} from "react"

function GraphGrid() {
    const graphs = [
                    <GraphContainer graph={<LineGraph/>} />, 
                    <GraphContainer graph={<BarGraph />} />,
                    <GraphContainer graph={<PieGraph />} />,
                    <GraphContainer graph={<ScatterGraph />} />
                    
                   ]
    
  return (
        <>
            <Grid container spacing={1} align="center" >
                {graphs.map((graph) =>(
                    <Grid item xs={6}>
                        {graph}
                    </Grid>                               
                ))}
            </Grid>
        </>
  );
}

export default GraphGrid;



