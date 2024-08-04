"use client"
import { useState } from 'react';

const Settings = () => {
  // Replace this with your actual user data source
  const userData = {
    name: "John Doe",
    email: "john@example.com",
    password: "********",
    image: "/path/to/image.jpg",
  };

  const [user, setUser] = useState(userData);

  return (
    <div className="max-w-2xl shadow overflow-hidden  m-auto mt-10 bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px]">
<div class="  bg-[#2c2c2c] rounded  ">
    <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-[#d3d3d3]">
            User information
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-[#d3d3d3]">
            Details and informations about user.
        </p>
    </div>
    <div class="border-t border-gray-200 ">
        <dl>
            <div class="bg-[#2c2c2c] border-t-[.2px]  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-[#d3d3d3]">
                    Full name
                </dt>
                <dd class="mt-1 text-sm text-[#d3d3d3] sm:mt-0 sm:col-span-2">
                    Mickael Poulaz
                </dd>
            </div>
            <div class="bg-[#2c2c2c] border-t-[.2px]  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-[#d3d3d3]">
                    Best techno
                </dt>
                <dd class="mt-1 text-sm text-[#d3d3d3] sm:mt-0 sm:col-span-2">
                    React JS
                </dd>
            </div>
            <div class="bg-[#2c2c2c] border-t-[.2px]  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-[#d3d3d3]">
                    Email address
                </dt>
                <dd class="mt-1 text-sm text-[#d3d3d3] sm:mt-0 sm:col-span-2">
                    m.poul@example.com
                </dd>
            </div>
            <div class="bg-[#2c2c2c] border-t-[.2px]  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-[#d3d3d3]">
                    Palne
                </dt>
                <dd class="mt-1 text-sm text-[#d3d3d3] sm:mt-0 sm:col-span-2">
                    $10,000
                </dd>
            </div>
            <div class=" rounded-b bg-[#2c2c2c] border-t-[.2px]  px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-[#d3d3d3]">
                    About
                </dt>
                <dd class="mt-1 text-sm text-[#d3d3d3] sm:mt-0 sm:col-span-2">
                    To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                </dd>
            </div>
        </dl>
    </div>
</div>
           </div>
    
  );
};

export default Settings;
