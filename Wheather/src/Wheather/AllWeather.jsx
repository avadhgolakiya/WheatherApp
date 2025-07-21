import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'


const AllWeather = () => {
  let [weatherInfo , setWheatherInfo] = useState({})
  let updateInfo = (result) =>{
    setWheatherInfo(result);
  }
  return (
    <>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </>
  )
}

export default AllWeather
