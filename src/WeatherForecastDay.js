import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

    function day(){
        let date=new Date(props.forecast.dt*1000);
        let day=date.getDay();
        let days=["sun","mon","tue","wed","thu","fri","sat"];
        return days[day];
    }

     function maxTemp(){
        let temperature=Math.round(props.forecast.temp.max);
        return temperature;
    }

    function minTemp(){
        let temperature=Math.round(props.forecast.temp.min);
        return temperature;
    }
return(
    <div className="WeatherForecastDay mb-3">
        <div className="color-day">
            {day()}
        </div>
        <div>
            <WeatherIcon date={props.forecast.weather[0].icon} size={40} color="#ff347f"/>
        </div>
        <div><span className="min">{minTemp()}</span>/
        <span className="max">{maxTemp()}</span></div>
        
    </div>
)

}