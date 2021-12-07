let dictionaryEasy = [{
    eng: "Name",
    rus: "Имя"
},
{
    eng: "Surname",
    rus: "Фамилия"
},
{
    eng: "Sailor",
    rus: "Моряк"
},
{
    eng: "Hairdresser",
    rus: "Парикмахер"
},{
    eng: "Violin",
    rus: "Скрипка"
},{
    eng: "Arch",
    rus: "Арка"
},{
    eng: "Bench",
    rus: "Лавка"
},{
    eng: "Bridge",
    rus: "Мост"
},{
    eng: "Gate",
    rus: "Ворота"
},{
    eng: "Memorial",
    rus: "Памятник"
},{
    eng: "Flower-bed",
    rus: "Клумба"
},{
    eng: "Market",
    rus: "Базар"
}];
let dictionaryMedium = [{
    eng: "Privious",
    rus: "Предыдущий"
},
{
    eng: "Rush",
    rus: "Спешка"
},
{
    eng: "Railroad",
    rus: "Железная дорога"
},
{
    eng: "Hope",
    rus: "Надежда"
},{
    eng: "Suppose",
    rus: "Допустим"
},{
    eng: "To drain",
    rus: "Осушать"
},{
    eng: "Equilibrium",
    rus: "Равновесие"
},{
    eng: "Rage",
    rus: "Ярость"
},{
    eng: "Warcry",
    rus: "Боевой клич"
},{
    eng: "Tray",
    rus: "Лоток"
},{
    eng: "Obsession",
    rus: "Навязчивая идея"
},{
    eng: "Badass",
    rus: "Задира"
}];
let dictionaryHard = [{
    eng: "To sacrifice",
    rus: "Пожертвовать"
},
{
    eng: "Embargo",
    rus: "Запрет"
},
{
    eng: "Sustain",
    rus: "Поддерживать"
},
{
    eng: "Ripper",
    rus: "Потрошитель"
},{
    eng: "Stand by",
    rus: "Ожидать"
},{
    eng: "Clarity",
    rus: "Ясность"
},{
    eng: "Enlighten",
    rus: "Просветить"
},{
    eng: "Contasion",
    rus: "Заражение"
},{
    eng: "Magnifying",
    rus: "Увеличение"
},{ 
    eng: "Convocation",
    rus: "Созыв"
},{
    eng: "Cleave",
    rus: "Раскалывать"
},{
    eng: "Barrage",
    rus: "Заграждене"
}];
let tempDick = [];
let right = 0;
let wrong = 0;
let currentWord = '';
tempDick = [...dictionaryEasy];
        currentWord = tempDick.splice(Math.floor(Math.random()*dictionaryEasy.length), 1)[0];
        $("div.word").html(currentWord.eng)
$("input.radio").on('click', (e) => {
    if(e.currentTarget.id === 'difficultyEasy'){
        tempDick = [...dictionaryEasy];
        currentWord = tempDick.splice(Math.floor(Math.random()*dictionaryEasy.length), 1)[0];
        $("div.word").html(currentWord.eng)
    } 
    if(e.currentTarget.id === 'difficultyMedium'){
        tempDick = [...dictionaryMedium];
        currentWord = tempDick.splice(Math.floor(Math.random()*dictionaryEasy.length), 1)[0];
        $("div.word").html(currentWord.eng)
    } 
    if(e.currentTarget.id === 'difficultyHard'){
        tempDick = [...dictionaryHard];
        currentWord = tempDick.splice(Math.floor(Math.random()*dictionaryEasy.length), 1)[0];
        $("div.word").html(currentWord.eng)
    } 
    console.log(e.currentTarget.id)
})

$("div.word").html(currentWord.eng)
$("input.userInput").on("keypress", (e) => {
    if(e.which === 13){
        console.dir(e.currentTarget.value)
        if(currentWord.rus.toLowerCase() === e.currentTarget.value.toLowerCase()){
            right++;
        }else{
            wrong++;
        }

        currentWord = tempDick.splice(Math.floor(Math.random()*tempDick.length), 1)[0];
        $("div.word").html(currentWord.eng)
        console.log(right, wrong)
        document.getElementById("right").innerHTML=right;
        document.getElementById("wrong").innerHTML=wrong;
        if(right+wrong==10){
            if(right>=7){
                alert("You finished this test with "+right+" right answers & "+wrong+" wrong answers! Congrats!");
            }

             else{
                alert("You finished this test with "+right+" right answers & "+wrong+" wrong answers! Try better, it's a shame result!");
             }

            location.reload();
            $("input[type=radio]").attr('disabled', false);
        }
        increaseProgress();
        e.currentTarget.value="";
        $("input[type=radio]").attr('disabled', true);
    }

})
let myBar = document.getElementById('my-progress-bar'), labelBar = document.getElementById('progress-label');
let increaseProgress = function() {
    myBar.value += 20;
    myBar.innerHTML = myBar.value/2+'%';
    myBar.value < 200 ? labelBar.innerHTML = myBar.value/2+'%': 
           (labelBar.innerHTML = '100%. Finished!', increaseBtn.hidden = true ); 
}

