import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Wheather/Style.css'
const SearchBox = ( {updateInfo}) => {
    let [city,setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = '79c8a2826e865cded90e34cfeaac7138';

    const getWheatherData = async () => {
      try {
          let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
          if (!res) {
              alert("City not found. Please enter a valid city name.");
              return null;
          }
  
          let jesoRes = await res.json();
          let result = {
              city: city,
              temp: jesoRes.main.temp,
              minTemp: jesoRes.main.temp_min,
              maxTemp: jesoRes.main.temp_max,
              humidity: jesoRes.main.humidity,
              feelLike: jesoRes.main.feels_like,
              weather: jesoRes.weather[0].description, 
          };
  
          return result;
  
      } catch (error) {
          alert("⚠️ Something went wrong. Please try again.");
          console.error("API Error:", error);
          return null;
      }
  };
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      let info = await getWheatherData();
      if (info) {
          updateInfo(info);
          setCity("");
      }
  }
  
  return (
    <div className='Search-div'>
        <h1>Find Weather Information</h1>
        <form onSubmit={handleSubmit}>
        <TextField
  id="city"
  label="City Name"
  variant="outlined"
  value={city}
  required
  onChange={(e) => setCity(e.target.value)}
  sx={{
    input: { color: 'white' },
    label: { color: 'white' },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        marginRight:'10px'
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    }
  }}
/>

    <Button variant="contained" id='btn' type='submit' size='large'>Search</Button>
        </form>
    </div>
  )
}

export default SearchBox
