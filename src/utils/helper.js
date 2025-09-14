const dateTime = (dateTime1,dateTime2)=>{
    const x = new Date(dateTime1);
    const y = new Date(dateTime2);
    return x.getTime() < y.getTime()
}
module.exports = {
    dateTime,
    
}