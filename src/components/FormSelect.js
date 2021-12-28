import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import  {FormInputSelectCont}  from '../components/FormReusable';
import { useContext } from 'react';
import {useState} from "react"

function FormSelect(){
    const [select, setSelect] = useContext(FormInputSelectCont);
return(
        <>
            
                
                    <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap', marginLeft:1 }}>
                    {select.map((item)=>(
                        <>
                        <InputLabel>{item.label}</InputLabel>
                            <Select
                              name={item.name}
                              value={item.status}
                              label={item.label}
                              sx={{ minWidth: 130 }}
                              inputProps={{style: {fontSize: 13, color:"#cccccc"}}}
                            >
                            
                              
                              <MenuItem key={item.menuItem} value={item.menuItem}>Open</MenuItem>
                              <MenuItem key={item.menuItem} value={item.menuItem}>Close</MenuItem>
                              <MenuItem key={item.menuItem} value={item.menuItem}>In Progress</MenuItem>
                              
                           
                            </Select>
                        </>
                        ))}
                    </FormControl>
                
            
        </>
    )
        
}

export default FormSelect
