import React from 'react';
import StockHome from './StockHome';

const Service = () => (
  <div className="w-full bg-[#010118] py-11 text-center">
    <h3 className=" text-4xl capitalize py-[5rem] "> why to choose crypto </h3>
    <div className="container md:grid md:grid-cols-3 max-md:grid max-md:grid-rows-3  gap-3 w-[60%]">
      <div className="rounded p-4 border  border-[#cecece32] flex flex-col items-center  gap-2 bg-[#010130] ">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#139AFA" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6m3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m10.5.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41Z" /></svg>
        <h3 className="text-2xl">Secure</h3>
        <span className="text-white"> Advanced cryptographic techniques secure transactions, making it highly resistant to fraud and hacking</span>
      </div>
      <div className="rounded p-4 border  flex flex-col items-center  gap-2 bg-[#010130]  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#139AFA" d="M19 13c.34 0 .67.04 1 .09V10a2 2 0 0 0-2-2h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6a2 2 0 0 0-2 2v10c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6M9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6m3 11a2 2 0 1 1 2-2c0 1.11-.89 2-2 2m10.5.25L17.75 22L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41Z" /></svg>
        <h3 className="text-2xl">Fast</h3>
        <span className="text-white"> transactions occur in real-time, often faster than traditional banking methods.</span>
      </div>
      <div className="rounded p-4 border flex flex-col items-center  gap-2 bg-[#010130]  ">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="#139AFA" d="m6.527 10.782l-.001-.003a5.305 5.305 0 0 1-.19-.062a5.011 5.011 0 0 1-2.284-1.649a5 5 0 1 1 8.924-3.567c.027.275-.2.499-.476.499c-.276 0-.497-.225-.53-.499a4 4 0 1 0-5.285 4.278a1.5 1.5 0 1 1-.158 1.003Zm-.793.775a6.02 6.02 0 0 1-2.482-1.889A1.493 1.493 0 0 0 3 10.5v.5c0 1.971 1.86 4 5 4c3.14 0 5-2.029 5-4v-.5A1.5 1.5 0 0 0 11.5 9H10a2.5 2.5 0 1 1-4.266 2.557ZM11 6c0-.914-.409-1.733-1.054-2.283a3 3 0 1 0-3.518 4.84A2.49 2.49 0 0 1 8 7.999a2.49 2.49 0 0 1 1.572.556A2.998 2.998 0 0 0 11 6Z" /></svg>
        <h3 className="text-2xl">Support</h3>
        <span className="text-white">Engage with our vibrant community forums to connect with other users and share experiences.</span>
      </div>
    </div>
    <StockHome />
  </div>
);

export default Service;
