let num = +prompt("mời bạn nhập số ");
if (num <= 10 && num >= 0) {
    switch (num) {
        case 0:
            console.log("số không");
            break;
        case 1:
            console.log("số một");
            break;
        case 2:
            console.log("số hai");
            break;
        case 3:
            console.log("số ba");
            break;
        case 4:
            console.log("số bốn");
            break;
        case 5:
            console.log("số năm");
            break;
        case 6:
            console.log("số sáu");
            break;
        case 7:
            console.log("số bảy");
            break;
        case 8:
            console.log("số tám");
            break;
        case 9:
            console.log("số chín");
            break;
        case 10:
            console.log("số mười");
            break;
    }
} else {
    console.log("bạn phải nhập số từ 0-10");
}