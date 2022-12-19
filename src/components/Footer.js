import React from 'react'

const Footer = ({prev, next}) => {
  return (
    <footer className="h-16 sm:mt-8 mt-24 font-bold p-4 flex items-center justify-between">
          <button className="p-2 text-cool-gray hover:text-marine-blue" onClick={() => prev()}>Go back</button>
          <button className="bg-marine-blue p-2 rounded text-white" onClick={() => next()}>Next Step</button>
    </footer>
  )
}

export default Footer