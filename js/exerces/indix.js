const workouts = [
    {
        name: "Cat-Cow Stretch",
        instructions: "ನಿಮ್ಮ ಕೈಗಳು ಮತ್ತು ಮೊಣಕಾಲುಗಳ ಮೇಲೆ ಪ್ರಾರಂಭಿಸಿ. ಉಸಿರನ್ನು ಒಳಗೆಳೆದುಕೊಳ್ಳಿ, ನಿಮ್ಮ ಬೆನ್ನನ್ನು ಬಾಗಿಸಿ (ಹಸುವಿನ ಭಂಗಿ), ಮತ್ತು ಮೇಲಕ್ಕೆ ನೋಡಿ. ಉಸಿರನ್ನು ಹೊರಹಾಕಿ, ನಿಮ್ಮ ಬೆನ್ನುಮೂಳೆಯ ಸುತ್ತಲೂ (ಬೆಕ್ಕಿನ ಭಂಗಿ), ಮತ್ತು ನಿಮ್ಮ ಗಲ್ಲವನ್ನು ನಿಮ್ಮ ಎದೆಗೆ ಕಟ್ಟಿ. 1-2 ನಿಮಿಷಗಳ ಕಾಲ ಪುನರಾವರ್ತಿಸಿ..",
        gif: "photo/anim-cat-cow-pose.gif"
    },
    {
        name: "Child’s Pose",
        instructions: "ನಿಮ್ಮ ಕೈಗಳು ಮತ್ತು ಮೊಣಕಾಲುಗಳ ಮೇಲೆ ಪ್ರಾರಂಭಿಸಿ, ನಂತರ ನಿಮ್ಮ ಹಿಮ್ಮಡಿಗಳ ಮೇಲೆ ಕುಳಿತು ಮತ್ತು ನಿಮ್ಮ ತೋಳುಗಳನ್ನು ಮುಂದಕ್ಕೆ ಚಾಚಿ. 1-2 ನಿಮಿಷಗಳ ಕಾಲ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳಿ, ಆಳವಾಗಿ ಉಸಿರಾಡಿ.",
        gif: "https://example.com/childs-pose.gif"
    },
    {
        name: "Pelvic Tilts",
        instructions: "Lie on your back with your knees bent and feet flat on the floor. Flatten your lower back against the floor by tightening your abdominal muscles and tilting your pelvis. Hold for a few seconds, then relax. Repeat 10-15 times.",
        gif: "photo/anim-cat-cow-pose.gif"
    },
    {
        name: "Bridges",
        instructions: "Lie on your back with your knees bent and feet flat on the floor. Lift your hips towards the ceiling while keeping your shoulders on the floor. Hold for a few seconds and then lower back down. Repeat 10-15 times.",
        gif: "https://example.com/bridges.gif"
    },
    {
        name: "Knee-to-Chest Stretch",
        instructions: "Lie on your back with your knees bent and feet flat on the floor. Bring one knee to your chest, keeping the other foot on the floor. Hold for 15-30 seconds, then switch legs. Repeat 2-3 times per leg.",
        gif: "https://example.com/knee-to-chest-stretch.gif"
    },
    {
        name: "Lower Back Rotational Stretch",
        instructions: "Lie on your back with your knees bent and feet flat on the floor. Keep your shoulders firmly on the floor and gently roll both bent knees to one side. Hold for 5-10 seconds, then return to the starting position and repeat on the other side. Repeat 2-3 times per side.",
        gif: "https://example.com/lower-back-rotational-stretch.gif"
    },
    {
        name: "Seated Forward Bend",
        instructions: "Sit with your legs straight in front of you. Gently reach for your toes while keeping your back straight. Hold for 15-30 seconds. Repeat 2-3 times.",
        gif: "https://example.com/seated-forward-bend.gif"
    },
    {
        name: "Bird Dog",
        instructions: "Start on your hands and knees. Extend one arm and the opposite leg straight out, keeping your back flat. Hold for a few seconds, then return to the starting position. Repeat 10-15 times on each side.",
        gif: "https://example.com/bird-dog.gif"
    },
    {
        name: "Wall Sits",
        instructions: "Stand with your back against a wall and your feet shoulder-width apart. Slowly slide down into a sitting position with your knees bent at a 90-degree angle. Hold for 10-15 seconds, then slide back up. Repeat 10-15 times.",
        gif: "https://example.com/wall-sits.gif"
    },
    {
        name: "Partial Crunches",
        instructions: "Lie on your back with your knees bent and feet flat on the floor. Cross your arms over your chest. Tighten your abdominal muscles and lift your shoulders off the floor. Hold for a few seconds, then lower back down. Repeat 10-15 times.",
        gif: "https://example.com/partial-crunches.gif"
    },
    {
        name: "Hamstring Stretch",
        instructions: "Lie on your back and raise one leg straight up. Loop a towel or band around your foot and gently pull your leg towards you, keeping it straight. Hold for 15-30 seconds, then switch legs. Repeat 2-3 times per leg.",
        gif: "https://example.com/hamstring-stretch.gif"
    },
    {
        name: "Aerobic Exercise",
        instructions: "Choose a low-impact aerobic activity like walking, swimming, or cycling. Aim for at least 30 minutes of activity, 3-5 times a week.",
        gif: "https://example.com/aerobic-exercise.gif"
    }
];

let currentWorkout = 0;
let timer;

function showResultWorkout(index) {
    const workoutContainer = document.getElementById('workout-container');
    workoutContainer.innerHTML = `
        <div class="workout" style="display: block;">
            <h2>${workouts[index].name}</h2>
            <img src="${workouts[index].gif}" alt="${workouts[index].name}">
            <p>${workouts[index].instructions}</p>
            <div class="timer" id="timer">03:00</div>
        </div>
    `;
    speak(workouts[index].instructions);
    updateButtons();
    startTimer();
}

function updateButtons() {
    document.getElementById('prev').disabled = currentWorkout === 0;
    document.getElementById('next').disabled = currentWorkout === workouts.length - 1;
}

function prevWorkout() {
    if (currentWorkout > 0) {
        currentWorkout--;
        showResultWorkout(currentWorkout);
    }
}

function nextWorkout() {
    if (currentWorkout < workouts.length - 1) {
        currentWorkout++;
        showResultWorkout(currentWorkout);
    }
}

function speak(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
}



function startTimer() {
    clearInterval(timer);
    let time = 180; // 2 minutes in seconds
    const timerElement = document.getElementById('timer');

    timer = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        time--;

        if (time < 0) {
            clearInterval(timer);
            nextWorkout();
        }
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => showResultWorkout(currentWorkout));
