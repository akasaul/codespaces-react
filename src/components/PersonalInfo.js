import React from 'react'

const PersonalInfo = () => {
  return (
    <article className="bg-white sm:max-w-[500px] -mt-24 min-w-[270px] flex flex-col space-y-2 sm:shadow-none shadow w-[80%] mx-auto px-4 py-6 rounded-xl">
          <h3 className="text-xl font-bold text-marine-blue">Personal info</h3>
          <p className="text-cool-gray">Please Provide your name, email, address and phone number.</p>
          <form className="flex flex-col space-y-5">
            <div>
              <label for="name" className="text-marine-blue">Name</label>
              <div>
                <input className="focus:border-none text-sm p-2 text-marine-blue rounded-lg border-2 max-w-32" placeholder="e.g. Stephen King" id="name" />
              </div>
            </div>
            
            <div>
              <label className="text-marine-blue" for="email">Email</label>
              <div>
                <input className="focus:border-none text-sm p-2 text-marine-blue rounded-lg border-2 max-w-32" placeholder="e.g. stephenking@lorem.com" id="email" />
              </div>
            </div>

            <div>
              <label className="text-marine-blue" for="phone">Phone Number</label>
              <div>
                <input className="focus:outline-none text-sm p-2 text-marine-blue rounded-lg border-2 max-w-32" placeholder="e.g. 1 234 567 890" id="name" />
              </div>
            </div>
          </form>
        </article>  
  )
}

export default PersonalInfo