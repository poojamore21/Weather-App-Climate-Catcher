const axios = require('axios');

const getWeatherByCity = async(req,res)=>{
    const city = req.params.city;
    const apiKey = process.env.WEATHER_API_KEY || "e5ad4c6ac544eed6abdffc66facfea97";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching weather data' });
    }
}



module.exports = { getWeatherByCity };