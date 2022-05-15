export const formatTemp = (n: string) => {
    const temp = parseInt(n)
    return temp.toFixed(0) + "°C";
};

export const formatWindSpeed = (n: string) => {
    const windSpeed = parseInt(n);
    return windSpeed.toFixed(0) + " km/h";
};

export const getDay = () => {
    let now = new Date();
    let currentDay = now.getDate();

    return currentDay;
};

export const getMonth = () => {
    let now = new Date();
    let currentMonth = now.getMonth();

    return currentMonth;
};   