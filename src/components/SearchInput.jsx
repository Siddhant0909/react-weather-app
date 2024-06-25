import React from 'react'
import { useWeather } from '../context/WeatherContextProvider'

function SearchInput() {
  const {data,searchCity,setSearchCity,fetchCityWeatherData}=useWeather();
  return (
    <form 
      onSubmit={(e)=>{
        e.preventDefault();
        fetchCityWeatherData()
      }}
      className='flex bg-[#5050519d] w-full px-3 py-1 rounded-full overflow-hidden text-white'
      >
      {/* Text input */}
      <input 
      className='w-full bg-transparent placeholder:text-[#cccccce2] outline-none' 
      type="text"
      placeholder='Search location'
      spellCheck='false'
      value={searchCity}
      onChange={(e)=>{
        e.preventDefault;
        setSearchCity(e.target.value)
      }}/>
      {/* Search button */}
      <button 
      className='text-[#cccccce2]'
      ><i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  )
}

export default SearchInput