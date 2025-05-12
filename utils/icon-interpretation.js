const ICON_INTERPRETATION = [
    {
        codes : ['01d'],
        image : require('../assets/meteo_icons/sun.png'),
        label : 'Cielo sereno'
    },

    {
        codes : ['02d'],
        image : require('../assets/meteo_icons/cloudy.png'),
        label : 'Sole con poche nuvole'
    },
    {
        codes : ['03d', '03n'],
        image : require('../assets/meteo_icons/cloud.png'),
        label : 'Nuvole sparse'
    },
    {
        codes : ['04d', '04n'],
        image : require('../assets/meteo_icons/cloud.png'),
        label : 'Nuvoloso'
    },
    {
        codes : ['09d', '09n'],
        image : require('../assets/meteo_icons/rainy.png'),
        label : 'Piove'
    },
    {
        codes : ['10d'],
        image : require('../assets/meteo_icons/cloudy_rain.png'),
        label : "Pioggia a tratti"
    },
    {
        codes : ['011d', '011n'],
        image : require('../assets/meteo_icons/thunderstorm.png'),
        label : 'It rains cats and dogs...'
    },
    {
        codes : ['13d', '13n'],
        image : require('../assets/meteo_icons/snowy.png'),
        label : 'Nevica'
    },
    {
        codes : ['50d', '50d'],
        image : require('../assets/meteo_icons/fog.png'),
        label : 'Nebbia'
    },
    {
        codes : ['01n'],
        image : require('../assets/meteo_icons/night.png'),
        label : 'Cielo sereno'
    },
    {
        codes : ['02n'],
        image : require('../assets/meteo_icons/moon_cloud.png'),
        label : 'Cielo coperto'
    },
    {
        codes : ['10n'],
        image : require('../assets/meteo_icons/moon_rainy.png'),
        label : 'Pioggia a tratti'
    },
];

export function getWeatherInterpretation(code) {
    return ICON_INTERPRETATION.find(interpretation => interpretation.codes.includes(code))
}

export default ICON_INTERPRETATION