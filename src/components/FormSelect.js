import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import  {FormInputSelectCont}  from '../components/FormReusable';
import  {FormInputCont}  from '../components/FormReusable';

import { useContext } from 'react';
import {useState,useEffect} from "react"

function FormSelect(){
    const [select, setSelect] = useContext(FormInputSelectCont);
    const [input, setInput, data, setData] = useContext(FormInputCont);
    
    const handlerfChange = (e) => {
        console.log("//// From FormSelect ////")
        console.log(data)
        const { name, value } = e.target;
        setData({...data,[name]: value});
        console.log("//// From FormSelect ////")
    };
    
    useEffect(() => {
       
        
    }, [data]);
   
return(
        <>
                            
                   
            <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap', marginLeft:1 }}>
                {select.map((item)=>(
                    <>
                        <InputLabel>{item.label}</InputLabel>
                        <Select
                          multiple
                          name={item.name}
                          value={[]}
                          label={item.label}
                          sx={{ minWidth: 130 }}
                          inputProps={{style: {fontSize: 13, color:"#cccccc"}}}
                          onChange={handlerfChange}
                        >
                            {  item.menuItem.map(selected => 
                                <MenuItem key={selected} value={selected}>{selected}</MenuItem>
                            )} 

                        </Select>
                    </>
                ))}
            </FormControl>
                            
        </>
    )
        
}

export default FormSelect;
