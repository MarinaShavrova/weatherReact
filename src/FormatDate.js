
export default function FormatDate() {

const now = new Date();
const year = now.getFullYear();
let day = now.getDate();

const monthArr =[
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'November',
'December',
];

const nameDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

return nameDay[now.getDay()] +", "+ day +" "+ monthArr[now.getMonth()] +" "+ year;
}