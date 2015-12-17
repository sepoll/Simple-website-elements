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
    //zmienne :
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
    var taskInput = document.getElementById("taskInput");
    var deleteCompleted = document.getElementById("removedFinishedTaskButton");

    //event na zmiennej input
    addTaskButton.addEventListener("click", function(event){
      var taskText = taskInput.value; //zmienna odnosząca się do wartości wpisywanej w input
      if(taskText.length < 4){
        return;
      }
      taskInput.value = ""; // input będzie pusty po wpisaniu, znika to co było wpisane

      //zmienne wewnątrz funkcji addTaskButton tworzące button h1 i li
      var newHeader = document.createElement("H1");
      var newCompleteButton = document.createElement("BUTTON");
      var newDeleteButton = document.createElement("BUTTON");
      var newLi = document.createElement("LI");

      //do li przypisywane są stworzone elementy html
      newLi.appendChild(newHeader);
      newLi.appendChild(newCompleteButton);
      newLi.appendChild(newDeleteButton);

      newHeader.innerHTML = taskText; // h1 otrzymuje tekst inputu
      newCompleteButton.innerHTML = "Complete"; // button otrzymuje tekst
      newDeleteButton.innerHTML = "Delete"; // button otrzymuje tekst

      newCompleteButton.addEventListener("click", function(event){
        this.parentNode.classList.add("done"); //dodanie klasy po wciśnięciu przycisku
      });

      newDeleteButton.addEventListener("click", function(event){
        taskList.removeChild(this.parentNode); //usuniecie klasy po naciśnięciu przycisku
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
