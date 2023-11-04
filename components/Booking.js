import React from "react";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Footer() {
  return (
    <>
      {/* <section className="relative py-20 bg-blueGray-200"> */}
      <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
                <iframe title="booking-old" width='100%' height='585px' src='https://zoho-amer241.zohobookings.com/portal-embed#/customer/mzeit' frameBorder='0' allowFullScreen='' > 
                </iframe>
              
            </div>
          </div>
        </section>
    </>
  );
}
