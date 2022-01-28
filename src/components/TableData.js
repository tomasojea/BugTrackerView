import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";

 
function TableData(){
    
    const [data, setData] = useState([])
    
    async function apiGet() {
        const response = await fetch('http://localhost:8081/issues');
        const data1 = await response.json();
        setData(data1._embedded.issues);
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
                            <TableCell>Issue Summary</TableCell>
                            <TableCell>Issue Description</TableCell>
                            <TableCell>Identified Description</TableCell>
                            <TableCell>Identified Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Priority</TableCell>
                            <TableCell>Target Resolution Date</TableCell>
                            <TableCell>Progress</TableCell>
                            <TableCell>Actual Resolution Date</TableCell>
                            <TableCell>Resolution Summary</TableCell>
                            <TableCell>Created on</TableCell>
                            <TableCell>Created By</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                            {data.map((item) => (
                                    <TableRow>
                                        <TableCell>{item.issue_summary}</TableCell>
                                        <TableCell>{item.issue_description}</TableCell>
                                        <TableCell>{item.identified_date}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                        <TableCell>{item.priority}</TableCell>
                                        <TableCell>{item.target_resolution_date}</TableCell>
                                        <TableCell>{item.progress}</TableCell>
                                        <TableCell>{item.actual_resolution_date}</TableCell>
                                        <TableCell>{item.resolution_summary}</TableCell>
                                        <TableCell>{item.created_on}</TableCell>
                                        <TableCell>{item.created_by}</TableCell>
                                    </TableRow>
                                            
                                    ))
                            }
                        
                    </TableBody>
                </Table>  
             </TableContainer>
            </>
    )
}

export default TableData;
