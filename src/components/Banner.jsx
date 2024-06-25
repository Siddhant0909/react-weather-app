import React from 'react'
import { useWeather } from '../context/WeatherContextProvider'

function Banner() {
  const weather=useWeather();
  return (
    <div className="text-white overflow-hidden flex flex-col items-center justify-between py-10 mb-4">
    <div className="flex flex-col items-center justify-center text-center w-full">
      <h2 className="text-[50px] leading-tight">{weather?.data?.current.temp_c}&deg;C</h2>
      <h5 className="text-2xl mb-4">{weather?.data?.current?.condition.text}</h5>
      <h5 className="text-sm">{weather?.data?.location.name},{weather?.data?.location.country}</h5>
    </div>
  </div>
  )
}

export default Banner