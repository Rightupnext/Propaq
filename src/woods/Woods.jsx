import React from 'react'
import { useEffect } from 'react';
import Navbar from '../components/Navbar'
import hero from "../woods/hero.jpg";
import pic1 from "../woods/wood1.jpg";
import pic2 from "../woods/wood2.jpg";
import pic3 from "../woods/wood3.jpg";
import pic4 from "../woods/wood4.jpg";
import pic5 from "../woods/wood5.jpg";
import pic6 from "../woods/wood6.jpg";
import pic7 from "../woods/wood7.jpg";
import pic8 from "../woods/wood8.jpg";
import pic9 from "../woods/wood9.jpg";
import pic10 from "../woods/wood10.jpg";
import banner from "../woods/banner.jpg";
import img1 from "../woods/f1.jpg";
import img2 from "../woods/f2.jpeg";
import img3 from "../woods/f3.webp";
import img4 from "../woods/f4.webp";

import img6 from "../woods/ply.webp"
import img8 from "../woods/pine.jpg"
import img7 from "../woods/rubber.webp"
import img10 from "../woods/teak.jpg"
import WoodPalletParallax from "../woods/Pallets"; // 
import WhatsApp from '../whatsapp/Whatsapp';


const Woods = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <>
    <WhatsApp />
     
    {/* <section className="mx-auto my-10 flex max-w-xl flex-col rounded-3xl border p-4 sm:px-16 sm:py-16 lg:max-w-screen-lg lg:flex-row">
  <div className="lg:w-1/2 lg:pr-8">
    <div className="">
      <button className="mr-4 mb-2 rounded-full bg-blue-600 px-2 py-1 font-medium text-white transition">
        Code
      </button>
      <button className="mr-4 mb-2 rounded-full px-2 py-1 font-medium text-gray-600 transition focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:text-blue-600 hover:ring hover:ring-blue-600">
        Atom
      </button>
      <button className="mr-4 mb-2 rounded-full px-2 py-1 font-medium text-gray-600 transition focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:text-blue-600 hover:ring hover:ring-blue-600">
        Visual Studio
      </button>
      <button className="mr-4 mb-2 rounded-full px-2 py-1 font-medium text-gray-600 transition focus:text-blue-600 focus:outline-none focus:ring focus:ring-blue-600 hover:text-blue-600 hover:ring hover:ring-blue-600">
        Sublime
      </button>
    </div>
    <div className="mt-4">
      <h2 className="text-3xl font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>
      <p className="mt-6 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        consequatur fuga odio laudantium dolor, dolorum magnam. Ducimus quasi,
        odio harum eum repellendus, minus placeat fugit natus omnis neque ea
        maiores, reiciendis culpa!
      </p>
    </div>
  </div>
  <div className="-order-1 mb-8 lg:order-1 lg:mb-0 lg:w-1/2">
    <img
      className="border-blue-600/10 rounded-3xl border shadow-md"
      src="/images/Vd9EQVZZRa9vVAMWfadpV.png"
      alt=""
    />
  </div>
</section> */}

