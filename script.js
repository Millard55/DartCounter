function switchMode(mode) // Byt mellan spellägen
{
    gamemode = mode;
    document.getElementById('singleplayerUI').classList.add('d-none');
    document.getElementById('local1v1UI').classList.add('d-none');

    if(mode === 'singleplayer')
    {
        document.getElementById('singleplayerUI').classList.remove('d-none');
    }
    else if(mode === 'local1v1')
    {
        document.getElementById('local1v1UI').classList.remove('d-none');
    }
}

//Variabler för singeplayer
let startingScore = 501;
let totalScore = 0;
let rounds = 0;

function updateDisplay()
{
    document.getElementById("scoreRequired").textContent = startingScore;
    document.getElementById("dartAverage").textContent = rounds > 0 ? (totalScore / rounds).toFixed(2) : 0;
}

function addScore() // Hanterar all poäng för singelplayer
{   
    const input = document.getElementById("score");
    const score = parseInt(input.value);

    if (isNaN(score) || score < 0 || score > 180)
    {
        alert("Ange en giltig poäng mellan 0 och 180.");
        return;
    }
    if (score > startingScore)
    {
        alert("No score!");
        input.value = "";
        return;
    }
    if (score >= 80 && score <= 180)
    {
        const sound = new Audio(`Ljud/${score}.wav`);
        sound.play();
    }

    if (score === 180)
    {
        const celebration = document.getElementById("180celebration");
        celebration.classList.remove("d-none");
        setTimeout(() => celebration.classList.add("d-none"), 3000);
    }
    if (score === 170)
    {
        const celebration = document.getElementById("170celebration");
        celebration.classList.remove("d-none");
        setTimeout(() => celebration.classList.add("d-none"), 3000);
    }
    

    startingScore -= score;
    if (startingScore < 0) startingScore = 0;

    totalScore += score;
    rounds++;

    updateDisplay();
    input.value = ""; // Resettar inputfältet

    if (startingScore == 0)
    {
        alert("Game Shot!");
        startingScore = 501;
        totalScore = 0; 
        rounds = 0;
        updateDisplay();
    }
}
document.getElementById("addScoreBtn").addEventListener("click", addScore);

// Variabler för  1v1
let p1Score = 501, p2Score = 501;
let p1Total = 0, p2Total = 0;
let p1Rounds = 0, p2Rounds = 0;2

function updateLocalDisplay()
{
    document.getElementById("p1scoreRequired").textContent = p1Score;
    document.getElementById("p1dartAverage").textContent = p1Rounds > 0 ? (p1Total / p1Rounds).toFixed(2) : 0;
    document.getElementById("p2scoreRequired").textContent = p2Score;
    document.getElementById("p2dartAverage").textContent = p2Rounds > 0 ? (p2Total / p2Rounds).toFixed(2) : 0;
}

function playSoundForScore(score) //Ljudeffekter
{
    if (score >= 80 && score <= 180)
    {
        const sound = new Audio(`Ljud/${score}.wav`);
        sound.play();
    }
}

//Poänghantering för spelare 1
function addP1Score()
{
    const input = document.getElementById("p1score");
    const score = parseInt(input.value);

    if (isNaN(score) || score < 0 || score > 180 || score > p1Score)
    {
        alert("Ange en giltig poäng mellan 0 och 180.");
        return;
    }

    playSoundForScore(score);

    p1Score -= score;
    p1Total += score;
    p1Rounds++;
    input.value = "";
    updateLocalDisplay();

    if (score === 180)
    {
        const celebration = document.getElementById("180celebration");
        celebration.classList.remove("d-none");
        setTimeout(() => celebration.classList.add("d-none"), 3000);
    }
    if (score === 170)
        {
            const celebration = document.getElementById("170celebration");
            celebration.classList.remove("d-none");
            setTimeout(() => celebration.classList.add("d-none"), 3000);
        }

    if (p1Score == 0) //Återställer spel
    {
        alert("Player 1 Wins!");
        p1Score = 501;
        p2Score = 501;
        p1Total = 0;
        p2Total = 0;
        p1Rounds = 0;
        p2Rounds = 0;
        updateLocalDisplay();
    }
}
//Poänghantering för spelare 2
function addP2Score()
{
    const input = document.getElementById("p2score");
    const score = parseInt(input.value);

    if (isNaN(score) || score < 0 || score > 180 || score > p2Score)
    {
        alert("Ange en giltig poäng mellan 0 och 180.");
        return;
    }

    playSoundForScore(score);

    p2Score -= score;
    p2Total += score;
    p2Rounds++;
    input.value = "";
    updateLocalDisplay();

    if (score === 180)
    {
        const celebration = document.getElementById("180celebration");
        celebration.classList.remove("d-none");
        setTimeout(() => celebration.classList.add("d-none"), 3000);
    }
    if (score === 170)
    {
            const celebration = document.getElementById("170celebration");
            celebration.classList.remove("d-none");
            setTimeout(() => celebration.classList.add("d-none"), 3000);
    }

    if (p2Score == 0)//Återställer spel
    {
        alert("Player 2 Wins!");
        p1Score = 501;
        p2Score = 501;
        p1Total = 0;
        p2Total = 0;
        p1Rounds = 0;
        p2Rounds = 0;
        updateLocalDisplay();
    }
}

// Eventlyssnare
document.getElementById("p1addScoreBtn").addEventListener("click", addP1Score);
document.getElementById("p2addScoreBtn").addEventListener("click", addP2Score);
