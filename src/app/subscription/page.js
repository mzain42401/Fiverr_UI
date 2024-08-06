// components/SubscriptionPlans.js
import React from 'react';
import Dashboard from '../components/Dashboard';
import { FaGift } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { MdGppGood } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";


const plans = [
  {
    name: 'Free',
    price: '£0/month',
    features: [
      { text: 'Publish to x4 social media platform', available: true },
      { text: 'Access to reporting', available: false },
      { text: 'Email marketing campaign creation', available: false },
      { text: 'Blog content creation', available: false },
      { text: 'SEO feature access', available: false },
    ],
    icon: <FaGift/>
  },
  {
    name: 'Basic',
    price: '£5/month',
    features: [
      { text: 'Publish to x4 social media platform', available: true },
      { text: 'Access to reporting', available: true },
      { text: 'Email marketing campaign creation', available: false },
      { text: 'Blog content creation', available: false },
      { text: 'SEO feature access', available: false },
    ],
    icon: <FaStar/>
  },
  {
    name: 'Advanced',
    price: '£10/month',
    features: [
      { text: 'Publish to x4 social media platform', available: true },
      { text: 'Access to reporting', available: true },
      { text: 'Email marketing campaign creation', available: true },
      { text: 'Blog content creation', available: false },
      { text: 'SEO feature access', available: false },
    ],
    icon: <IoIosRocket/>
  },
  {
    name: 'Pro',
    price: '£15/month',
    features: [
      { text: 'Publish to x4 social media platform', available: true },
      { text: 'Access to reporting', available: true },
      { text: 'Email marketing campaign creation', available: true },
      { text: 'Blog content creation', available: true },
      { text: 'SEO feature access', available: false },
    ],
    icon: <GiQueenCrown/>
  },
  {
    name: 'Enterprise',
    price: '£79/month',
    features: [
      { text: 'Publish to x4 social media platform', available: true },
      { text: 'Access to reporting', available: true },
      { text: 'Email marketing campaign creation', available: true },
      { text: 'Blog content creation', available: true },
      { text: 'SEO feature access', available: true },
    ],
    icon: <MdGppGood/>
  },
];

const SubscriptionPlans = () => {
  return (
    <Dashboard>
      <div className='flex justify-center items-center flex-col pt-4'>

<h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
<p className="text-gray-600 ">Select the perfect subscription for your needs</p>
      </div>
<div className="flex-1 p-4 space-y-4">
<div className="flex justify-center items-center flex-wrap ">
{plans.map((plan, index) => (
  <div key={index}  className=" m-4 bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div className="text-center bg-[#2c2c2c]  shadow-lg rounded-lg p-6  w-72  ">
            <h3 className="text-3xl flex justify-center items-center font-bold mb-2 text-[#ffd92e] ">{plan.icon} </h3>
            
            <h3 className="text-xl font-bold mb-2 ">{plan.name} </h3>

            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 border-t border-[#4a4a4a] py-3 flex justify-between gap-2 items-center text-[#d3d3d3]">
                  {feature.available ?  <p className='text-3xl bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] inline-block text-transparent bg-clip-text'> ✔</p> : <p className='text-[#4b4b4b] text-2xl '>✖</p>} <p className='text-left  w-[90%]'>{feature.text}</p>
                </li>
              ))} 

            </ul>
          </div>
  </div>
          
        ))}
  </div>
  </div>
    
    </Dashboard>
  );
};

export default SubscriptionPlans;
