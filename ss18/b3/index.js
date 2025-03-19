let user=prompt("Mời bạn nhập tên đăng nhập: ");
if(user==="ADMIN"){
    let pass=prompt("mời bạn nhập mật khẩu");
    if(pass==="TheMaster"){
        console.log("Welcome");
    }else if(pass===null){
        console.log("Cancelled");
    }else{
        console.log("Wrong password");
    }
}else if(user===null){
    console.log("Cancelled");
}else{
    console.log("I Don’t know you");
}