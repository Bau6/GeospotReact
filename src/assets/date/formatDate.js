export const DATE_FORMAT_FULL = 0;
export const DATE_FORMAT_DATE = 1;
export const DATE_FORMAT_TIME = 2;
export const DATE_FORMAT_FULL_SHORT = 3;

export function dateFromStrISO(str) {
    if (!str) return "";
    const separator = "T";
    const parts = str.split(separator);
    let date = parts[0];
    let time = parts.length > 1 ? parts[1] : "000000";
    if (date.length === 8)
        date = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`;
    if (time.length === 6)
        time = `${time.slice(0, 2)}:${time.slice(2, 4)}:${time.slice(4, 6)}`;
    return new Date(date + separator + time).toISOString();
}

export function dateStr(date, format = DATE_FORMAT_FULL) {
    let res;

    const dateInfo = {
        date: date ? new Date(date).toLocaleDateString() : "",
        time: date ? new Date(date).toLocaleTimeString() : "",
    };
    if (dateInfo.date.indexOf(".") === 1) dateInfo.date = `0${dateInfo.date}`;
    if (dateInfo.time.indexOf(":") === 1) dateInfo.time = `0${dateInfo.time}`;

    switch (format) {
        case DATE_FORMAT_DATE:
            res = dateInfo.date;
            break;
        case DATE_FORMAT_TIME:
            res = dateInfo.time;
            break;
        default:
            res = `${dateInfo.date} ${dateInfo.time}`.trim();
            if (format === DATE_FORMAT_FULL_SHORT) res = res.slice(0, 16);
            break;
    }
    return res;
}

export function dateStrISO(date, format = DATE_FORMAT_FULL) {
    return date ? dateStr(dateFromStrISO(date.toString()), format) : undefined;
}