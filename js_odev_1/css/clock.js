window.onload = function(){
setInterval(showTime,1000);
say_my_name();
}


function showTime(){
 
    const date = new Date();
    let div = document.getElementById('myClock');
    div.innerHTML = date.toLocaleTimeString('en-us',{hour12:false});

    


}
function say_my_name(){
    let div = document.getElementById('myName');
    let name=prompt("Adınızı giriniz","Berkay");
    div.innerHTML = name;
}