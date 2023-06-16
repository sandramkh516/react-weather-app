import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return(
        <div className="WeatherInfo">
             <div className="Information">
         <h2>{props.info.name}</h2>
         <FormattedDate date={props.info.date}/>
         <WeatherIcon date={props.info.icon} size={64} color="yellow"/>
        <ul>
            <li>Current Temperature:<WeatherTemperature celsius={props.info.temp}/> </li>
            <li>Wind Speed: {Math.round(props.info.wind)} km/hr</li>
            <li>Humidity: {Math.round(props.info.humidity)}%</li>
            <li>Feels Like: {Math.round(props.info.feels)}°Ϲ</li>
            <li>Max: {Math.round(props.info.max)}°Ϲ, Min:{Math.round(props.info.min)}°Ϲ</li>
            <li> {props.info.description}</li>
            </ul>
            </div> 
        </div>
    )
}