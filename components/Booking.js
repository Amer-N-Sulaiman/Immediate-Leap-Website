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
              {/* <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h5>Schedule Your Call With M-Zeit founder, Amer</h5>
                  <h3>Free 15-Minute Demo Call</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Our main model is that we work with our customers on choosing the right services and service options that would result in the biggest growth in their business.
                    We always keep our customers informed of the expected growth in their business by continuous reports.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
    </>
  );
}
