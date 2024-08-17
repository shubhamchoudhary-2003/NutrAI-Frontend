"use client"

import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative flex justify-center items-center  ">
      <form className={`relative w-80 h-10 rounded-full shadow-lg bg-white transition-all ease-in-out duration-300 ${focused ? 'shadow-sm' : ''}`}>
        <input
          type="search"
          placeholder="Search"
          className="absolute top-2.5 left-9 w-52 bg-transparent text-gray-600 text-sm outline-none"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
        <button type="submit" className="absolute top-2.5 left-3 h-5 w-5 p-0 m-0 bg-none border-none outline-none cursor-pointer">
          <svg className="w-5 h-5 fill-gray-600">
            <use xlinkHref="#search" />
          </svg>
        </button>
        <div className="absolute top-2.5 right-4 flex space-x-1">
          <div className="relative group">
            <input type="radio" name="type" value="type-users" id="type-users" className="absolute opacity-0 w-full h-full cursor-pointer" />
            <label htmlFor="type-users" className="cursor-pointer">
              <svg className="h-5 w-5 fill-gray-600 opacity-60 transition-all ease-in-out pointer-events-none">
                <use xlinkHref="#user" />
              </svg>
            </label>
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 bg-gray-500 text-white text-xs uppercase px-2 py-1 rounded-md group-hover:opacity-100 transition-all ease-in-out">
              Users
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 w-0 h-0 border-t-4 border-t-gray-500 border-l-4 border-l-transparent border-r-4 border-r-transparent"></span>
            </span>
          </div>
          <div className="relative group">
            <input type="radio" name="type" value="type-posts" id="type-posts" className="absolute opacity-0 w-full h-full cursor-pointer" />
            <label htmlFor="type-posts" className="cursor-pointer">
              <svg className="h-5 w-5 fill-gray-600 opacity-60 transition-all ease-in-out pointer-events-none">
                <use xlinkHref="#post" />
              </svg>
            </label>
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 bg-gray-500 text-white text-xs uppercase px-2 py-1 rounded-md group-hover:opacity-100 transition-all ease-in-out">
              Posts
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 w-0 h-0 border-t-4 border-t-gray-500 border-l-4 border-l-transparent border-r-4 border-r-transparent"></span>
            </span>
          </div>
          <div className="relative group">
            <input type="radio" name="type" value="type-images" id="type-images" className="absolute opacity-0 w-full h-full cursor-pointer" />
            <label htmlFor="type-images" className="cursor-pointer">
              <svg className="h-5 w-5 fill-gray-600 opacity-60 transition-all ease-in-out pointer-events-none">
                <use xlinkHref="#images" />
              </svg>
            </label>
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 bg-gray-500 text-white text-xs uppercase px-2 py-1 rounded-md group-hover:opacity-100 transition-all ease-in-out">
              Images
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 w-0 h-0 border-t-4 border-t-gray-500 border-l-4 border-l-transparent border-r-4 border-r-transparent"></span>
            </span>
          </div>
          <div className="relative group">
            <input type="radio" name="type" value="type-special" id="type-special" defaultChecked className="absolute opacity-0 w-full h-full cursor-pointer" />
            <label htmlFor="type-special" className="cursor-pointer">
              <svg className="h-5 w-5 fill-red-500 opacity-90 transition-all ease-in-out pointer-events-none">
                <use xlinkHref="#special" />
              </svg>
            </label>
            <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 opacity-0 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded-md group-hover:opacity-100 transition-all ease-in-out">
              Special
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-0.5 w-0 h-0 border-t-4 border-t-red-500 border-l-4 border-l-transparent border-r-4 border-r-transparent"></span>
            </span>
          </div>
        </div>
      </form>

      {/* SVG Symbols */}
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" className="hidden">
        <symbol id="search" viewBox="0 0 32 32">
          <path d="M 19.5 3 C 14.26514 3 10 7.2651394 10 12.5 C 10 14.749977 10.810825 16.807458 12.125 18.4375 L 3.28125 27.28125 L 4.71875 28.71875 L 13.5625 19.875 C 15.192542 21.189175 17.250023 22 19.5 22 C 24.73486 22 29 17.73486 29 12.5 C 29 7.2651394 24.73486 3 19.5 3 z M 19.5 5 C 23.65398 5 27 8.3460198 27 12.5 C 27 16.65398 23.65398 20 19.5 20 C 15.34602 20 12 16.65398 12 12.5 C 12 8.3460198 15.34602 5 19.5 5 z" />
        </symbol>
        <symbol id="user" viewBox="0 0 32 32">
          <path d="M 16 4 C 12.145852 4 9 7.1458513 9 11 C 9 13.393064 10.220383 15.517805 12.0625 16.78125 C 8.485554 18.302923 6 21.859881 6 26 L 8 26 C 8 21.533333 11.533333 18 16 18 C 20.466667 18 24 21.533333 24 26 L 26 26 C 26 21.859881 23.514446 18.302923 19.9375 16.78125 C 21.779617 15.517805 23 13.393064 23 11 C 23 7.1458513 19.854148 4 16 4 z M 16 6 C 18.773268 6 21 8.2267317 21 11 C 21 13.773268 18.773268 16 16 16 C 13.226732 16 11 13.773268 11 11 C 11 8.2267317 13.226732 6 16 6 z" />
        </symbol>
        <symbol id="images" viewBox="0 0 32 32">
          <path d="M 2 5 L 2 6 L 2 26 L 2 27 L 3 27 L 29 27 L 30 27 L 30 26 L 30 6 L 30 5 L 29 5 L 3 5 L 2 5 z M 4 7 L 28 7 L 28 20.90625 L 21.9375 14.90625 L 21.21875 14.21875 L 20.5 14.90625 L 14.8125 20.59375 L 8.78125 14.59375 L 8.0625 13.90625 L 7.34375 14.59375 L 4 17.84375 L 4 7 z M 24 9 C 22.895431 9 22 9.8954305 22 11 C 22 12.104569 22.895431 13 24 13 C 25.104569 13 26 12.104569 26 11 C 26 9.8954305 25.104569 9 24 9 z M 8.5 16.8125 L 20.5 28.8125 L 28 21.3125 L 28 25 L 4 25 L 4 21.875 L 8.5 16.8125 z" />
        </symbol>
        <symbol id="post" viewBox="0 0 32 32">
          <path d="M 7 6 L 7 26 L 25 26 L 25 12.6875 L 24.3125 12 L 18 5.6875 L 17.3125 5 L 7 5 z M 9 7 L 16 7 L 16 12 L 21 12 L 21 14 L 17 14 L 17 9 L 9 9 z M 18 8.4375 L 22.5625 13 L 18 13 z M 9 16 L 23 16 L 23 24 L 9 24 z M 11 18 L 11 20 L 15 20 L 15 18 z M 17 18 L 17 20 L 21 20 L 21 18 z M 11 22 L 11 22.875 L 11 23 L 15 23 L 15 22 L 11 22 z M 17 22 L 17 23 L 21 23 L 21 22 L 17 22 z" />
        </symbol>
        <symbol id="special" viewBox="0 0 32 32">
          <path d="M 16 5.5625 L 14.8125 9.875 L 10.0625 9.875 L 13.65625 12.5 L 12.34375 16.8125 L 16 14.15625 L 19.65625 16.8125 L 18.34375 12.5 L 21.9375 9.875 L 17.1875 9.875 L 16 5.5625 z M 16 15.34375 L 13.875 17 L 14.53125 14.65625 L 12.71875 13.34375 L 15.125 13.34375 L 16 11.03125 L 16.875 13.34375 L 19.28125 13.34375 L 17.46875 14.65625 L 18.125 17 z M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 z M 16 5 C 22.066406 5 27 9.933594 27 16 C 27 22.066406 22.066406 27 16 27 C 9.933594 27 5 22.066406 5 16 C 5 9.933594 9.933594 5 16 5 z" />
        </symbol>
      </svg>
    </div>
  );
};

export default SearchBar;
