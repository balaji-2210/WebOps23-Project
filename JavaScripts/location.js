const findLocation = () => {
    const location = document.querySelector('.location');

    const success = (position) => {
        console.log(position);
        const apiAccessToken = 'pk.46767523237d89c392280c1906197335';
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        const geoApiUrl = 'https://us1.locationiq.com/v1/reverse?key='+apiAccessToken+'&lat='+latitude+'&lon='+longitude+'&format=json'

        fetch(geoApiUrl).then(res => res.json()).then(data => {
            console.log(data);
            location.textContent = data.address.city + ', ' + data.address.state + ', ' + data.address.postcode;
        }) 
    }

    const error = () => {
        location.textContent = 'unable to retrieve location';
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.location').addEventListener('click', findLocation);