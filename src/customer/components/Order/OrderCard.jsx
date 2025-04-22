import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
const OrderCard = () => {
  return (
    <div className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcScWTB6z6_jyTGBJ09qu4NtXKWSgkK9tq9NI5j1JGuzlXXhVKrUDMgkB648-Whyy_SP2AR2PkmsMPsLTjvnDgdZwA2F9XvDbbSzUOJQk5s"
              alt=""
            />

            <div className="ml-5 space y-2">
              <p className="">
                Campus Sutra Classic Self Design Spread Collar Casual Shirt
              </p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">
                Color:Light Brown
              </p>
            </div>
          </div>
        </Grid>

        <Grid size={{ xs: 2 }}>
          <p>₹816</p>
        </Grid>

        <Grid size={{ xs: 4 }}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2 text-sx"
                />
                <span>Delivered On March 03</span>
              </p>
              <p className="text-xs">Your Item Has Been Delivered</p>
            </div>
          )}

          {false && (
            <p>
              <span>Expected Delivery On March 03</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
