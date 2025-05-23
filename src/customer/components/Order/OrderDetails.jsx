import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid className='space-y-5' container>
{[1,1,1,1,1].map((item)=><Grid container className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center",justifyContent:'space-between'}} size={12}>

          <Grid>
            
            <div className="flex items-center space-x-4">
              <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://www.beyours.in/cdn/shop/files/slate-blue-classic-shirt-1_d3b3f3dd-5ddc-4856-9de7-3ca6fbef35ec.jpg?v=1713157102" alt="shirt" />

              <div className="space-y-2 ml-5">
                <p className="font-semibold">Men Slim Mid Rise Black Shirt</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold"> <span>Color: Blue</span> <span>Size: M</span></p>
                <p>Seller: Amazon</p>
                <p>₹800</p>
              </div>
            </div>

          </Grid>  

          <Grid>
            
            <Box sx={{color:deepPurple[500]}}>

              <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
              <span>Rate & Review Product</span>

            </Box>

          </Grid>        

        </Grid> )}
        

      </Grid>
      
    </div>
  )
}

export default OrderDetails
