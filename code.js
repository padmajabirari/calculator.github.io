let result=document.getElementById("inputext")

let calculate=(number)=>{
    result.value+=number;
}
function clr(){
    result.value=" ";
}


let Result=()=>{

    // if(result.value=eval(result.value)){
    // }
    // else{
    //     alert("invalid")
    // }

    try{
        result.value=eval(result.value);
    }
    catch(passany){
        alert("enter valid number");
    }
}

function del(){
    result.value=result.value.slice(0,-1);
}