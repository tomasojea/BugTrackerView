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
            
                
                    <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',}}>
                    {select.map((item)=>(
                        <>
                        <InputLabel>{item.label}</InputLabel>
                            <Select
                              name={item.name}
                              value={item.status}
                              label={item.label}
                              style={{margin:7,}}
                            >
                            
                              
                              <MenuItem key={item.menuItem} value={item.menuItem}>High</MenuItem>
                              <MenuItem key={item.menuItem} value={item.menuItem}>Medium</MenuItem>
                              <MenuItem key={item.menuItem} value={item.menuItem}>Low</MenuItem>
                              
                           
                            </Select>
                        </>
                        ))}
                    </FormControl>
                
            
        </>
    )
        
}

export default FormSelect
