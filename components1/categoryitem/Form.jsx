import React from "react";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
const Form = ({data,setdata,open,setopen}) => {
  const { setCombos, setShowSnackBar } = useState("");
  const[formdata, setformdata] = useState({});
  console.log(data.length)
  const onchange=(e)=>{
   
    const name = e.target.name
    const value = e.target.value
 
    const data ={... formdata}
    
    data [name]=value
   
    setformdata(data)
    
  }
  const save =(e)=>{
   console.log(formdata)
   formdata["id"] = parseInt(data?.length )+1
   setdata(data=>([...data, formdata]))
   setopen(!open)
  }
  const [file, setfile] = useState();
console.log(data)
  return (
    <div>
      <form  >
      <Box>
        <Typography sx={{ textAlign: "center ", mb: 4 }} >
          Food To Be Added
        </Typography>
        <Typography>
          {" "}
          Food Name: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="Food Name"
            variant="outlined"
            placeholder="Momo"
            onChange={onchange}
            name='title'
          />
        </Typography>
        <Typography sx={{ mt: 4, Align: "center" }}>
          {" "}
          Food Price: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="Food Price"
            variant="outlined"
            placeholder="Rs 100"
           onChange={onchange}
           name='price'
          />
        </Typography>
        <Typography sx={{ mt: 4, Align: "center" }}>
          {" "}
          Subtitle: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="Subtitle"
            variant="outlined"
            onChange={onchange}
            name='subtitle'
          />
        </Typography>
        <Typography>
          {" "}
         URL: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="Food Name"
            variant="outlined"
            placeholder="Momo"
            onChange={onchange}
            name='image'
          />  </Typography>
        <Button  onClick={save} sx={{ ml: 15, mt: 2 }} variant="outlined" color="error" >
       <Typography sx={{fontWeight:550}}>  Save</Typography>
        </Button>
      </Box></form>
    </div>
  );
};

export default Form;
