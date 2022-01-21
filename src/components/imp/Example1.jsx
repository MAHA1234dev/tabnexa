import { Grid,Box,  TextField, Paper } from "@material-ui/core";
import React,{useState,useEffect} from "react";

export default function Example1() {
    const [name, setName] = useState([])
    const [value, setValue] = useState([])

    // useEffect(() => {
    //     let result = [];
    //     name.forEach((item)=>{
    //         result.push({
    //             name: name
    //         })
           
    //     })
    //     return result  
    // },[])
    const handleDelete = () =>{
        setValue([]);
        setName([])
    } 
    return (
    <div  className="ml-5" >
        <h1>Hi, welcome to my World</h1>
        <Grid  className="mt-3 mr-5">
        <TextField 
            id="outlined-basic" 
            label="Outlined" 
            variant="outlined"
            value={name}
            type="text"
            onChange={(event)=>{setName(event.target.value)}} 
        />
     
        </Grid>
     <button className="mt-3 mr-5" onClick = {()=>handleDelete()}>Delete</button>
     <button className="mt-3 mr-5" onClick = {()=>setValue(name)}>Add</button>
    <Grid>
       <Paper> name :{value}</Paper>
    </Grid> 
    </div>

    )
}
    