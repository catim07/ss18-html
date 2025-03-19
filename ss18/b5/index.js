let year=+prompt("mời bạn nhập số năm kinh nghiệm: ");
if(year>6){
    console.log("Quản lí");
}else if(year>=4&&year<=6){
    console.log("chuyên viên");
}else if(year>=1&&year<=3){
    console.log("nhân viên có kinh nghiệm");
}else{
    console.log("mới vào nghề");
}