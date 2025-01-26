const thisYear = new Date().getFullYear();

// Helper function to generate progress bar based on progress value
function generateProgressBar(progress) {
    const progressBarCapacity = 30;
    const passedProgressBarIndex = Math.floor(progress * progressBarCapacity);
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('');
    return `{ ${progressBar} }`;
}

// Calculate progress of the year
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime();
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime();
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear);

// Generate progress bar with the current year's progress
const progressBarOfThisYear = generateProgressBar(progressOfThisYear);

// Month names array
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Example usage to display the progress
const readme = `Current Year Progress:
${progressBarOfThisYear}

Month Names: ${monthNames.join(', ')}`;

console.log(readme);
