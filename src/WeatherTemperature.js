import React,{useState} from "react";

export default function WeatherTemperature(props){
    let [unit,setUnit]=useState("celsius");

    function showFahrenheit(event){
     event.preventDefault();
     setUnit("fahrenheit");
    }

    function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
    }
    function fahrenheit(){
        return (props.celsius*9)/5+32;
    }
    if(unit==="celsius"){
    return(<div>
        {Math.round(props.celsius)}°Ϲ|°<a href="/" onClick={showFahrenheit}>F</a>
    </div>)
    }
    else{

        return(
         <div>
        {Math.round(fahrenheit())}°<a href="/" onClick={showCelsius}>Ϲ</a>|°F
    </div>)   
        
    }
}