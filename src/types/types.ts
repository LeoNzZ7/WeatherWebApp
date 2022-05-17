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
    current: {
        humidity: string;
        temp: string;
        wind_deg: number;
        wind_speed: string;
        weather: [
            {
            description: string;
            icon: string;
            main: string;
            }
        ]
    };
    daily: [
        {
            wind_deg: number;
            humidity: string;
            pressure: string;
            wind_speed: string;
            temp: {
                day: string;
                eve: string;
                night: string;
                min: string;
                max: string;
            },
            weather: [
                {
                description: string;
                icon: string;
                main: string;
                }
            ];
        }
    ];
    timezone: string
}