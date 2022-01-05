import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import  {FormInputSelectCont}  from '../components/FormReusable';
import  {FormInputCont}  from '../components/FormReusable';

import { useContext } from 'react';
import {useState} from "react"

function FormSelect(){
    const [select, setSelect] = useContext(FormInputSelectCont);
    const [input, setInput, data, setData] = useContext(FormInputCont);
    const handlermChange = (e) => {

        const { name, value } = e.target;
        setData({...data,[name]: value});
        

    };

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
                              onChange={handlermChange}
                            >
                            
                              
                              <MenuItem key={item.menuItem[0]} value={item.menuItem[0]}>{item.menuItem[0]}</MenuItem>
                              <MenuItem key={item.menuItem[1]} value={item.menuItem[1]}>{item.menuItem[1]}</MenuItem>
                              <MenuItem key={item.menuItem[2]} value={item.menuItem[2]}>{item.menuItem[2]}</MenuItem>
                              
                           
                            </Select>
                        </>
                        ))}
                    </FormControl>
                
            
        </>
    )
        
}

export default FormSelect
