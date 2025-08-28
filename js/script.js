//console.log("Java connected")


document.addEventListener("DOMContentLoaded", function () {

    
    const heartBtn = document.querySelectorAll(".button button")[0]; 
    const coinBtn = document.querySelectorAll(".button button")[1];  
    const copyBtn = document.querySelectorAll(".button button")[2];  

    
    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

   
    function updateNavbar() {
        heartBtn.innerHTML = heartCount + ' <img src="assets/heart.png" class="h-5 w-5">';
        coinBtn.innerHTML = coinCount + ' <img src="assets/coin.png" class="h-5 w-5">';
        copyBtn.innerText = copyCount + " Copy";
    }

    
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
        
        const heartIcon = card.querySelector(".fa-heart");
        const callButton = card.querySelector(".fa-phone").closest("button");
        const copyButton = card.querySelector(".fa-copy").closest("button");

        const serviceName = card.querySelector("h3").innerText;
        const serviceNumber = card.querySelector(".number").innerText.trim();

        
        heartIcon.addEventListener("click", function () {
            heartCount++;
            updateNavbar();
        });

        
        callButton.addEventListener("click", function () {
            
            if (coinCount < 20) {
                alert("Not enough coins to make a call!");
                return;
            }

            
            coinCount -= 20;
            updateNavbar();

            
            alert("Calling " + serviceName + " at " + serviceNumber);

            
            addToHistory(serviceName, serviceNumber);
        });

        
        copyButton.addEventListener("click", function () {
            
            navigator.clipboard.writeText(serviceNumber);

            
            copyCount++;
            updateNavbar();

            
            alert("Copied " + serviceNumber);
        });
    });

    
    const historySection = document.querySelector(".right-side");
    const clearHistoryBtn = historySection.querySelector("button");

    
    const historyList = document.createElement("div");
    historyList.classList.add("p-3", "w-full", "flex", "flex-col", "gap-2");
    historySection.appendChild(historyList);

    
    function addToHistory(name, number) {
        const item = document.createElement("div");
        item.classList.add("border-b", "py-2");

        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        
        item.textContent = name + ": " + number + " (at " + timeString + ")";
        historyList.appendChild(item);
    }

    
    clearHistoryBtn.addEventListener("click", function () {
        historyList.innerHTML = "";
    });

    
    updateNavbar();
});
