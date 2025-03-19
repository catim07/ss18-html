let num=+prompt("mời bạn nhập số nguyên: ");
if(Number.isInteger(num)){
    if(num%2==0){
        console.log(` số ${num} là số chẵn`);
    }else{
        console.log(` số ${num} là số lẽ`);
    }
}else{
    console.log("số bạn vừa nhập không phải số nguyên");
}