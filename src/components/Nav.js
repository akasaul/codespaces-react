import React, { useState } from 'react'

const Nav = ({page}) => {
  const [items] = useState([
    {
    id: 1,
    "title": "STEP 1",
    "desc": "YOUR INFO"
  },
    {
    id: 2,
    "title": "STEP 2",
    "desc": "SELECT PLAN"
  },
    {
    id: 3,
    "title": "STEP 3",
    "desc": "ADD-ONS"
  },
    {
    id: 4,
    "title": "STEP 4",
    "desc": "SUMMARY"
  },

]);

  return (
    <nav className="h-48 header sm:rounded-xl sm:max-w-[270px] max-h-[500px] bg sm:h-screen sm:w-1/3 ">
    <div className="w-full flex sm:flex-col sm:items-center sm:space-y-10 lg:space-y-5 justify-center  space-x-3 sm:space-x-0 py-12 px-3 lg:px-5">
     {
       items.map((item) => (
          <div className="lg:flex lg:w-full lg:space-x-5 lg:items-center">
            <span className={`px-3 py-2 lg:py-1 border-2 rounded-full hover:bg-pastel-blue hover:text-black text-light-gray ${item.id === page + 1 && "bg-pastel-blue text-black"} `}>
              {item.id}
            </span>
            <div className="hidden lg:block">
              <p className="text-white opacity-75">{item.title}</p>
              <h2 className="text-white font-bold">{item.desc}</h2>
            </div>
          </div>
        )
       )
     }
    </div>
  </nav>
  )
}

export default Nav