console.log("running...");
document.querySelector('.menuee').style.display='none';
document.querySelector('.bheem').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if(document.querySelector('.sidebar').classList.contains('sidebargo')){
        document.querySelector('.piro').style.display='inline'
        document.querySelector('.menuee').style.display='none'
    }
    else{
        document.querySelector('.piro').style.display='none'
        setTimeout(() => {
            document.querySelector('.menuee').style.display='inline'
        }, 350);
    }
})

document.querySelector('.title-desctription').addEventListener("click",()=>{
    
})