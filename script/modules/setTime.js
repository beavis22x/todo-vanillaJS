export const defaultTime = function setTime(element) {
    let date = new Date();

    if (element.getAttribute('id') === 'form-end') {
        date = new Date(date.getTime() + 86400000); //getDate возвращает другой формат даты, он не подходит для дальнейшего форматирования.
    }
    const offset = date.getTimezoneOffset() * 60000;
    const adjustedDate = new Date(date.getTime() - offset);
    const formattedDate = adjustedDate.toISOString().substring(0, 16);
    element.value = formattedDate;
}