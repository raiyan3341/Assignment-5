let heartsCount = document.getElementById("heart-count");
let coinsCount = document.getElementById("coin-count");
let copyCount = document.getElementById("copy-count");
let callsHistory = document.getElementById("call-history");
let clearHistoryBtn = document.getElementById("clear-history-btn");

document.querySelectorAll(".heart-icon").forEach(function(icon){
    icon.addEventListener("click", function(){
        let currentHearts = parseInt(heartsCount.innerText);
        heartsCount.innerText = currentHearts + 1;

    });
});

clearHistoryBtn.addEventListener("click", function(){

    callsHistory.innerHTML = "";
});

document.getElementById("call-1").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling National Emergency Number at 999");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>National Emergency Number</b><br>999</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-2").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Police Helpline Number at 999");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Police Helpline Number</b><br>999</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-3").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Fire Service Number at 999");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Fire Service Number</b><br>999</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-4").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Ambulance Service at 1994-999999");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Ambulance Service</b><br>1994-999999</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-5").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Women & Child Helpline at 109");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Women & Child Helpline</b><br>109</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-6").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Anti-Corruption Helpline at 106");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Anti-Corruption Helpline</b><br>106</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-7").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Electricity Helpline at 16216");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Electricity Helpline</b><br>16216</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-8").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Brac Helpline at 16445");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Brac Helpline</b><br>16445</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("call-9").addEventListener("click", function(){
    let coins = parseInt(coinsCount.innerText);
    if (coins < 20){
        alert("Not enough coins to make a call.");
        return;
    }
    coinsCount.innerText = coins - 20;
    alert("Calling Bangladesh Railway Helpline at 163");
    let time = new Date().toLocaleTimeString();
    callsHistory.innerHTML = "<div class='flex justify-between'><div><b>Bangladesh Railway Helpline</b><br>163</div><div class='mt-1'>" + time + "</div></div>" + callsHistory.innerHTML;
});

document.getElementById("copy-1").addEventListener("click", function(){
    navigator.clipboard.writeText("999");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-2").addEventListener("click", function(){
    navigator.clipboard.writeText("999");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-3").addEventListener("click", function(){
    navigator.clipboard.writeText("999");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-4").addEventListener("click", function(){
    navigator.clipboard.writeText("1994-999999");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-5").addEventListener("click", function(){
    navigator.clipboard.writeText("109");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-6").addEventListener("click", function() {
    navigator.clipboard.writeText("106");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-7").addEventListener("click", function(){
    navigator.clipboard.writeText("16216");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-8").addEventListener("click", function(){
    navigator.clipboard.writeText("16445");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});

document.getElementById("copy-9").addEventListener("click", function(){
    navigator.clipboard.writeText("163");
    alert("Copied number to clipboard!");
    copyCount.innerText = parseInt(copyCount.innerText) + 1;
});
