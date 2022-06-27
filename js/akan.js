function getbirthname(){
    let dateofbirth=document.getElementById(birthday);
    let GENDER=document.getElementById(gender);
    const maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if(male.checked){
        alert(dateofbirth && maleNames[days]);
    }else if(female.checked){
        alert(dateofbirth && maleNames[days]);
    }else{
        alert("Please check the date and gender you have keyed");
    } 
}