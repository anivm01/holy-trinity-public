export const removeFuture = (data)=> {
    const currentDate = Math.floor(Date.now()/1000)
    let processedData = data.filter((single)=>{
      return single.date < currentDate
    })          
    if(processedData.length > 100) {
      processedData = processedData.slice(0,100)
    }
    return processedData
}
export const removePast = (data) => {
    const currentDate = Math.floor(Date.now()/1000)
    let processedData = data.filter((single)=>{
      return single.date > currentDate
    })          
    if(processedData.length > 100) {
      processedData = processedData.slice(0,100)
    }
    return processedData
}