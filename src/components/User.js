import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import {Link, Route,Switch, useLocation} from "react-router-dom"

function User() {
    
    const [data, setData] = useState([])
    const location = useLocation()
    const fromDashboard = location.state
    
    async function apiGet() {
        const response = await fetch('http://localhost:8081/peoples');
        const data1 = await response.json();
        setData(data1._embedded.peoples);
    }
    
    async function removeItem() {
        try {
             await fetch(fromDashboard.peoples, {
                method: "DELETE",
            });
        } catch (err) {
        }
        apiGet();
    }

    
   
       
    useEffect(() => {
      console.log("executed only once!");
      console.log(fromDashboard);
      apiGet();
      removeItem();
      
      console.log("data only once!");
      
    }, [""]);

  return (
          
          <>
             <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Assigned Project</TableCell>
                            <TableCell>Created On</TableCell>
                            <TableCell>Created By</TableCell>
                            <TableCell>Modified On</TableCell>
                            <TableCell>Modified By Resolution Date</TableCell>
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
                                        <TableCell ><Link  to={{state: {peoples: item._links.self.href}}} onClick={removeItem}>Delete</Link></TableCell>
                                       
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



