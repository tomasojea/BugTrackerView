import FormControl from '@mui/material/FormControl';
import  {FormInputCont}  from '../components/FormReusable';
import { useContext } from 'react';
import {useState} from "react"
import TextField from '@mui/material/TextField';
import {useEffect} from "react"

function FormInput({setSend}){

    const [input, setInput, data, setData] = useContext(FormInputCont);
    
    const handlermChange = (e) => {

        const { name, value } = e.target;
        setData({...data,[name]: value});
        

    };
        
    useEffect(() => {
        console.log("////From FormInput////")
        console.log(data)
        console.log("////From FormInput////")
        setSend(data)
    }, [data]);


return(
      
      <>
        {input.map((item) => (

           <>
                       
                <FormControl sx={{display:'flex',flexDirection: 'row',flexWrap: 'wrap',}}>
                    <TextField 
                       name={item.name}
                       value={data.value}
                       required
                       type={item.type}
                       label={item.label}
                       defaultValue={item.defaultValue}
                       id="outlined-required"
                       inputProps={{style: {fontSize: 13, color:"#cccccc"}}}
                       InputLabelProps={{ shrink: true }}
                       onChange={handlermChange}
                    />
                </FormControl>
           
           </>

        ))}
    </>
    
)
      
        
}

export default FormInput

