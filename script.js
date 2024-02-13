let noPhases = ["are you sure?", "really sure?", "uhhh, try again!", "last chance!", "No date???"];
let phaseIndex = 0;
let yesButtonSize = 1;

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Yes" button
    document.getElementById("yesButton").addEventListener("click", function() {
        document.body.innerHTML = `
            <div id="datePickerContainer">
                <label for="datePicker">choose a date :):</label>
                <input type="date" id="datePicker">
                <button id="nextButton">Next</button>
            </div>
        `;

        // Event listener for the "Next" button after date selection
        document.getElementById("nextButton").addEventListener("click", function() {
            const date = document.getElementById("datePicker").value;
            if (date !== '') {
                document.body.innerHTML = `
                    <div id="foodChoiceContainer">
                        <label for="foodChoice">its a dinner date sooo... what culture?</label>
                        <input type="text" id="foodChoice" name="foodChoice" placeholder="indian? mexican? chinese? thai?"><br><br>
                        <button id="submitChoice">Submit</button>
                    </div>
                `;

                // Event listener for submitting the choice
                document.getElementById("submitChoice").addEventListener("click", function() {
                    const foodChoice = document.getElementById("foodChoice").value;
                    localStorage.setItem("date", date);
                    localStorage.setItem("foodChoice", foodChoice);

                    // Display the final screen with date and food choice
                    document.body.innerHTML = `
                        <div id="finalScreen">
                            <p>soooo... issa date?:)</p>
                            <p>date: ${date}</p>
                            <p>food culture: ${foodChoice}</p>
                            <p>wine: included :)</p>
                            <p>see you then :)</p>
                            <p><b>snap me this screen bc i cant see your choices<b/></p>
                        </div>
                    `;
                });
            } else {
                alert("pookie ur supposed to pick a date");
            }
        });
    });
});


document.getElementById("datePicker").addEventListener("change", function() {
    document.getElementById("foodChoiceContainer").style.display = "block";
    document.body.innerHTML += foodChoiceHTML; // Add this below the date picker
});



document.getElementById("submitChoice").addEventListener("click", function() {
    const date = document.getElementById("datePicker").value;
    const foodChoice = document.getElementById("foodChoice").value;
    localStorage.setItem("date", date);
    localStorage.setItem("foodChoice", foodChoice);
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