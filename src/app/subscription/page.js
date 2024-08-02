// components/SubscriptionPlans.js
import React from 'react';
import Dashboard from '../components/Dashboard';

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
    icon: '🎁'
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
    icon: '⭐'
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
    icon: '🚀'
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
    icon: '👑'
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
    icon: '🏢'
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
          <div key={index} className="bg-[#2c2c2c] shadow-lg rounded-lg p-6 m-4 w-72  ">
            <h3 className="text-xl font-bold mb-2">{plan.icon} {plan.name}</h3>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2 text-[#d3d3d3]">
                  {feature.available ? '✔️' : '❌'} {feature.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
  </div>
  </div>
    
    </Dashboard>
  );
};

export default SubscriptionPlans;
