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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {useState} from "react"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1), //grid padding
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function GraphGrid() {
    
    const classes = useStyles();

    const graphs = [
                    <GraphContainer graph={<LineGraph/>} />, 
                    <GraphContainer graph={<BarGraph />} />,
                    <GraphContainer graph={<PieGraph />} />,
                    <GraphContainer graph={<ScatterGraph />} />
                    
                ]
    
    
  return (
        <>
            <Grid container spacing={1} align="center"  >
                {graphs.map((graph) =>(
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>{graph}</Paper>
                    </Grid>                               
                ))}
            </Grid>
        </>
  );
}

export default GraphGrid;



