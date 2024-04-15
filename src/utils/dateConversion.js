export const dateObjectConverter = (date) => {
    const timestamp = new Date(date * 1000);
    const convertedDate = timestamp.toDateString();
    const dateArray = convertedDate.split(" ");
    const monthsBg = {
        Jan: "Януари",
        Feb: "Февруари",
        Mar: "Март",
        Apr: "Април",
        May: "Май",
        Jun: "Юни",
        Jul: "Юли",
        Aug: "Август",
        Sep: "Септември",
        Oct: "Октомври",
        Nov: "Ноември",
        Dec: "Декември",
    };

    const daysBg = {
        Sun: "Неделя",
        Mon: "Понеделник",
        Tue: "Вторник",
        Wed: "Сряда",
        Thu: "Четвъртък",
        Fri: "Петък",
        Sat: "Събота",
    };

    return {
        year: dateArray[3],
        month: dateArray[1],
        date: dateArray[2],
        day: dateArray[0],
        monthBg: monthsBg[dateArray[1]],
        dayBg: daysBg[dateArray[0]],
    };
}


export const wholeDateObjectConverter = (date) => {
    const localTime = new Date(date)
    const convertedDate = localTime.toDateString();
    const dateArray = convertedDate.split(" ");
    const monthsBg = {
        Jan: "Януари",
        Feb: "Февруари",
        Mar: "Март",
        Apr: "Април",
        May: "Май",
        Jun: "Юни",
        Jul: "Юли",
        Aug: "Август",
        Sep: "Септември",
        Oct: "Октомври",
        Nov: "Ноември",
        Dec: "Декември",
    };

    const daysBg = {
        Sun: "Неделя",
        Mon: "Понеделник",
        Tue: "Вторник",
        Wed: "Сряда",
        Thu: "Четвъртък",
        Fri: "Петък",
        Sat: "Събота",
    };

    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const time = `${hours}:${minutes}`;

    return {
        year: dateArray[3],
        month: dateArray[1],
        date: dateArray[2],
        day: dateArray[0],
        monthBg: monthsBg[dateArray[1]],
        dayBg: daysBg[dateArray[0]],
        time: time,
    };
}