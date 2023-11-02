/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Box from '@mui/material/Box';

import Fab from '@mui/material/Fab';



import { useRouter } from 'next/router'





// components

import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import Reviews from "../components/Reviews.js"

import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

import axios from 'axios';

export default function Landing() {
  const router = useRouter()
  console.log(router.or)


  return (
    <>
      <Head>
        <title>
          Imperium SEO
        </title>
        <meta name="description" content="A digital marketing agency that helps businesses grow their brand and increase their sales top notch email marketing at the lowest fees possible"/>
      </Head>
      <NavBar />
      <main style={{marginTop: '66px'}}>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
        style={{
          background: "linear-gradient(rgba(30,41,59,1), rgba(0,212,255,1));"
        }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              // backgroundImage:
              //   "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
              background: "linear-gradient(rgba(30,41,59,1), rgba(0,212,255,1));"
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          
          <div className="container relative mx-auto">
            
            <div className="">
              <div className="w-full lg:w-12/12 px-4 ml-auto mr-auto">
                
                <Box sx={{
                  width: {
                    xs: "100%",
                    md: "60%"
                  },
                  float: {
                    md: "left"
                  },
                  textAlign: {
                    xs: "center",
                    md: "left"
                  }
                }}>
                  <h1 className="text-white font-semibold mt-5">
                    Outrank Your Competitors In Your Area
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    We will help you rank your business in the first page of google business profiles in your area.
                  </p>
                  <a href="#booking">
                    <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                          type="button"
                          style={{
                            border: 'solid'
                          }}
                          >
                            
                      <p style={{fontSize: '1.2em', fontWeight: 'bold', marginBottom: '0', color: '#f1f1f1'}}>Speak To Our Team</p>
                      
                        Schedule Your Free Discovery Call
                      </button>
                  </a>
                  

                </Box>
                <Box sx={{
                  float: "right",
                  display: {
                    md: "block",
                    xs: "none",
                  },
                  marginBottom: "30px"
                }}>
                  <Image src="/GoogleBusinessSEO.png" width="322" height="440"/>
                </Box>
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
                    <h6 className="text-xl font-semibold">Welcome many NEW clients and customers on the daily basis</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      The vast majority of the traffic you&apos;ll receive from Google will be people that have never heard about your business before. <br />
                      Giving you the opportunity to gain new loyal customers.
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
                    <h6 className="text-xl font-semibold">If your business is not in the first page, you can consider it not listed at all.</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      According to an analysis of 4 million Google search results, just 0.63% of people click on the second page of Google search results (Backlinko, 2022). <br />
                      And this statistic is very similar to our experience with google business profile listings.
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
                    <h6 className="text-xl font-semibold">Grab Your Place in The First Page in No Time</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      While it may take up to 3 months, most of our clients rank in the first page of google business listings within a month of working with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            </div>

            {/* <div
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
          </div> */}

          <div id="low-prices" className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              {/* <div className="w-full md:w-4/12 ml-auto mr-auto px-4" style={{maxHeight: "700px", overflow: ""}}>
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="work-sample-s.gif"
                />
              </div> */}
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                {/* <div className="">
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
                </div> */}
                {/* <div className="md:pr-12">
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
                  

                </div> */}
              </div>
            </div>
          </div>
          <Reviews />
        </section>
        <section className="relative py-20">
          <div className="flex flex-wrap items-center mt-32">
            <Box className="w-full md:w-5/12 px-4 mr-auto ml-auto" sx={{display: {xs: "block", md: "none"}}}>
                  <img
                    alt="..."
                    src="seostockside.png"
                    // 
                    className="w-full align-middle"
                  />
                  {/* <blockquote className="relative p-8 mb-4">
                    
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
                    
                  </blockquote> */}
              </Box>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl">
                    <MiscellaneousServicesIcon fontSize='large' color='primary' />
                  </i>
                </div>
                <h4>How Can We Help You Grow Your Business</h4>
                <h3 className="text-3xl mb-2 font-semibold leading-normal" style={{color: '#1976D2'}}>
                  Top Notch SEO For Your Google Business Profile
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We will help you get your business ranked in the first page of Google listings in your area.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                   This improve in ranking has multiplied the organic traffic to our clients many times over. As getting your business profile discovered in search results will direct all of the customers and clients in your area to your business.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Many of our clients has achieved this results within the first month of working with us, while it many take around 3 months.
                </p>
                
              </div>
              <Box className="w-full md:w-5/12 px-4 mr-auto ml-auto" sx={{display: {xs: "none", md: "block"}}}>
                  <img
                    alt="..."
                    src="seostockside.png"
                    // 
                    className="w-full align-middle"
                  />
                  {/* <blockquote className="relative p-8 mb-4">
                    
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
                    
                  </blockquote> */}
              </Box>

              
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
                  Book Your Free Discovery Call.
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  <b style={{fontSize: '1.3em'}}>Who will you be speaking to?</b> <br />
                  <b>Amer Sulaiman</b>, the founder of Imperium SEO, B.Sc. Computer Science, 5+ years of helping businesses grow with SEO services.
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
                <iframe id="booking" title="bookingframe" src="https://koalendar.com/e/meet-with-amer-sulaiman?embed=true" width="100%" height="800px" frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </section>

        <a href="#booking">
          <Fab variant="extended" style={{position: 'fixed', bottom: 30, right: 30}} >
            Book Free Discovery Call
          </Fab>
        </a>
        

      </main>
      <Footer />

    </>
  );
}
