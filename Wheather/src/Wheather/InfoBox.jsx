import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const InfoBox = ({info}) => {
    const initialURL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URl ="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL ="https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL ="https://images.unsplash.com/photo-1514632595-4944383f2737?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 40  ? HOT_URl : COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temprature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}%</p> 
                <p>Min_Temp = {info.minTemp} &deg;C</p>
                <p>Max_Temp = {info.maxTemp} &deg;C</p>
                <p>The Weather feels like = {info.feelLike} &deg;C</p>
                <p>The weather can be described as {info.weather} and feels like {info.feelLike}</p>


        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox
