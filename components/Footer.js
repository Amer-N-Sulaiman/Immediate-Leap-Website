import React from "react";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center">
            <div className="w-full px-4">
              <h4 className="text-3xl font-semibold">Let&apos;s keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Email us on the following email address, we respond in 24 hours.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                
                  <EmailRoundedIcon color='primary' fontSize='large' style={{marginRight: '10px'}}/>
                  
                  support@immediateleap.com
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} ImmediateLeap
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
