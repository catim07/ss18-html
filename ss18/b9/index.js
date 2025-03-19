
let hours = parseInt(prompt("nhập giờ (0-23):"));
let minutes = parseInt(prompt("nhập phút (0-59):"));
let seconds = parseInt(prompt("nhập giây (0-59):"));
if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60 && seconds >= 0 && seconds < 60) {
    let buoi = hours >= 12 ? "PM" : "AM";
    let Hours = hours % 12;
    if (Hours === 0){
        Hours = 12;
    }
    console.log(`Thời gian bạn nhập là: ${Hours}:${minutes}:${seconds} ${buoi}`);
} else {
    console.log("giờ ko hợp lệ");
}
