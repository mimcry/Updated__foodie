import * as React from 'react';
import {Box, Grid,Fab} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from "@mui/icons-material/Add";
import Form from './Form';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: "25px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({data, setdata}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> <Grid item lg={2} md={4} xs={6}>
              <Box
                  sx={{
                    mt: 7,
              
                  }}
                >
                  {" "}
                  <Typography sx={{  mt:2,color:"#df2020"}}>Add Food</Typography>{" "}
                  <Typography  sx={{ mt:1, mb: 4 ,textAlign:"center"}}>
                    <Fab
                     
                    sx={{}}
                      aria-label="add"
                    >
                      <AddIcon   sx={{color:"#fd2020"}} 
                      />
                    </Fab>
                  </Typography>
                </Box>
              </Grid></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography >
         <Form  data={data} setdata={setdata} open={open} setopen={setOpen}/>
          </Typography>
         
        </Box>
      </Modal>
    </div>
  );
}