<div className="mx-auto max-w-screen-lg">
  <div
    className="relative h-56 rounded-b-lg bg-cover bg-center bg-no-repeat shadow-lg"
    style={{ backgroundImage: `url(${hero})` }}
  >
    <div className="px-4 pt-8 pb-10">
      <div className="absolute inset-x-0 -bottom-10 mx-auto w-36 rounded-full border-8 border-white shadow-lg">
        <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2" />
        <img
          className="mx-auto h-auto w-full rounded-full"
          src={pic1}
          alt=""
        />
      </div>
    </div>
  </div>
  {/* <div className="mt-10 flex flex-col items-start justify-center space-y-4 py-8 px-4 sm:flex-row sm:space-y-0 md:justify-between lg:px-0">
    <div className="max-w-lg">
      <h1 className="text-2xl font-bold text-gray-800">Beep Essences</h1>
      <p className="mt-2 text-gray-600">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
        alias. Quas necessitatibus exercitationem praesentium.
      </p>
    </div>
    <div className="">
      <button className="flex whitespace-nowrap rounded-lg bg-pink-600 px-6 py-2 font-bold text-white transition hover:translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 inline h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        Chat with us
      </button>
      <p className="mt-4 flex items-center whitespace-nowrap text-gray-500 sm:justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 inline h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
        +1 432 923 0001
      </p>
    </div>
  </div> */}
  <main className="grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img1}
          alt=""
        />
      </div>
      <div className="absolute top-0 m-1 rounded-full bg-white">
        {/* <p className="rounded-full bg-black p-1 text-[10px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
          Sale
        </p> */}
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
              Rubber Woods 
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
        
        </div>
        {/* <div className="text-right">
          <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
            {" "}
            $79.00{" "}
          </del>
          <p className="text-xs font-normal sm:text-sm md:text-base">$99.00</p>
        </div> */}
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img2}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
              Pine woods
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
        
        </div>
       
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img3}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
              ply woods
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
        
        </div>
       
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img4}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
             Brown ply woods
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
        
        </div>
       
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img6}
          alt=""
        />
      </div>
      <div className="absolute top-0 m-1 rounded-full bg-white">
        
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
              Ply wood pallets 
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
         
        </div>
       
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img7}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
             Pine Wood pallets
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
         
        </div>
        
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img8}
          alt=""
        />
      </div>
      <div className="absolute top-0 m-1 rounded-full bg-white">
        
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
             Rubber Wood pallets
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
        
        </div>
       
      </div>
    </article>
    <article className="relative">
      <div className="aspect-square overflow-hidden">
        <img
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
          src={img10}
          alt=""
        />
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div className="">
          <h3 className="text-xs font-semibold sm:text-sm md:text-base">
            <a href="#" title="" className="">
             Teak Wood
              <span className="absolute" aria-hidden="true" />
            </a>
          </h3>
        
        </div>
      
      </div>
    </article>
  </main>
</div>




{/* <div className="mx-auto max-w-screen-lg bg-yellow-500 p-8 text-white md:flex md:items-center md:justify-around md:p-16 lg:rounded-xl">
  <div className="mr-10 mb-10 md:mb-0">
    <h2 className="mb-8 max-w-lg text-3xl font-bold sm:text-4xl">
      Announcement banner for your new features
    </h2>
    <ul className="flex max-w-xl flex-wrap gap-4">
      <li className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-800"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-100">A new feature for you</p>
      </li>
      <li className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-800"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-100">Feature Enhancements</p>
      </li>
      <li className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-800"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-100">Site Speedup</p>
      </li>
      <li className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-800"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-100">More Components</p>
      </li>
      <li className="flex space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 text-blue-800"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-gray-100">Further Enhancements to the Dashboard</p>
      </li>
    </ul>
  </div>
  <div className="whitespace-nowrap">
    <button className="focus:outline-4 rounded-xl bg-blue-800 px-4 py-3 font-medium text-white shadow-md outline-white transition hover:bg-emerald-500">
      Try these now
    </button>
  </div>
</div> */}




<section className="py-2 md:py-2">
  <div className="w-full max-w-full mx-auto px-4 sm:px-6 md:px-8 relative">
    <div className="shadow rounded-xl">
      <div className="grid overflow-hidden text-white shadow-xl md:grid-cols-2 bg-green-700 rounded-xl">
        <aside className="p-8 space-y-4 md:p-16">
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl font-headline">
            Build Green. Live Clean.
          </h2>
          <p className="font-medium text-green-100 md:text-2xl">
            Join the movement — we recycle woods to shape sustainable spaces.
            Eco-friendly. FSC-certified. Future-ready.
          </p>
          <div>
            <a
              href="#"
              className="bg-white text-green-700 px-4 py-2 mt-3 rounded-xl font-semibold hover:bg-green-100 transition-all"
            >
              Explore Sustainable Solutions
            </a>
          </div>
        </aside>
        <aside className="relative hidden md:block">
          <img
            className="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg"
            src={banner} // replace with your eco-friendly wood image
            alt="Eco-conscious recycled wood products"
          />
        </aside>
      </div>
    </div>
  </div>
</section>

<WoodPalletParallax/>

    </>
  )
}

export default Woods