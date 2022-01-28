import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";

function User() {
    
    const [data, setData] = useState([])
    
    async function apiGet() {
        const response = await fetch('http://localhost:8081/peoples');
        const data1 = await response.json();
        setData(data1._embedded.peoples);
    }
    
       
    useEffect(() => {
      console.log("executed only once!");
      apiGet();
      console.log("data only once!");
      
    }, [""]);

  return (
          
          <>
             <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Assigned Project</TableCell>
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
                                        <TableCell>{item.person_name}</TableCell>
                                        <TableCell>{item.person_email}</TableCell>
                                        <TableCell>{item.person_role}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>{item.assigned_project}</TableCell>
                                        <TableCell>{item.created_on}</TableCell>
                                        <TableCell>{item.created_by}</TableCell>
                                        <TableCell>{item.modified_on}</TableCell>
                                        <TableCell>{item.modified_by}</TableCell>
                                        <TableCell>{item.created_on}</TableCell>
                                        <TableCell>{item.created_by}</TableCell>
                                    </TableRow>
                                            
                                    ))
                            }
                        
                    </TableBody>
                </Table>  
             </TableContainer>
            </>
    
  );
}

export default User;



