import { catsData } from '/data.js'

const displayEmotions = document.getElementById('display-emotions')

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
                    <input type="radio" id="${feeling}" value="${feeling}" name="${feeling}">
                 </div>`
    }

    displayEmotions.innerHTML = html
}

console.log(renderEmotionsRadios(catsData))

