// main.js

document.addEventListener('DOMContentLoaded', () => {
    const resultDiv = document.getElementById('result');
    const generateBtn = document.getElementById('generate');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Theme Toggle Logic
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        if (body.classList.contains('light-theme')) {
            themeToggle.textContent = 'Dark Mode';
        } else {
            themeToggle.textContent = 'Light Mode';
        }
    });

    const getBallColor = (number) => {
        if (number <= 10) return 'yellow';
        if (number <= 20) return 'blue';
        if (number <= 30) return 'red';
        if (number <= 40) return 'gray';
        return 'green';
    };

    const generateAndDisplayNumbers = () => {
        // 1. Clear previous numbers
        resultDiv.innerHTML = '';

        // 2. Generate 6 unique numbers
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        // 3. Sort numbers and display them
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.className = `ball ${getBallColor(number)}`;
                ball.textContent = number;
                resultDiv.appendChild(ball);
            }, index * 100); // Stagger the animation
        });
    };

    generateBtn.addEventListener('click', generateAndDisplayNumbers);

    // Initial generation on page load
    generateAndDisplayNumbers();
});
