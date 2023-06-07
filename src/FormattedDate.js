import React  from "react";
 

export default function FormattedDate(props){
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day=days[props.date.getDay()];
    let months=["Jan","Feb","May","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    let month=months[props.date.getMonth()];
    let hours = props.date.getHours();
    if (hours<10){
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if(minutes<10){
        minutes = `0${minutes}`;
    }

 return(
        <div>
          <p>  {day},{month} {props.date.getDay()}<br/> {hours}:{minutes}</p>
        </div>
    );
}