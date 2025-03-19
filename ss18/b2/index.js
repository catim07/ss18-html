let toan=+prompt("mời bạn nhập điểm môn toán: ");
let van=+prompt("mời bạn nhập điểm môn văn: ");
let anh=+prompt("mời bạn nhập điểm môn anh văn: ");
let trungbinh=(toan+van+anh)/3;
if(trungbinh>=8.0){
    console.log("bạn đạt loại giỏi");
}else if(trungbinh>=6.5&&trungbinh<=7.9){
    console.log("bạn đạt loại khá");
}else if(trungbinh>=5.0&&trungbinh<=6.4){
    console.log("bạn đạt loại trung bình");
}else{
    console.log("bạn đạt loại yếu");
}