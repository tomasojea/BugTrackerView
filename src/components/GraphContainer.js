import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';


function GraphContainer(props) {
    
  return (
          <>
            <Card>
                <CardHeader/>
                <CardContent>
                   {props.graph}
                </CardContent>
            </Card>
          </>
  );
}

export default GraphContainer;

