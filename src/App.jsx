import { useCallback, useEffect, useRef, useState } from "react";
import Banner from "./components/Banner"
import Card from "./components/Card"
import SearchInput from "./components/SearchInput"
import { useWeather } from "./context/WeatherContextProvider"

function App() {
  const weather=useWeather();
  const [img,setImg]=useState('')
  const message=weather?.data?.current.condition.text.toLowerCase()

  const changeBg=useCallback(()=>{
    if(message?.includes('cloud')){
      setImg('https://cdn.pixabay.com/photo/2018/01/23/23/34/nature-3102762_960_720.jpg')
    }
    else if(message?.includes('rain')){
      setImg("https://cdn.pixabay.com/photo/2016/11/22/21/39/dark-1850684_1280.jpg")
    }
    else if(message?.includes('clear')){
      setImg("https://cdn.pixabay.com/photo/2016/11/29/03/07/blue-sky-1866985_960_720.jpg")}
    else if(message?.includes('sun')){
      setImg("https://cdn.pixabay.com/photo/2023/08/15/17/25/fall-8192375_960_720.png")
    }
  },[weather])

  useEffect(changeBg,[weather]);
  useEffect(()=>{
    weather.fetchLatLongData()
  },[])

  
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center"
    style={{backgroundImage:`url("${img}")`,backgroundSize:"cover",backgroundPosition:"center"}}>
      <div className=" bg-transparent w-full h-screen flex justify-center items-center p-3 font-poppins backdrop-blur-xl"
      >
        <div className="bg-[#00000077] max-w-[350px] max-h-[600px] h-full w-full flex flex-col justify-start items-center rounded-3xl p-4 gap-4 relative">
          <SearchInput/>
          <div 
          className="bg-[#34333D] w-full h-full rounded-2xl overflow-hidden flex flex-col justify-between"
          style={{backgroundImage:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <Banner/>
            <div className="w-full h-1/2 grid grid-cols-2 gap-4 p-4 mb-8">
              <Card title='Feels like' logo="fa-solid fa-temperature-empty" val={weather?.data?.current?.feelslike_c} unit="&deg;"/>
              <Card title="Humidity" logo="fa-solid fa-droplet" val={weather?.data?.current?.humidity} unit="%"/>
              <Card title="UV index" logo="fa-regular fa-sun" val={weather?.data?.current?.uv} unit=" units"/>
              <Card title="Heat index" logo="fa-solid fa-fire" val={weather?.data?.current?.heatindex_c} unit="&deg;"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
