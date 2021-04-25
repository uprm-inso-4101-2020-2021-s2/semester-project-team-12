<?php
  include_once 'header.php';
?>
<!--Eduk Logo Icon -->
<div class= "topleft"> <img src="EdukIcon2.png" height= "70"> </div>
  <div id= "container-signup" style="position: absolute; top: 0 ; right: 0;"> 
    <!-- Sign up and Log in buttons -->
           <?php
              if (isset($_SESSION["useruid"])) {
                echo "<a  href='profile.php'> <button> Profile Page </button></a>";
                echo "<a  href='logout.php'> <button>Logout </button> </a>";
              }
              else {
                 echo"<a href='signup.php'> <button> Sign up  </button> </a>";
                echo "<a href='login.php'> <button> Log in </button> </a>";
              }
            ?> </div>
   <!-- container de todo -->
  <div id="container-all">

    <!-- calendario -->
    <div id="container-calendar">
      <div id="quotes"></div>
      <div id="container">
        <div id="header">
          <div id="monthDisplay"></div>
          <div>
            <button id="backButton">Back</button>
            <button id="nextButton">Next</button>
          </div>
        </div>
        <button id= "addEvent"> <img src="EventIcon.png" alt="EventIconbtn" width="25" height="20"> </button>
        <div id="weekdays">
          <div>Sunday</div>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
        </div>
  
        <div id="calendar"></div>
      </div>
  
      <div id="newEventModal">
        <h2>New Event: </h2>
        <form>
          
        <input id="eventTitleInput" placeholder="Event Title" />
        <label for="event" >  Day and Time: </label>
         </form>
         <input type="datetime-local" id="eventTimeInput"
         name="eventTimeInput" value="1999-12-22T06:00"
         >
         <label class="switch"> All Day: <input type="checkbox" id="checkbox"> <!-- Makes event for all day Add by G-->
          <span class="slider round"></span> <br>
        </label>
    <br>
         <label for="reason">Type:</label><br>
            <select id="reason" name="reason">
              

                <option value="work">work</option>
                <option value="study">study</option>
                <option value="relax">relax</option>
            </select> 
              <br>
              
  
  

  <br>
      <button id="saveButton">Save</button>
      <button id="cancelButton">Cancel</button>
      </div>
  
      <div id="deleteEventModal">
        <h2>Event</h2>
        <p id= "eventDay"></p>
        <p id="eventText"></p>
        
  
        <button id="deleteButton">Delete</button>
        <button id="closeButton">Close</button>
      </div>
  
      <div id="modalBackDrop"></div>
  
      <script src="./script.js"></script>

    
    </div>
    
    <!-- Todo List -->
    <div id="container-todolist">
     
        <h1>Todo List </h1>
   
      <form>
      <input type= "text" class="todo-input">
      <div id="together">
        <button class="todo-button"  type="submit">
          <em class="fas fa-plus-square"></em>
      </button>
      <div class= "select">
          <!-- select gives a drop down menu -->
          <select name="todos" class="filter-todo"> 
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
          </select>
      </div>
      </div>
      </form>
        <!-- aqui se guardan los todo items -->
        <div class="todo-container">
          <ul class="todo-list"></ul>
        </div>
        <script src="./app.js"></script>
        <script src="./script2.js"></script>
    </div>
  
<?php
  include_once 'footer.php';
?>