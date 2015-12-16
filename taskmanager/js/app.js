/*  <li>
    <h1>Task 1</h1>
    <button>delete</button>
    <button>complete</button>
  </li>
  <li class="done">
    <h1>Task 2</h1>
    <button>delete</button>
    <button>complete</button>
  </li>*/

  document.addEventListener("DOMContentLoaded", function(){
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
    var taskInput = document.getElementById("taskInput");
    var deleteCompleted = document.getElementById("removedFinishedTaskButton");

    addTaskButton.addEventListener("click", function(event){
      var taskText = taskInput.value;
      if(taskText.length < 4){
        return;
      }
      taskInput.value = ""; // input będzie pusty po wpisaniu, znika to co było wpisane

      var newHeader = document.createElement("H1");
      var newCompleteButton = document.createElement("BUTTON");
      var newDeleteButton = document.createElement("BUTTON");
      var newLi = document.createElement("LI");

      newLi.appendChild(newHeader);
      newLi.appendChild(newCompleteButton);
      newLi.appendChild(newDeleteButton);

      newHeader.innerHTML = taskText;
      newCompleteButton.innerHTML = "Complete";
      newDeleteButton.innerHTML = "Delete";

      newCompleteButton.addEventListener("click", function(event){
        this.parentNode.classList.add("done");
      });

      newDeleteButton.addEventListener("click", function(event){
        taskList.removeChild(this.parentNode);
      });

      taskList.appendChild(newLi);
    });

    deleteCompleted.addEventListener("click", function(event){
        var completedTask = document.querySelectorAll(".done");
        for(var i = 0; i<completedTask.length; i++){
          taskList.removeChild(completedTask[i]);
        };

        //taskList.removeChild(newLi.parentNode);
    });
 });
