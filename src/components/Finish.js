import React from 'react'

const Finish = ({data}) => {
  return (
    <article className='bg-white sm:max-w-[500px] -mt-24 min-w-[270px] flex flex-col space-y-2 sm:shadow-none shadow w-[80%] mx-auto px-4 py-6 rounded-xl'>
        {/* Finsihing Up  */}
        <div className='mb-5'>
            <h3 className="text-xl font-bold text-marine-blue">Finsihing Up</h3>
            <p className="text-cool-gray">Double check everything looks ok before confirming.</p>
        </div>
        
        {/* Selections  */}
        <section className='bg-alabaster mb-5 p-3 rounded-lg'>
            <div className='flex justify-between p-2 border-b'>
                <div>
                    <p className='font-bold text-marine-blue'>Arcade (Monthly)</p>
                    <a className='text-cool-gray underline'>Change</a>
                </div>
                <p className='font-bold text-marine-blue'>$9/mo</p>
            </div>

            <div className='flex justify-between p-2'>
                <p className='text-cool-gray'>Online Service</p>
                <p className='text-marine-blue'>+$2/mo</p>
            </div>
            <div className='flex justify-between p-2'>
                <p className='text-cool-gray'>Larger Storage</p>
                <p className='text-marine-blue'>+$2/mo</p>
            </div>
        </section>

        {/* Total  */}
        <div className='flex justify-between w-[90%] mx-auto'>
            <p className='text-cool-gray'>Total (per month)</p>
            <p className='font-bold text-purplish-blue'>$12/mo</p>
        </div>
    </article>

  )
}

export default Finish