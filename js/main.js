var gQuests = [
    { id: 0, opts: ['20,000 km/hr', '40,000 km/hr'], correctOptIndex: 1, bgimg: "url('../img/0bg.jpg')" }, { id: 1, opts: ['11,000 m', '8,500 m'], correctOptIndex: 0, bgimg: "url('../img/1bg.jpeg')" }, { id: 2, opts: ['300 km', '500 km'], correctOptIndex: 0, bgimg: "url('../img/2bg.jpg')" }, { id: 3, opts: ['150,000 Light Years', '100,000 Light Years'], correctOptIndex: 1, bgimg: "url('../img/0bg.jpg')" }, { id: 4, opts: ['Yuri  Gagarin', 'Alex Paperny'], correctOptIndex: 0, bgimg: "url('../img/4bg.jpg')" }, { id: 5, opts: ['Rosa Parks', 'Amelia Earhart'], correctOptIndex: 1, bgimg: "url('../img/5bg.jpg')" }, { id: 6, opts: ['Vitalik Buterin', 'Boris Pavlov'], correctOptIndex: 0, bgimg: "url('../img/6bg.jpg')" }
]
var sound = new Audio("sound/party.mp3");
gCurrQuestIdx = 5

function init() {
    renderQuest(gCurrQuestIdx)
}

function renderQuest(gCurrQuestIdx) {
    // change picture
    var str = `<img src="img/${gCurrQuestIdx}.jpg"></img>`
    var elScreen = document.querySelector('.screen')
    elScreen.innerHTML = str

    // change answers in buttons
    var elBtn0 = document.querySelector('.btn0')
    var elBtn1 = document.querySelector('.btn1')
    elBtn0.innerText = gQuests[gCurrQuestIdx].opts[0]
    elBtn1.innerText = gQuests[gCurrQuestIdx].opts[1]

    // change background color
    var elBody = document.querySelector('body')
    elBody.style.backgroundImage = gQuests[gCurrQuestIdx].bgimg
}

function checkAnswer(value) {
    //check if right
    if (value === gQuests[gCurrQuestIdx].correctOptIndex) {
        addTrophie()
        alert('💪You Are Right!!💪')
        gCurrQuestIdx++ // curr quest goes up
        if (gCurrQuestIdx > gQuests.length - 1) {
            win()
            alert('🏆Victorious🏆')
        } else {
            renderQuest(gCurrQuestIdx) // render the curr quest
        }
    } else {
        alert('😕You Are very Wrong...😕')
    }
}


function win() {

    sound.play()
        // change picture
    var str = ''
    str += `<img src="img/party.gif"></img>`
    var elScreen = document.querySelector('.screen')
    elScreen.innerHTML = str

    // change answers in buttons
    var elBtn0 = document.querySelector('.btn0')
    var elBtn1 = document.querySelector('.btn1')
    elBtn0.innerText = 'You Are'
    elBtn1.innerText = 'A Winner!'

    // change background color
    str = '<button onclick="resetGame(this)">Reset Game</button>'
    var elBody = document.querySelector('body')
    var elReset = elBody.querySelector('div.reset')
    elBody.style.backgroundColor = 'gold    '
    elReset.innerHTML = str
        // change h1
    var elH1 = document.querySelector('h1')
    elH1.innerText = 'You did Know The Answer!'

}

function resetGame(elBtn) {
    // curr quest returns to 0
    gCurrQuestIdx = 0
    renderQuest(gCurrQuestIdx)
        //hide button
    elBtn.style.display = 'none'
        //orignal h1
    var elH1 = document.querySelector('h1')
    elH1.innerText = 'Do You Know The Answer?'
        // shush the music
    sound.stop()
    sound.pause()

}

function addTrophie() {
    // add trophie every turn
    var elTrophie = document.querySelector('.trophie')
    var str = elTrophie.innerText
    elTrophie.innerText = '🏆' + str
}

function changeBackGround() {
    var elBody = document.querySelector('body')
    elBody.style.backgroundImage = "url('img/bg0.jpg')"
}