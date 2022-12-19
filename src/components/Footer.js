import React from 'react'

const Footer = ({prev, next, page}) => {
      return (
      <footer className="h-16 sm:mt-8 mt-24 font-bold p-4 flex items-center max-w-[500px] mx-auto justify-between">
            <button className="p-2 text-cool-gray hover:text-marine-blue prev-btn" disabled={page <= 0} onClick={() => prev()}>Go back</button>
            <button className="bg-marine-blue p-2 rounded text-white next-btn" disabled={page >= 3} onClick={() => next()}>Next Step</button>
      </footer>
      )
}

export default Footer