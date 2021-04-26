// Class Modal const
const newClassModal = document.getElementById('newClassModal');
const backDrop2 = document.getElementById('modalBackDropManager');

document.getElementById('addClass').addEventListener('click', openModalManager);



function openModalManager(){ 
    newClassModal.style.display = 'block';
    backDrop2.style.display = 'block';
  }