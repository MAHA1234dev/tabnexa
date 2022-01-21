import React,{useState  } from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
export default function Hansik() {
const [show , setShow]=useState(false)
const [details , setDetails]=useState(false)


//  const handleUpdate =() =>{
//      setShow(false)
//  }
//  const handleProducts =() =>{
//     setDetails(false)
// }

    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox onClick={()=>{setShow(!show); setDetails(false)}}/>} label="Products">show</FormControlLabel> 
            </FormGroup>
            {
             show === false  ? null :  (
                <FormGroup>
                <FormControlLabel control={<Checkbox onClick={()=>setDetails(!details)}/>} label="Product Details"/>
                </FormGroup>
              ) 
            }
             {
             details === false ? null : (
               <table cellSpacing="30px" cellPadding='10px' >
                   <tr>
                       <td>
                       <FormGroup>
                       <FormControlLabel control={<Checkbox />} label="Show Details"  />
                       </FormGroup>
                       </td>
                       <td>Name</td>
                       <td>Price</td>
                       <td>Feature</td>
                    </tr>
               </table>
              )
            }
        </div>
    )
}
