import { catsData } from '/data.js'

const displayEmotions = document.getElementById('display-emotions')
const getImgBtn = document.getElementById("get-img-btn")
const gifsOnlyOption = document.getElementById("gifs-only-option")
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal') 
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn")

function getEmotionsArray(cats) {
    let emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
            if (emotionsArray.includes(emotion)) {

            } else {
            emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    let html = ''
    for (let feeling of emotions) {
        
        html += `<div class="feeling-styling">
                    <label for="${feeling}">${feeling}</label>
                    <input type="radio" id="${feeling}" value="${feeling}" name="emotions">
                 </div>`
    }

    displayEmotions.innerHTML = html
}

renderEmotionsRadios(catsData)

displayEmotions.addEventListener("change", showCheckedOption)

function showCheckedOption(e) {
    let radioElArray = document.getElementsByClassName("feeling-styling")
    for (let radioEl of radioElArray) {
        radioEl.classList.remove("highlight")
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

getImgBtn.addEventListener("click",renderCat)

function getMatchingCatsArray() {
    const isGif = gifsOnlyOption.checked
    if (document.querySelector('input[type="radio"]:checked')) {
        const checkedRadio = document.querySelector('input[type="radio"]:checked').value
        const MatchingCatsArray = catsData.filter(function(cat) {
            if (isGif) {
                return cat.emotionTags.includes(checkedRadio) && cat.isGif
            } else {
                return cat.emotionTags.includes(checkedRadio)
            }
            
        })
       return MatchingCatsArray
    }
    
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1){
        return catsArray[0]
    }
    else {
       return catsArray[Math.floor(Math.random() * catsArray.length)]
    }
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModal.innerHTML = `<img 
                              class="cat-img" 
                              src="./images/${catObject.image}"
                              alt="${catsData.alt}"
                         >`                          
    
    memeModal.style.display = 'flex'
}

memeModalCloseBtn.addEventListener("click", () => {
    memeModal.style.display = 'none'
})