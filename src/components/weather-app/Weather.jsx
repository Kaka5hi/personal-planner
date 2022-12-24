import React from 'react'
import './Weather.css'
import {MdOutlineWbSunny, MdLocationPin} from 'react-icons/md'
import {FaRegMoon} from 'react-icons/fa'
import {BsWind} from 'react-icons/bs'
import {WiHumidity} from 'react-icons/wi'


const Weather = () => {

    const [latitude, setLatitude] = React.useState([])
    const [longitude, setLongitude] = React.useState([])
    const [data, setData] = React.useState([])
    const [dataFetched, setDataFetched] = React.useState(false)
    const [time, setTime] = React.useState(new Date().getHours())
    const [date, setDate] = React.useState(new Date().toLocaleDateString())


    React.useEffect(()=> {
        const getWeatherData = async() => {
            navigator.geolocation.getCurrentPosition(position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            })
            try {
                const resp = await fetch(`${process.env.REACT_APP_WEATHER_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`)
                const result = await resp.json()
                if(result.cod === 200) {
                    setData(result)
                    setDataFetched(true)
                } else {
                    return
                } 
            } catch (error) {
                alert(error);
            }
        }
        getWeatherData()
    }, [latitude, longitude])


    if(!dataFetched) {
        return (
            <div className='weather-app_container'>
                <div className="widget-container">
                    <div className="widget-inner_container">
                        <h1 style={{fontSize: '2.25em', fontWeight: 400, textTransform: 'capitalize', textAlign: 'center'}}>loading. . .</h1>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
        <div className='weather-app_container' style={(time >= 6 && time < 18) ? {background: 'url(https://img.freepik.com/free-photo/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea_335224-313.jpg?w=2000)', backgroundSize: 'cover'} : {background: 'url(https://i.pinimg.com/564x/85/d7/cb/85d7cb14bc1f65be306cd7695e66633a.jpg)',  backgroundSize: 'cover'}}>
            <div className="widget-container">
                <div className="widget-inner_container">
                    <h1>{data.main.temp}°<span>C</span></h1>
                    <span>Max: {Math.ceil(data.main.temp_max)}°c</span>
                    <span>Min: {Math.floor(data.main.temp_min)}°c</span>
                </div>
                <div className="widget-inner_container">
                    <span>{(time >= 6 && time < 18) ? <MdOutlineWbSunny/> : <FaRegMoon/>}{(time >= 6 && time < 18) ? 'Day Time' : 'Night Time'} </span>
                    <span><WiHumidity/> Humidity: {data.main.humidity}%</span>
                    <span><BsWind/> Wind: {data.wind.speed}m/sec</span>
                    
                </div>
                <div className="widget-inner_container">
                    <span>today: {date}</span>
                    <span><MdLocationPin/> {data.name}, {data.sys.country}</span>
                    <span>{data.weather[0].description}</span>
                </div>
            </div>
        </div>
    )

    }
}

export default Weather
