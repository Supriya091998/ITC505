// Display the last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;

// Handle form submission
document.getElementById('madLibForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve values from the form
    const noun = document.getElementById('noun').value;
    const verb = document.getElementById('verb').value;
    const adjective = document.getElementById('adjective').value;
    const place = document.getElementById('place').value;
    const pluralNoun = document.getElementById('pluralNoun').value;

    // Generate the story
    const story = `Once upon a time in ${place}, there was a ${adjective} ${noun} that loved to ${verb} with ${pluralNoun}. 
    It was a day full of adventure and surprises!`;

    // Display the story
    document.getElementById('storyText').textContent = story;
    document.getElementById('madLibForm').style.display = 'none';
    document.getElementById('storyContainer').style.display = 'block';
});

// Handle resetting the form
document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('madLibForm').reset();
    document.getElementById('madLibForm').style.display = 'block';
    document.getElementById('storyContainer').style.display = 'none';
});
