// Set Employee checkin function
//function to include date, month, year and time
function checkIn(employeeId) {
    const today = new Date();
    const timestamp = today.toISOString().substring(0, 13) + '00'; // Format timestamp as YYYY-MM-DDTHH00
    const record = `${employeeId},${timestamp},check-in\n`;
    localStorage.setItem('timecards', localStorage.getItem('timecards', '') + record);
}

//Set employee checkout function
//function to include date, month, year and time
function checkOut(employeeId) {
    const now = new Date();
    const timestamp = now.toISOString().substring(0, 13) + '00'; // Format timestamp as YYYY-MM-DDTHH00
    const record = `${employeeId},${timestamp},check-out\n`;
    localStorage.setItem('timecards', localStorage.getItem('timecards', '') + record);
}