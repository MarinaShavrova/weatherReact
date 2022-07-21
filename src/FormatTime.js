
export default function FormatTime() {
let minutes;
const now = new Date();

   if(now.getMinutes()<10){
    minutes = "0"+now.getMinutes();
    }else {
    minutes = now.getMinutes();
    }

return now.getHours() + ":" + minutes;
}