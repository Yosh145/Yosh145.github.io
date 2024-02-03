let noPhases = ["Are you sure?", "really sure?", "uhhh, try again!", "last chance!", "No date???"];
let phaseIndex = 0;
let yesButtonSize = 1;

document.getElementById("yesButton").addEventListener("click", function() {
    document.getElementById("content").innerHTML = "<p>It's a date :), text me for the details.</p>";
});

document.getElementById("noButton").addEventListener("click", function() {
    if (phaseIndex < noPhases.length) {
        this.textContent = noPhases[phaseIndex++];
        yesButtonSize += 0.5; // Increase the size of the "Yes" button
        let yesButton = document.getElementById("yesButton");
        yesButton.style.transform = `scale(${yesButtonSize})`;

        // Calculate new margin for the "No" button to move it to the side
        let noButtonMargin = 30 + (30 * (yesButtonSize - 1));
        this.style.marginLeft = `${noButtonMargin}px`;
    } else {
        document.getElementById("content").innerHTML = "<p>hardships will be awaiting for you inshallah</p>";
    }
});