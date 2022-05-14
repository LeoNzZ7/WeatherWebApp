export type CityCords = {
    name: string;
    sys: {
        country: string;
    }
    coord: {
        lon: string;
        lat: string;
    }
};

export type WeatherInfo = {
    daily: {
        wind_speed: string,
        wind_deg: string,
        temp: {
            day: string,
            eve: string,
            max: string,
            min: string,
            night: string,
        },
        weather: {
            description: string,
            icon: string,
        }
    };
}