#!/usr/bin/env node

function calculateTimeRemaining(targetDate: Date): number {
    const now1 = new Date();
    return targetDate.getTime() - now1.getTime();
}

function updateCountdownDisplay(timeRemaining: number): void {
    //If target date meets clear interval.
    if (timeRemaining <= 0) {
        console.log('Countdown reached the target date!');
        clearInterval(countdownInterval);
        return;
    }

    const seconds = Math.floor(timeRemaining / 1000) % 60;
    const minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));

    console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
}

// Set your target date here
//const targetDate = new Date('2023-08-16T12:18:59');
const targetDate = new Date();
targetDate.setSeconds(60);

// Initial time remaining calculation and display update
const initialTimeRemaining = calculateTimeRemaining(targetDate);
updateCountdownDisplay(initialTimeRemaining);

// Update display every second
const countdownInterval = setInterval(() => {
    const timeRemaining = calculateTimeRemaining(targetDate);
    updateCountdownDisplay(timeRemaining);

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
    }
}, 1000);
