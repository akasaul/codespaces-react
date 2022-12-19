import React from 'react'

const AddOns = () => {
  return (
    <article className='bg-white sm:max-w-[500px] -mt-24 min-w-[270px] flex flex-col space-y-2 sm:shadow-none shadow w-[80%] mx-auto px-4 py-6 rounded-xl'>
        <div className='mb-5'>
            <h3 className="text-xl font-bold text-marine-blue">Pick add-ons</h3>
            <p className="text-cool-gray">Addons help enhance your gaming experience.</p>
        </div>
        <form>
            {/* Add ons  */}
            <div className='flex cursor-pointer justify-between p-3 mb-4  hover:bg-alabaster shadow rounded-lg hover:outline-purplish-blue hover:outline hover:outline-1'>
                <input type="checkbox" className="addons-checkbox bg-purplish-blue text-lg" />
                <div>
                    <h4 className='font-bold text-marine-blue'>Online Service</h4>
                    <p className='text-cool-gray'>Access to multiplayer games</p>
                </div>
                <p className='text-purplish-blue'>+$1/mo</p>
            </div>

            {/* Add ons  */}
            <div className='flex cursor-pointer justify-between p-3 mb-4 hover:bg-alabaster shadow rounded-lg hover:outline-purplish-blue hover:outline hover:outline-1'>
                <input type="checkbox" className="addons-checkbox bg-purplish-blue text-lg" />
                <div>
                    <h4 className='font-bold text-marine-blue'>Larger Storage</h4>
                    <p className='text-cool-gray'>Extra 1TB of cloud storage</p>
                </div>
                <p className='text-purplish-blue'>+$2/mo</p>
            </div>

            {/* Add ons  */}
            <div className='flex cursor-pointer justify-between p-3 mb-4 hover:bg-alabaster shadow rounded-lg hover:outline-purplish-blue hover:outline hover:outline-1'>
                <input type="checkbox" className="addons-checkbox bg-purplish-blue text-lg" />
                <div>
                    <h4 className='font-bold text-marine-blue'>Customizable Profile</h4>
                    <p className='text-cool-gray'>Custom theme on your profile</p>
                </div>
                <p className='text-purplish-blue'>+$2/mo</p>
            </div>
        </form>
    </article>

  )
}

export default AddOns;