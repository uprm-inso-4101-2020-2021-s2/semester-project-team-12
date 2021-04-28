// Class Modal:
const newClassModal = document.getElementById('newClassModal');
const classInfoModal = document.getElementById('classInfoModal');
const backDrop2 = document.getElementById('modalBackDropManager');
// Class Modal inputs:
const newClassName = document.getElementById('classTitleInput');
const newClassCode = document.getElementById('classCodeInput');
// With .value I can get if its 1, 2, 3 or 4 credits.
const newClassCredits = document.getElementById('credit');
// Below are all days of the week
const sunday = document.getElementById('sunday');
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');
const saturday = document.getElementById('saturday');
// Below are the start and end time of a class:
const start = document.getElementById('start');
const end = document.getElementById('end');
// getting the task manager container:
const taskManager = document.getElementById('container-taskmanager');

// This functions loads all of the classes stored in local storage to display them on the screen.
function loadTaskManager(){
    // Local Storage for classes:
    // classes parameter is the key to get the values of a class
    // The ?: is a ternary expression, if classes is not null the JSON will parse, if not it will equal classes to an empty array.
    let classes = localStorage.getItem('classes') != null 
    ? JSON.parse(localStorage.getItem('classes')) 
    : [];
    classes.forEach(function(newClass){
      displayClass(newClass);
    });
}

// This function puts the modal visible, when the addClass button is clicked:
function openModalManager(){ 
    newClassModal.style.display = 'block';
    backDrop2.style.display = 'block';
}
function closeModalManager(){
  newClassModal.style.display = 'none';
  backDrop2.style.display = 'none';
}
// Modal for classes:
function openClassInfo(newClass, days){
  // classInfoModal.innerHTML
  let content = "<h2>Class:</h2>" +
                            "<h3> NAME </h3>" +
                            newClass.name +
                            "<h3> CODE </h3>" +
                            newClass.code +
                            "<h3> CREDITS </h3>" +
                            newClass.credits +
                            "<h3> DAY </h3>" +
                            days +
                            '<h3> LIST OF TASK: </h3>' +
                            '<div id="listOfTasks">';
  if(localStorage.getItem('events') != null){
    let events = JSON.parse(localStorage.getItem('events'));
    events.forEach(function(event){
      if(event.class == newClass.name){
        content = content.concat('<div class="events">'+ event.title +'</div>');
      }
    });
    content = content.concat('<div>' +
    '<button id="closeButton">Cancel</button>');
    classInfoModal.innerHTML = content;
  }
  document.getElementById('closeButton').addEventListener('click', closeClassInfo);
  classInfoModal.style.display = 'block';
  backDrop2.style.display = 'block';
}
function closeClassInfo(){
  classInfoModal.style.display = 'none';
  backDrop2.style.display = 'none';
}
// This function saves a class when the saveButton is clicked.
function saveClass(){
  if(newClassName.value){
    newClassName.classList.remove('error'); // what the hell does this do? I know, if there was an error befor it removes it
    let classes = localStorage.getItem('classes') != null 
    ? JSON.parse(localStorage.getItem('classes')) 
    : [];
    let newClass = { 
      name: newClassName.value,
      code: newClassCode.value,
      credits: newClassCredits.value,
      sunday: sunday.checked,
      monday: monday.checked,
      tuesday: tuesday.checked,
      wednesday: wednesday.checked,
      thursday: thursday.checked,
      friday: friday.checked,
      saturday: saturday.checked,
      start: start.value,
      end: end.value
    };
    displayClass(newClass);
    classes.push(newClass);
    localStorage.setItem("classes", JSON.stringify(classes));
    closeModalManager();
  }
}
// displays a class in the task manager
function displayClass(newClass){
  const classSquare = document.createElement('div');
  classSquare.classList.add('class');
  let days = "";
  if(newClass.sunday){
    days = days.concat("Sun - ");
  }
  if(newClass.monday){
    days = days.concat("Mon - ");
  }
  if(newClass.tuesday){
    days = days.concat("Tues - ");
  }
  if(newClass.wednesday){
    days = days.concat("Wed - ");
  }
  if(newClass.thursday){
    days = days.concat("Thurs - ");
  }
  if(newClass.friday){
    days = days.concat("Fri - ");
  }
  if(newClass.saturday){
    days = days.concat("Sat - ");
  }
  if(days.length != 0){
    days = days.substring(0, days.length - 2);
  }
  classSquare.innerHTML = newClass.name + "<br>" + days + '<br>' + newClass.start;
  classSquare.addEventListener('click', () => openClassInfo(newClass, days));
  taskManager.appendChild(classSquare);
}

// This function initiates all buttons in the html document to its corresponding function.
function initButtonsManager(){
  document.addEventListener("DOMContentLoaded", loadTaskManager);
  document.getElementById('addClass').addEventListener('click', openModalManager);
  document.getElementById('saveClass').addEventListener('click', saveClass);
  document.getElementById('cancelClass').addEventListener('click', closeModalManager);

}

initButtonsManager();