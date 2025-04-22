import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid } from "@mui/material";

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

      <Grid container className="space-x-5">
        <Grid container className="rounded-md p-5 shadow-xl border" sx={{alignItems:"center",justifyContent:"space-between"}}>
          <Grid size={6}>
          
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderDetails;
