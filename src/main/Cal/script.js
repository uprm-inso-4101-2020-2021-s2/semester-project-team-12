let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const newEventModal = document.getElementById('newEventModal');
const deleteEventModal = document.getElementById('deleteEventModal');
const backDrop = document.getElementById('modalBackDrop');
const eventTitleInput = document.getElementById('eventTitleInput');
const eventTimeInput = document.getElementById('eventTimeInput'); // G- Add this 
// K - added this as a test, to see how the system gets its input.
const eventTypeInput = document.getElementById("reason");
const eventAllInput = document.getElementById("checkbox");

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dateControl = document.querySelector('input[type="datetime-local"]'); // Add by -G

 
function openModal(date) {
  eventAllInput.checked = false;
  console.log(date);

  
try{
  date.split('/');
  
}catch(TypeError){
  date = getCurrentDate();

}
  clicked = date;
  const eventForDay = events.find(e => e.date === clicked) ;

  console.log(date);
  //Set Month Format MM
  var month = date.split('/')[0];
  if(month < 10){
    month = "0"+month;
  }
  //Set Date Format DD
  var day = date.split('/')[1];
  if(day < 10){
    day = "0"+day;
  }
  var year = date.split('/')[2];
  console.log(year+"-"+month+"-"+day+"T6:00");
  // Add by -Grace 
  dateControl.value = year+"-"+month+"-"+day+"T06:00";
  if (eventForDay ) {
    document.getElementById('eventText').innerText = eventForDay.title;
   deleteEventModal.style.display = 'block'; 

  } else {
    newEventModal.style.display = 'block';
  }

  backDrop.style.display = 'block';

}


function load() {

  const dt = new Date();

  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }
  const day = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();

  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

  document.getElementById('monthDisplay').innerText = 
    `${dt.toLocaleDateString('en-us', { month: 'long' })} ${year}`;

  calendar.innerHTML = '';

  for(let i = 1; i <= paddingDays + daysInMonth; i++) {
    const daySquare = document.createElement('div');
    daySquare.classList.add('day');  //class day
    getCurrentDate.day;
    const dayString = `${month + 1}/${i - paddingDays}/${year}`;
    getCurrentDate.month;

    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      const eventForDay = events.find(e => e.date === dayString);

      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }

      if (eventForDay ) {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        // Change the color with the type
        if(eventForDay.type == "work"){
          eventDiv.style.backgroundColor = "red";
        }
        if(eventForDay.type == "relax"){ 
          eventDiv.style.backgroundColor = "green";
        }
        if(eventForDay.type == "study"){
          eventDiv.style.backgroundColor = "blue";
        }
        if(eventForDay.check == true){
          eventDiv.style.height = "70px";
        }
        eventDiv.innerText = eventForDay.title;

        daySquare.appendChild(eventDiv);
      }
      // Aqui se añade el feature que te deja ver el evento en ese dia particular
      daySquare.addEventListener('click', () => openModal(dayString));
    } else {
      daySquare.classList.add('padding');
    }

    calendar.appendChild(daySquare);    
  }
}

function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';

  clicked = null;
  load();
}


function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');
    const boolean = eventAllInput.checked;
    events.push({
      date: clicked, 
      title: eventTitleInput.value,
      type: eventTypeInput.value,
      check: boolean
    });

    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}

//Grace -- This method returns the CurrentDay in format MM/DD/YEAR
function getCurrentDate(){
  const dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }
  const day =dt.getDay();
  const month = dt.getMonth(); 
  const year = dt.getFullYear();
  return month+'/'+day+'/'+year;
}

function deleteEvent() {
  events = events.filter(e => e.date !== clicked);
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}

function initButtons() {
  document.getElementById('nextButton').addEventListener('click', () => {
    nav++; 
    load();
  });

  document.getElementById('backButton').addEventListener('click', () => {
    nav--;
    load();
  });

  document.getElementById('addEvent').addEventListener('click', openModal); // add by -G
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);

  // Task Manager Modal
}
initButtons();
load();
