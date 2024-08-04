import Link from "next/link";


const Settings = () => {
    
    return (
        <>
    
    <div className="md:w-[70%] w-[90%] shadow overflow-hidden  m-auto mt-10 bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc] rounded p-[2px] ">
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
    <div className=" flex justify-end rounded p-[2px]">


</div>

</div>
           </div>
<Link className="mb-10" href='/setting/edit'>
           <div className="m-auto mt-3 mb-10 w-max p-[2px] rounded bg-gradient-to-tr from-[#c9f3bf] via-[#e59dd8] to-[#01fefc]">

      <div className='px-4 py-2 rounded bg-[#3a3a3a]  text-[#d3d3d3]'>Edit </div>
</div>
</Link>
    
        </>
  );
};

export default Settings;
