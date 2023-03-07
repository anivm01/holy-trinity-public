export const dateObjectConverter = (date) => {
    const timestamp = new Date(date*1000)
    const convertedDate = timestamp.toDateString()
    const dateArray = convertedDate.split(" ")
    return {year:dateArray[3], month:dateArray[1], date:dateArray[2], day:dateArray[0]}
}