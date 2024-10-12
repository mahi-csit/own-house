let events = JSON.parse(localStorage.getItem('events')) || [];

function displayEvents() {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = '';
    events.forEach((event, index) => {
        const li = document.createElement('li');
        li.textContent = `${event.name}: ${event.points} points`;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEvent(index);
        li.appendChild(deleteButton);

        eventList.appendChild(li);
    });
}

function deleteEvent(index) {
    events.splice(index, 1);
    localStorage.setItem('events', JSON.stringify(events));
    displayEvents();
}

document.addEventListener('DOMContentLoaded', displayEvents);
