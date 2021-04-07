var rand;
var x;
var cube;
var block;
var a=3000;
var points=0;
var content =document.getElementById("content");
document.getElementById("submit").addEventListener("click", ()=>{
    score=0;
    var table = document.createElement('div');
    table.setAttribute('id', 'container');
    number = parseInt(document.getElementById('number').value);
    cube= number*number;  
    content.innerHTML="";
    for (var i = 1; i <= cube; i++) {
        var cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        cell.setAttribute('data-id', i);
        cell.style.width = 100/number + '%';
        cell.style.height = 100/number + '%';
        table.appendChild(cell);
    }
    content.appendChild(table);
    
    play();
});
function play(){
    /*var img = document.createElement("img");
    img.src = "taupe.jpg";
    var rand=Math.round(Math.random()*cube);
    document.querySelector('[data-id="'+rand+'"]').appendChild(img);
    img.style.width = 100+'%';
    img.style.height = 100+'%';
    */
    rand=Math.floor(Math.random()*cube+1);
    block=document.querySelector('[data-id="'+rand+'"]');
    block.style.backgroundImage = "URL('taupe.jpg')";
    block.style.backgroundSize = "100% 100%";
    x= setTimeout(clear(),a);
}
function clear(){
    block.style.backgroundImage='none';
    play();
}

content.addEventListener('click', (el)=>{
    el=el.target; 
    if(el.dataset.id == rand){
        points++; 
        console.log('+1');  
    }else{
        points--;
        console.log('-1'); 
        a+=3000; 
        clearTimeout(x);
    }
    clear();
    document.getElementById("score").innerText=points;
})

