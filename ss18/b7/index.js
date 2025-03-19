let a = +prompt("mời bạn nhập số a: ");
let b = +prompt("mời bạn nhập số b: ");
let phep = prompt("mời bạn nhập phép tính(+, -, *, /): ");
if (phep === "+") {
    let cong = a + b;
    console.log(`kết quả của phép tính trên là a + b = ${cong}`);
} else if (phep === "-") {
    let tru = a - b;
    console.log(`kết quả của phép tính trên là a - b = ${tru}`);
} else if (phep === "*") {
    let nhan = a * b;
    console.log(`kết quả của phép tính trên là a * b = ${nhan}`);
} else if(phep=== "/") {
    let chia = a / b;
    console.log(`kết quả của phép tính trên là a / b = ${chia}`);
}else{
    console.log("phép tính không tồn tại");
}