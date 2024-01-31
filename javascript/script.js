
const start = document.getElementById("start");
start.addEventListener("click", startGame);

const reset = document.getElementById("reset");
reset.addEventListener("click",resetGame);

const IMG_IDS = ['icon-1', 'icon-2', 'icon-3', 'icon-4', 'icon-5', 'icon-6', 'icon-7', 'icon-8', 'icon-9', 'icon-10',  "icon-11", "icon-12", "icon-13", "icon-14", "icon-15", "icon-16", "icon-17", "icon-18", "icon-19",'icon-20', 'icon-21', 'icon-22', 'icon-23', 'icon-24'];

var imagesOnGame = 12;

var anterior = "sem-anterior";
var secondClick;

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

function winCheck(){
     imagesOnGame--;
                if(imagesOnGame<=0){
                    alert("você venceu");
                    resetGame();
                }else{
                    anterior= "sem-anterior";
                }
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
        
        if(anterior!= "sem-anterior") {
            showEmoji(numId);
            let antNumId = anterior.slice(5);
            if((Math.abs(antNumId - numId) == 1)){
                displayNoneID(id);           
                displayNoneID(anterior);
                winCheck();
                anterior= "sem-anterior";  
            } else{
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

//    imgclick.forEach(function(imgclick){
//     imgclick.onclick = (function(id = this.id) {
//         // Dentro desta função, "this" se refere ao elemento que acionou o evento
//         teste(id);
//     });
// });

    opacity(1);
    reset.style.display = "inline";
    start.style.display = "none";
    emojiDoubt();
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

    }, 600);


}