const formEndId = 'form-end';
const msInDay = 86400000;
const msInMinute = 60000;

export const defaultTime = (element) => {
    let date = new Date();

    if (element.getAttribute('id') === formEndId) {
        date = new Date(date.getTime() + msInDay);
    }

    const offset = date.getTimezoneOffset() * msInMinute;
    const adjustedDate = new Date(date.getTime() - offset);
    const formattedDate = adjustedDate.toISOString().substring(0, 16);

    return formattedDate;
}
