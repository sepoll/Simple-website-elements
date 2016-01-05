document.addEventListener("DOMContentLoaded", function(){

    //zmienne globalne
    var table = document.getElementById("dataBase");
    var addProduct = document.getElementById("addProduct");
    var productName = document.getElementById("productName");
    var productAmmount = document.getElementById("productAmount");
    var productCost = document.getElementById("productCost");

    addProduct.addEventListener("click", function(event){
      var name = productName.value; //zmienna odnosząca się do wartości wpisywanej w input
      if(name.length < 2){
        return;
      }
      productName.value = "";

      var amm = productAmount.value; //zmienna odnosząca się do wartości wpisywanej w input
      if(amm > 10 || amm <= 0){
        return;
      }
      productAmmount.value = "";

      var cos = productCost.value;
      if(cos > 100 || cos <= 0){
        return;
      }
      productCost.value = "";

      //zmienne wewnątrz funkcji
      var newRow = document.createElement("tr");
      var newButton = document.createElement("button");
      var newProduct = document.createElement("td");
      var newAmount = document.createElement("td");
      var newCost = document.createElement("td");
      var newSumUp = document.createElement("td");

      //wprpwadzanie elementów do tablicy
      newRow.appendChild(newButton);
      newRow.appendChild(newProduct);
      newRow.appendChild(newAmount);
      newRow.appendChild(newCost);
      newRow.appendChild(newSumUp);

      //nowe elementy tablicy otrzymują wartości z inputów
      newButton.innerHTML = "usuń";
      newProduct.innerHTML = name;
      newAmount.innerHTML = amm;
      newCost.innerHTML = cos;
      newSumUp.innerHTML = amm * cos;

      newButton.addEventListener("click", function(event){
        this.parentNode.classList.add("finish");
      })

      //wartości zostają wprowadzone do ciała tabeli
      table.appendChild(newRow);

    });
 });
