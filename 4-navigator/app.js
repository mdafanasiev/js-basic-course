const addressLat = 10;
const addressLong = 12;
const positionLat = 15;
const positionLong = 20;

const distanceFromObject =
    ((addressLong - positionLong) ** 2 + (addressLat - positionLat) ** 2) **
    0.5;
console.log(distanceFromObject);
