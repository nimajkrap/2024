document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const prevButton = document.getElementById('prev-month');
    const nextButton = document.getElementById('next-month');

    const months = [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ];
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

    let currentMonth = 0;

    const renderCalendar = (monthIndex) => {
        calendar.innerHTML = '';
        const monthName = months[monthIndex];
        const daysInMonth = new Date(2024, monthIndex + 1, 0).getDate();
        const firstDayIndex = new Date(2024, monthIndex, 1).getDay();

        const monthHeader = document.createElement('h2');
        monthHeader.textContent = monthName;
        calendar.appendChild(monthHeader);

        const daysDiv = document.createElement('div');
        daysDiv.className = 'days';

        // Add weekdays header
        weekdays.forEach(day => {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'weekday';
            dayDiv.textContent = day;
            daysDiv.appendChild(dayDiv);
        });

        // Add blank days for the first week
        for (let i = 0; i < firstDayIndex; i++) {
            const blankDiv = document.createElement('div');
            blankDiv.className = 'day';
            daysDiv.appendChild(blankDiv);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.textContent = day;
            dayDiv.addEventListener('click', () => {
                window.location.href = `day.html?date=2024-${monthIndex + 1}-${day}`;
            });
            daysDiv.appendChild(dayDiv);
        }

        calendar.appendChild(daysDiv);
    };

    prevButton.addEventListener('click', () => {
        if (currentMonth > 0) {
            currentMonth--;
            renderCalendar(currentMonth);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentMonth < 11) {
            currentMonth++;
            renderCalendar(currentMonth);
        }
    });

    // Initialize the calendar with the first month
    renderCalendar(currentMonth);
});
