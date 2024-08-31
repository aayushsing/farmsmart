document.addEventListener("DOMContentLoaded", () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get visitor counts from localStorage
    let dailyCount = localStorage.getItem("dailyCount") ? JSON.parse(localStorage.getItem("dailyCount")) : {};
    let monthlyCount = localStorage.getItem("monthlyCount") ? JSON.parse(localStorage.getItem("monthlyCount")) : {};
    let yearlyCount = localStorage.getItem("yearlyCount") ? JSON.parse(localStorage.getItem("yearlyCount")) : {};

    // Initialize counts if not already done
    if (!dailyCount[currentDay]) dailyCount[currentDay] = 0;
    if (!monthlyCount[currentMonth]) monthlyCount[currentMonth] = 0;
    if (!yearlyCount[currentYear]) yearlyCount[currentYear] = 0;

    // Increment visitor counts
    dailyCount[currentDay]++;
    monthlyCount[currentMonth]++;
    yearlyCount[currentYear]++;

    // Update localStorage with new counts
    localStorage.setItem("dailyCount", JSON.stringify(dailyCount));
    localStorage.setItem("monthlyCount", JSON.stringify(monthlyCount));
    localStorage.setItem("yearlyCount", JSON.stringify(yearlyCount));

    // Display counts on the page
    document.getElementById("daily-count").innerText = dailyCount[currentDay];
    document.getElementById("monthly-count").innerText = monthlyCount[currentMonth];
    document.getElementById("yearly-count").innerText = yearlyCount[currentYear];
});
