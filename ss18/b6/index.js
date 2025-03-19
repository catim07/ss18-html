let year=+prompt("mời bạn nhập số năm: ");
if((year%4==0&&year%100!=0)||year%400==0){
    console.log("số bạn nhập là năm nhuần");
}else{
    console.log("số bạn nhập ko phải là năm nhuần");
}