
const start = document.getElementById("start");
start.addEventListener("click", startGame);

const reset = document.getElementById("reset");
reset.addEventListener("click",resetGame);

var larguraDaTela = window.innerWidth;

const IMG_IDS = ['icon-1', 'icon-2', 'icon-3', 'icon-4', 'icon-5', 'icon-6', 'icon-7', 'icon-8', 'icon-9', 'icon-10',  "icon-11", "icon-12", "icon-13", "icon-14", "icon-15", "icon-16", "icon-17", "icon-18", "icon-19",'icon-20', 'icon-21', 'icon-22', 'icon-23', 'icon-24'];

var imagesOnGame = 12;

var imagesOff = [];

var anterior = "sem-anterior";
var secondClick;

function imageOff(i,j){
    imagesOff.push(i);
    imagesOff.push(j);

}
function clickHandler(){
     
        // Seu código a ser executado quando o elemento for clicado
        teste(this.id);
    
}

function opacity(opac) {
    var imagens = document.querySelectorAll(".main-container img");
    imagens.forEach(function(img) {
        img.style.opacity = opac;
    });
}
function emojiDoubt(opac) {
    var imagens = document.querySelectorAll(".main-container img");
    imagens.forEach(function(img) {
        img.src = "emojis/emoji-doubt.png";
    });
}
function changeOrder(img, order){
    img.style.order = order;
}
function displayNoneID(element){
    document.getElementById(element).style.display = "none";
}
function stopClick(){
        IMG_IDS.forEach(function(IMG_IDS) {
         document.getElementById(IMG_IDS).removeEventListener('click',clickHandler);
    });
}
function startClick(){
        IMG_IDS.forEach(function(IMG_IDS) {
         document.getElementById(IMG_IDS).addEventListener('click',clickHandler);
    });
}
function winCheck(){
    let elements = document.getElementsByTagName('img');
    console.log(elements.length);
    imagesOnGame--;
                if(imagesOnGame<=0){
                    alert("você venceu");
                    resetGame();
                }else{
                    anterior= "sem-anterior";  
                }
}

function hideEmoji(i, j){
    document.getElementById("img-" + i).src ="emojis/emoji-doubt.png";
    document.getElementById("img-" + j).src ="emojis/emoji-doubt.png";
    startClick();
    
}

function resetImages(){
    for(let i = 1; i<=24; i++){
        let element = document.getElementById('img-' + i)
        element.src = (element.className.toString());
       
    };
}

function showEmoji(i){
    let element = document.getElementById('img-' + i)
    element.src = (element.className.toString());
}

function teste(id) {
        let numId = id.slice(5);
        
        if((anterior != "sem-anterior") && id != anterior) {
            showEmoji(numId);
            let antNumId = anterior.slice(5);
            if((Math.abs(antNumId - numId) == 1)){
                    
                stopClick();
                
                
                setTimeout(function() {
                    displayNoneID(id);           
                    displayNoneID("icon-" + antNumId);
               
                    console.log(id +'   ' + anterior);
                            
                    winCheck();
                        hideEmoji(numId, antNumId);
                         anterior= "sem-anterior";
                                    }, 600);
               
                
                  
            } else{

                stopClick();
                setTimeout(function() {
                            hideEmoji(numId, antNumId);
                                        }, 600);
            anterior= "sem-anterior";
            }
        }else{
            
            showEmoji(numId);
            anterior = id;
        }
    }

function startGame(){
    
    opacity(0);
    
    setTimeout(function() {
    IMG_IDS.forEach(function(IMG_IDS) {
        document.getElementById(IMG_IDS).style.order = Math.floor(Math.random() * 101);
        document.getElementById(IMG_IDS).style.cursor = "pointer";
        document.getElementById(IMG_IDS).classList.add("img-clicavel");
    });

    var elemento = document.querySelectorAll(".img-clicavel");
    var imgclick = document.querySelectorAll("img");
   elemento.forEach(function clickImage(elemento) {
    elemento.addEventListener("click", clickHandler);
});

    opacity(1);
    reset.style.display = "inline";
    start.style.display = "none";
    emojiDoubt();
    if (larguraDaTela<=650){
        document.getElementsByTagName(header).style.display = "none";
    }
    // emojiDoubt();
    }, 600);





}

function resetGame(){
    anterior = "sem-anterior";
    imagesOnGame = 12;
    opacity(0);
    setTimeout(function() {
    IMG_IDS.forEach(function(IMG_IDS) {
        document.getElementById(IMG_IDS).style.order = 1;
        document.getElementById(IMG_IDS).style.cursor = "auto";
        document.getElementById(IMG_IDS).style.display = "flex";
        document.getElementById(IMG_IDS).removeEventListener('click',clickHandler);
    });
    opacity(1);
    start.style.display = "inline";
    reset.style.display = "none";
    resetImages();
    if (larguraDaTela<=650){
        document.getElementsByTagName(header).style.display = "flex";
    }

    }, 600);

     


}