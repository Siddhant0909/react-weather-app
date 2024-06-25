import {createContext, useContext, useState } from "react";
import { getWeatherCityData, getWeatherLatitudeData } from "../api";

const WeatherContext=createContext(null)

export const useWeather=()=>{
  return useContext(WeatherContext)
}

export const WeatherContextProvider=({children})=>{

  const[data,setData]=useState(null)

  const[searchCity,setSearchCity]=useState('')

  const fetchCityWeatherData=async()=>{
    const response=await getWeatherCityData(searchCity)
    setData(response)
  }
  const fetchLatLongData=async()=>{
    navigator.geolocation.getCurrentPosition((pos)=>{
      getWeatherLatitudeData(pos.coords.latitude,pos.coords.longitude).then((res)=>setData(res))
    })
  }

  return(
    <WeatherContext.Provider value={{data,searchCity,setSearchCity,fetchCityWeatherData,fetchLatLongData}}>
      {children}
    </WeatherContext.Provider>
  )
}