const dateTime = (departureTime, arrivalTime) => {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    return departure.getTime() < arrival.getTime()
}
module.exports = {
    dateTime,
    
}