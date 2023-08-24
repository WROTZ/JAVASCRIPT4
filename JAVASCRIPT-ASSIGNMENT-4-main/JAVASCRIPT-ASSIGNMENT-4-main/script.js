function findDay() {
    const inputDate = new Date(document.getElementById('dateInput').value);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = inputDate.getDay();
  
    if (!isNaN(dayIndex)) {
      const dayOfWeek = daysOfWeek[dayIndex];
      document.getElementById('result').textContent = `The day of the week for ${inputDate.toDateString()} is ${dayOfWeek}.`;
    } else {
      document.getElementById('result').textContent = 'Invalid date';
    }
  }
  