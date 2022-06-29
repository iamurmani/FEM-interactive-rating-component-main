var selectedRating;
const ratings = document.querySelectorAll('.rating a');
const submitButton = document.querySelector('#rating-card button');
const thankYouCard = document.getElementById('thankyou-card');
const ratingCard = document.getElementById('rating-card');
const ratingGiven = document.getElementById('selected-rating');
var selectedElement;
ratings.forEach(r => {
    r.addEventListener('click', ()=>{
        selectedRating = r.text;
        r.style = 'background:hsl(216, 12%, 54%);color:hsl(0, 0%, 100%)';
        if(selectedElement && selectedElement !== r) {
            selectedElement.style = 'background:hsl(213, 19%, 24%);hsl(217, 12%, 63%)'
        }
        selectedElement = r;
    })
})
submitButton.addEventListener('click', ()=>{
    if(selectedRating){
        ratingCard.style = 'display:none;';
        ratingGiven.innerText = selectedRating;
        thankYouCard.style = 'display:flex;';
    }
})


