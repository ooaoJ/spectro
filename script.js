let cardMain = document.getElementById('card');

function openAbout(id){
    let cardContent = document.getElementById('card'+id)

    switch(id){
        case '1':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '2':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '3':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '4':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '5':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '6':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '7':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        case '8':
            cardMain.style.display = "flex";
            cardContent.style.display = "flex";
            break;
        default:
            alert("Invalid Card ID");
            break;
    }
}
function closeCard(buttonElement){
    let cardContent = buttonElement.parentElement;
    cardContent.style.display = "none";
    cardMain.style.display = "none";
}

// function closeAllCards(){
//     let cardContents = document.getElementsByClassName('card-content');
//     for(let i=0; i<cardContents.length; i++){
//         cardContents[i].style.display = "none";
//     }
//     cardMain.style.display = "none";

// }

function openMore(id){
    switch(id){
        
    }
}