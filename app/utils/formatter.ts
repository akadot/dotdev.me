export function formatDate(dateSTR : string) : string{
    let date = new Date(dateSTR);

    let day = `0${date.getDate()}`.slice(-2);
    let month = `0${date.getMonth() + 1}`.slice(-2);
    let year = date.getFullYear();

    let hour = `0${date.getHours()}`.slice(-2);
    let minutes = `0${date.getMinutes()}`.slice(-2);
    let seconds = `0${date.getSeconds()}`.slice(-2);

    return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}