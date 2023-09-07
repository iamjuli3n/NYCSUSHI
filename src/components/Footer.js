'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (    
        <div className="w-[100%] h-[20%] text-center flex flex-col items-center justify-center text-white bg-black p-5">
            <div className='flex'>
              <div>
              <h1 className="font-bold text-3xl">New York City Sushi</h1>
              <p>Open From 8AM-6PM Monday-Friday</p>
              </div>
              <div>
              <img src='https://cdn-icons-png.flaticon.com/128/2252/2252076.png' className='w-14 h-14 ml-5'></img>
              </div>
            </div>
              
              
          <div class="p-4 flex flex-wrap">
            <div class="w-full md:w-1/6 md:flex sm:mx-auto sm:text-center">
              <ul class="text-left">
                <li>Building Number: 74025</li>
                <li>Street Name: Walsh Throughway</li>
                <li>Street Address: 7229 Graham Plain Apt. 652</li>
                <li>State: Washington</li>
                <li>City: East Nash</li>
                <li>Post Code: 09548-9288</li>
              </ul>
            </div>
            <div class="w-full md:w-1/6 sm:mx-auto sm:text-center">
              <ul class="ml-4">
                <li><a href='/Menu'>Menu</a></li>
                <li><a href='/Careers'>Careers</a></li>
                <li><a href='/Terms'>Terms</a></li>
                <li><a href='/About'>About</a></li>
              </ul>
            </div>
            <div class="w-full md:w-1/6 sm:mx-auto sm:text-center">
              <ul class="ml-4">
                <li><a href='/Menu'>Menu</a></li>
                <li><a href='/Careers'>Careers</a></li>
                <li><a href='/Terms'>Terms</a></li>
                <li><a href='/About'>About</a></li>
              </ul>
            </div>
              <div class="w-full md:w-1/6 sm:mx-auto sm:text-center">
                <ul class="ml-4">
                  <li><a href='/Menu'>Menu</a></li>
                  <li><a href='/Careers'>Careers</a></li>
                  <li><a href='/Terms'>Terms</a></li>
                  <li><a href='/About'>About</a></li>
                </ul>
              </div>
              <div class="w-full md:w-1/6 sm:mx-auto sm:text-center">
                <ul class="ml-4">
                  <li><a href='/Menu'>Menu</a></li>
                  <li><a href='/Careers'>Careers</a></li>
                  <li><a href='/Terms'>Terms</a></li>
                  <li><a href='/About'>About</a></li>
                </ul>
              </div>
            <div class="w-full md:w-1/6 md:flex sm:mx-auto sm:text-center">
              <ul class="ml-4">
                <li><p class='text-2xl'>Contact Us</p></li>
                <li>support@nycsushi.com</li>
                <li>Tel: 212-555-555</li>
              </ul>
            </div>
          </div>
            
            <p>Copyright &copy; 2023. <a href='https://www.bluepherretsoftware.com' target='_blank' className='underline'>Blue Pherret Software LLC</a>.</p>
        </div>
  )
}

export default Hero