const questions = [
    
    { 
        text: "Have I made you proud?", 
        image: "proud.jpg", 
        paragraph: "I always try to be the daughter you dreamed of. Your pride in me means everything! 🏆❤️" 
    },

    { 
        text: "Am I still your little princess?", 
        image: "princess.jpg", 
        paragraph: "I will always be your little girl, no matter how old I get! 👑💖" 
    },
    
    { 
        text: "You  are my biggest supporter ?", 
        image: "superhero.jpg", 
        paragraph: "papa aap ne mujhe hamesha  support kiya hurr  cheez mei. thank you ! 🦸‍♂️❤️" 
    }
];

let currentIndex = 0;

function loadQuestion() {
    if (currentIndex < questions.length) {
        document.getElementById("question-box").innerText = questions[currentIndex].text;
        document.getElementById("image-box").innerHTML = "";
        document.getElementById("paragraph-box").innerText = "";
    } else {
        showFinalMessage();
    }
}

function handleYes() {
    document.getElementById("image-box").innerHTML = `<img src="${questions[currentIndex].image}" alt="Memory">`;
    document.getElementById("paragraph-box").innerText = questions[currentIndex].paragraph;
    setTimeout(() => {
        nextQuestion();
    }, 10000); // Move to next question after 5 seconds
}

function handleNo() {
    nextQuestion();
}

function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

function showFinalMessage() {
    document.getElementById("question-box").innerHTML = "<h2>PAPA, I'm Sorry! 😢</h2>";
    document.getElementById("paragraph-box").innerHTML = `
        <p>SORRY papa. mujhe pata hai aap bht gussa ho ki mei trip pe akele gai thi .....par trip pe mera akele jane ka main matlab yahi tha ki mei aapko batana chahati thi ki ab mei badi ho gai hu 💕</p>
        <p> aur ab mei apna dhyan rakh sakti hu . Mujhe pata hai mei jeet nahi pai Noida wala hackthon but sach mei meine poora try kiya tha jeetne ka . 🤗</p>
        <p><strong>Love you always, bulbul ❤️</strong></p>
    `;
    document.getElementById("image-box").innerHTML = "<img src='father_daughter_hug.jpg' alt='Father-Daughter Hug'>";
    document.querySelector(".buttons").style.display = "none";
}

// Make sure the page adapts to different screen sizes
window.addEventListener("resize", adjustLayout);

function adjustLayout() {
    let container = document.querySelector(".container");
    if (window.innerWidth < 600) {
        container.style.padding = "10px";
        container.style.fontSize = "14px";
    } else {
        container.style.padding = "20px";
        container.style.fontSize = "18px";
    }
}

window.onload = () => {
    loadQuestion();
    adjustLayout();
};
