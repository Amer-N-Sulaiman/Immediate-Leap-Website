/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {useState} from 'react'
import Head from 'next/head'


// components

import NavBar from "../../components/NavBar.js";
import Footer from "../../components/Footer.js";

import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import axios from 'axios';

function Landing() {
  


  return (
    <>
      <Head>
        <title>
          M-ZEIT
        </title>
        <meta name="description" content="A digital marketing agency that helps businesses grow their brand and increase their sales top notch email marketing at the lowest fees possible"/>
      </Head>
      <NavBar />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold">
                    Grow Your Brand With Top Notch Email Marketing
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    Stop leaving so much money on the table by not implementing the most effective email flows and campaigns.
                  </p>
                  <a href="#booking">
                    <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          style={{
                            border: 'solid'
                          }}
                          >
                            
                      <p style={{fontSize: '1.2em', fontWeight: 'bold', marginBottom: '0', color: '#f1f1f1'}}>Speak To Our Team</p>
                      
                        Schedule Your Free Audit Call
                      </button>
                  </a>
                  

                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Increase Your Overall ROI</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We help you turn the customers you gain from paid ads into repeat customers by keeping them engaged with consistent very personalized emails.
                      <br/>
                      We also turn your website visitors into buying customers, such as visitors with abandoned carts.
                    </p>
                  </div>
                </div>
              </div>

              

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Generate 4$ extra from Email Marketing for every 10$ of revenue from other channels</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Implementing our Email Marketing systems makes it virtually impossible to not make Email generate 30% of your total revenue.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Gain Loyal Customers</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      We focus on building good relationships between our clients brands and their customers, by sending consistent personalized Emails.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            </div>

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

          <div id="low-prices" className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4" style={{maxHeight: "700px", overflow: ""}}>
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="work-sample-s.gif"
                />
                {/* https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 */}
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="">
                  <div 
                  className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700"
                    style={{marginTop: "30px"}}
                    >
                    <img
                      alt="..."
                      src="testimonial.png"
                      // 
                      className="w-full align-middle rounded-t-lg"
                      style={{}}
                    />
                    
                  </div>
                </div>
                <div className="md:pr-12">
                  <div className="">
                  <div 
                  className="relative flex flex-col min-w-0 break-words w-full mb-6"
                  style={{marginTop: "30px", float: 'right'}}
                  >
                    <img
                      alt="..."
                      src="stats-t.png"
                      // 
                      className="w-full align-middle rounded-t-lg"
                      style={{}}
                    />
                    
                  </div>
                </div>
                  

                </div>
              </div>
            </div>
          </div>
        </section>

        
        

        <section className="pb-20 relative block bg-blueGray-800">
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white" style={{marginTop: '60px'}}>
                  Do You Qualify For The Pay-Per-Results Plan?
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  We offer a plan where you only pay a percentage of the profit we add to the profit you&apos;ve been generating before with no upfront cost.
                  <br/><b>Book a call below to discuss if you qualify.</b>
                </p>
              </div>
            </div>
            
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              {/* <div className="w-full lg:w-6/12 px-4"> */}
              <div className="w-full px-4">
                <iframe id="booking" src="https://koalendar.com/e/meet-with-amer-sulaiman?embed=true" width="100%" height="800px" frameborder="0"></iframe>
                
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl">
                    <MiscellaneousServicesIcon fontSize='large' color='primary' />
                  </i>
                </div>
                <h4>What We Offer</h4>
                <h3 className="text-3xl mb-2 font-semibold leading-normal" style={{color: '#1976D2'}}>
                  Top Notch Email Marketing
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We implement Email flows that get triggered automatically to send customers corresponding, highly personalized, emails. These Email flows will continue earning you money even after finishing working with us.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                   We craft consistent Email campaigns to remind your customers of your brand and harness the events that are going on in the world to give the customers very tempting offers.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  We also offer, our clients only, free services like Domain Reputation Restoration if needed. We offer these services to maximize the results we bring for our clients.
                </p>
                
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    // 
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    
                    <h4 className="text-xl font-bold">
                      The Team
                    </h4>
                    <p className="text-md mt-2">
                      Our Team consists of highly talented individuals in the following roles:<br/>
                      - Copywriter<br/>
                      - Designer<br/>
                      - Strategist<br/>
                      - Clients Relations Manager
                    </p>
                    
                  </blockquote>
                </div>
              </div>
            </div>
          
        </section>

      </main>
      <Footer />

    </>
  );
}

Landing.getInitialProps = async (ctx) => {
  const res = await fetch('https://mzeit.pythonanywhere.com/click')
  return { stars: res}
}

export default Landing
