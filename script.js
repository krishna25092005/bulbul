const questions = [
    { 
        text: "Do you remember our first vacation together?", 
        image: "vacation.jpg", 
        paragraph: "That was one of the happiest times of my life, Dad! We laughed, explored, and you made sure I had the best time ever. 💖" 
    },
    { 
        text: "Did you enjoy the bedtime stories you told me?", 
        image: "bedtime.jpg", 
        paragraph: "Your stories were my favorite part of the day! They were filled with magic, adventure, and most importantly, love. ✨" 
    },
    { 
        text: "Was my first school day special for you?", 
        image: "school.jpg", 
        paragraph: "I was so nervous, but you held my hand and made me feel safe. I’ll never forget that day. Thank you, Dad! 🎒❤️" 
    },
    { 
        text: "Did we have fun making my favorite dish together?", 
        image: "cooking.jpg", 
        paragraph: "Cooking with you was always fun! You made sure I felt like a chef, even if I made a mess. 🍳👩‍🍳" 
    },
    { 
        text: "Do you still remember my childhood laughter?", 
        image: "laughter.jpg", 
        paragraph: "Every giggle, every funny face, every silly joke – they were all because of you, Dad. You made my childhood so joyful! 😆💕" 
    },
    { 
        text: "Have I made you proud?", 
        image: "proud.jpg", 
        paragraph: "I always try to be the daughter you dreamed of. Your pride in me means everything! 🏆❤️" 
    },
    { 
        text: "Do you still love me the same?", 
        image: "love.jpg", 
        paragraph: "No matter what happens, my love for you never changes. I hope you feel the same way, Dad! 💕" 
    },
    { 
        text: "Am I still your little princess?", 
        image: "princess.jpg", 
        paragraph: "I will always be your little girl, no matter how old I get! 👑💖" 
    },
    { 
        text: "Do you want to make more beautiful memories together?", 
        image: "memories.jpg", 
        paragraph: "I miss our time together, Dad. Let's create more beautiful moments! 📸💞" 
    },
    { 
        text: "Will you always be my superhero?", 
        image: "superhero.jpg", 
        paragraph: "You’ve always been my hero, Dad. No one can ever take your place! 🦸‍♂️❤️" 
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
    }, 5000); // Move to next question after 5 seconds
}

function handleNo() {
    nextQuestion();
}

function nextQuestion() {
    currentIndex++;
    loadQuestion();
}

function showFinalMessage() {
    document.getElementById("question-box").innerHTML = "<h2>Dear Dad, I'm Sorry! 😢</h2>";
    document.getElementById("paragraph-box").innerHTML = `
        <p>Dad, I know things haven't been perfect lately, and I might have upset you. But please know that I love you more than words can say. 💕</p>
        <p>You are my first hero, my guide, and my safe place. No matter what, I will always be your little girl. Can we start fresh? 🤗</p>
        <p><strong>Love you always, Your Daughter ❤️</strong></p>
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