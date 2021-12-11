import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Link, Route,Switch} from "react-router-dom"
import Issue from "../components/Issue.js"
import { useEffect, useState } from "react";


function ProjectTable(){
    
    const [data, setData] = useState([])
    
    async function apiGet() {
        const response = await fetch('http://localhost:8081/projects');
        const data1 = await response.json();
        setData(data1._embedded.projects);
    }
    
       
    useEffect(() => {
      console.log("executed only once!");
      apiGet();
      console.log("data only once!");
    }, [""]);
   
  
    return(
            
            <>
             <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Project Name</TableCell>
                            <TableCell>Start Date</TableCell>
                            <TableCell>Target end date</TableCell>
                            <TableCell>Actual endt date</TableCell>
                            <TableCell>Created on</TableCell>
                            <TableCell>Created by</TableCell>
                            <TableCell>Modified on </TableCell>
                            <TableCell>Issues</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                            {data.map((item) => (
                                    <TableRow>
                                        <TableCell>{item.project_name}</TableCell>
                                        <TableCell>{item.start_date}</TableCell>
                                        <TableCell>{item.target_end_date}</TableCell>
                                        <TableCell>{item.actual_end_date}</TableCell>
                                        <TableCell>{item.created_on}</TableCell>
                                        <TableCell>{item.created_by}</TableCell>
                                        <TableCell>{item.modified_on}</TableCell>
                                        <TableCell>{item.modified_by}</TableCell>
                                        <TableCell><Link  to={{pathname: "/projects/issues", state: {issues: item._links.issueses.href}}}>Issues</Link></TableCell>
                                    </TableRow>
                                            
                                ))
                            }
                        
                    </TableBody>
                </Table>  
             </TableContainer>
             <Switch>
             <Route  path="/projects/issues"  component={Issue}/>
             </Switch>
            </>
    )
}

export default ProjectTable;


