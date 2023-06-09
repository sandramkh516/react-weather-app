import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";


export default function Weather(props){

    let [weather,setWeather]=useState({ready:false});
    let [city,setCity]=useState(props.defaultCity);

        function handleResponse(response){
         setWeather({
            ready:true,
            date:new Date(response.data.dt * 1000),
            temp:response.data.main.temp,
            min:response.data.main.temp_min,
            max:response.data.main.temp_max,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            name:response.data.name,
            description:response.data.weather[0].description,
            feels:response.data.main.feels_like,
            icon:response.data.weather[0].icon,
    
        });
 }
 
    function search()
    { let key="197ef3a642b76eef90e131866f74a0a0";
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        axios.get(url).then(handleResponse);
        console.log(url);
    }

    function updateCity(event){
       setCity(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        search();
     }


     if(weather.ready){
    return(
        <div className="Weather">
            <form className="form-center mt-4" onSubmit={handleSubmit} >
                <input type="search" placeholder="Search for a City.." onChange={updateCity} className="me-3 p-1"/>
                <input type="submit" value="Search" className="px-5 bg-info p-1"/>
            </form>
        <br/><br/>
        <WeatherInfo info={weather}/>
       
            </div>)
        }else{
        search();
         return<div>Loading</div> 
        }}