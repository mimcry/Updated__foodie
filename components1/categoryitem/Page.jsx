import React from 'react'
import { Box,Typography } from '@mui/material'

const Page = ({name}) => {
  return (<Box>
    <Typography
            orientation="vertical"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <img
              className="logo"
              src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/306322859_1152926112244740_5963128937608353779_n.png?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=qmi-xv_RpuEAX8sakt9&_nc_ht=scontent.fktm6-1.fna&oh=03_AVK-BYXmFVUgFxRDtbO7hXwmBuvGiiuGhT4NRE4DRNVB5w&oe=634939EC"
              alt=""
            />
            <Typography
              sx={{
                textAlign: "center ",
                fontSize: "2.2rem",
                textShadow: "2px 3px gray",
                color: "#df2020",
              }}
            >
              {" "}
              Foodie's {name} Item
            </Typography>
          </Typography></Box>
  )
}

export default Page