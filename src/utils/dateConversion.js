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
        bg: daysBg[dateArray[0]],
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
        month: {
            en: dateArray[1],
            bg: monthsBg[dateArray[1]]
        },
        date: dateArray[2],
        day: {
            en: dateArray[0],
            bg: daysBg[dateArray[0]]
        },
        time: time,
    };
}

export const calendarDateConverter = (date) => {
    // dateString is like "2025-01-31T00:00" (no time zone info)

    // 1. Split into date and time parts
    const [datePart, timePart] = date.split("T"); // e.g. ["2025-01-31", "00:00"]
    const [year, month, day] = datePart.split("-").map(Number); // [2025, 1, 31]
    const [hour, minute] = timePart.split(":").map(Number);     // [0, 0]

    // 2. Construct a Date in UTC. This stops JS from shifting based on the user's local offset.
    //    E.g. if it's "2025-01-31T00:00", that is *exactly* midnight on the 31st, ignoring user offset.
    const dateObj = new Date(Date.UTC(year, month - 1, day, hour, minute));

    // 3. Get the day of the week in UTC (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayOfWeekNum = dateObj.getUTCDay();

    // 4. Convert that numeric day to an English short name ("Sun", "Mon", ...)
    const dayNamesEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const enFull = dayNamesEn[dayOfWeekNum]; // e.g. "Fri"
    // If you only need the first letter in lowercase:
    const en = enFull.charAt(0).toLowerCase(); // "f" if it's "Fri"

    // 5. Convert English day name to Bulgarian letter
    let bg;
    switch (enFull) {
        case "Mon":
            bg = "п"; // понеделник
            break;
        case "Tue":
            bg = "в"; // вторник
            break;
        case "Wed":
            bg = "с"; // сряда
            break;
        case "Thu":
            bg = "ч"; // четвъртък
            break;
        case "Fri":
            bg = "п"; // петък
            break;
        case "Sat":
            bg = "с"; // събота
            break;
        case "Sun":
            bg = "н"; // неделя
            break;
        default:
            bg = "";
    }

    // 6. The date (day of month) is simply your `day` variable (31, 1, etc.)
    //    Convert to string if you like
    return {
        date: String(day), // e.g. "31"
        en,             // "f"
        bg,             // "п" (if it's Friday)
    };
}