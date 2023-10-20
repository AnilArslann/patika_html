
const del_button=document.querySelectorAll('.close-x');
del_button.forEach(element =>element.addEventListener('click',function(){
    this.parentElement.remove();
    local_storage_update("list_elements",JSON.stringify(get_list_elements()));

    

}));

const input=document.getElementById("task");
input.addEventListener('keypress',function(event){
    if(event.key=="Enter"){
        document.getElementById("liveToastBtn").click();
}});

const list_elements=document.querySelectorAll('#list li');
list_elements.forEach(element=>element.addEventListener('click',function(){
    this.classList.toggle('checked');
    local_storage_update("done",JSON.stringify(get_list_elements()));

}));

function local_storage_update(key,value){
    localStorage.setItem(key,value);

}
function get_list_elements(){
    const whole_list=document.querySelectorAll('#list li');
    const whole_text=[];
    whole_list.forEach((x)=>whole_text.push(x.innerHTML.replace('<span class="close-x">x</span>','').trim()));
    return whole_text;
}
function close_button_adder(){
    const close_button=document.createElement("span");
    close_button.className="close-x";
    close_button.innerHTML="x";
    close_button.addEventListener('click',function(){this.parentElement.remove();
        local_storage_update("list_elements",JSON.stringify(get_list_elements()));})
    return close_button;
}


function newElement(){
    const new_li=document.createElement("li");
    const new_input=document.getElementById("task").value;
    const old_tasks=JSON.parse(localStorage.getItem("list_elements"));

    for(let i=0;i<old_tasks.length;i++){
        if(old_tasks[i]==new_input){
            alert("Bu görev zaten var!");
            return;
        }
        else if (new_input.trim()==""){
            alert("Boş görev eklenemez!");
            return;
        }
    }
    new_li.innerHTML=new_input;
    
    new_li.appendChild(close_button_adder());

    document.getElementById("list").appendChild(new_li);
    local_storage_update("list_elements",JSON.stringify(get_list_elements()));


}
