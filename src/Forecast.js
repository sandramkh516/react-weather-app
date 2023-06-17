import React, { useState,useEffect } from "react";
import "./Forecast.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props){
    let[loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);
    
    function handleResponse(response) {
    console.log(response.data.daily);
    setLoaded(true);
    setForecast(response.data.daily);
  }
  useEffect(() => {
    setLoaded(false);
  },[props.coordinates]);
   
     if(loaded){
    return(
        <div className="Forecast">
            
            {forecast.map(function(dailyForecast,index){
                if(index<5 && index>0){
                return(
                     <div key={index}>
                    <WeatherForecastDay forecast={dailyForecast}/>
                    </div>
                    );
                }
                else{return<></>}
            })}

        
        </div>
    );}
    else{
    let latitude=props.coordinates.lat;
    let longitude=props.coordinates.lon;
    let apiKey="197ef3a642b76eef90e131866f74a0a0";
    let api=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
     axios.get(api).then(handleResponse);

     return null;

    }
}