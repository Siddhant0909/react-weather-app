const baseURL="http://api.weatherapi.com/v1/current.json?key=525d59e0f52844cc820183613240506"

export const getWeatherCityData=async(city)=>{
  const response=await fetch(`${baseURL}&q=${city}&api=no`)
  return await response.json()
}
export const getWeatherLatitudeData=async(lat,long)=>{
  const response=await fetch(`${baseURL}&q=${lat},${long}&api=no`)
  return await response.json()
}