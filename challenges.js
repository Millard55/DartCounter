function switchMode(mode) 
{
    practiceMode = mode;

    document.getElementById('singlesUI').classList.add('d-none');
    document.getElementById('doublesUI').classList.add('d-none');
    document.getElementById('checkoutsUI').classList.add('d-none');
    document.getElementById('bullseyeUI').classList.add('d-none');

    if (mode === 'singles')
    {
        document.getElementById('singlesUI').classList.remove('d-none');
    } 
    else if (mode === 'doubles')
    {
        document.getElementById('doublesUI').classList.remove('d-none');
    } 
    else if (mode === 'checkouts')
    {
        document.getElementById('checkoutsUI').classList.remove('d-none');
    } 
    else if (mode === 'bullseye')
    {
        document.getElementById('bullseyeUI').classList.remove('d-none');
    }
}




function generateSingles() // Slumpar fram 3 singlar man ska träffa med en array
{
    let singles = [];
    for (let i=0; i<3; i++)
        {
        let n = Math.floor(Math.random() * 20) + 1;
        singles.push(n);
    }

    document.getElementById("singlesRequired").innerHTML = singles.join(", ");
}
document.getElementById("singleBtn").onclick = generateSingles;

function generateDoubles() // Slumpar fram 3 dubblar
{
    let doubles = [];
    for (let i=0; i<3; i++)
        {
        let n = Math.floor(Math.random() * 20) + 1;
        doubles.push(n);
    }

    document.getElementById("doublesRequired").innerHTML = doubles.join(", ");
}
document.getElementById("doubleBtn").onclick = generateDoubles;

function generateCheckout() // Slumpar fram checkout (2-170)
{
    let n = Math.floor(Math.random() * 170) + 2;
    document.getElementById("checkoutRequired").innerHTML = n;
}
document.getElementById("checkoutBtn").onclick = generateCheckout;



window.onload = function() 
{
    generateSingles();
    generateDoubles();
    generateCheckout();
}

