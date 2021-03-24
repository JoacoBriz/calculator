document.addEventListener("DOMContentLoaded", function() {
  //Variables (Operations)
  let clearButton = document.querySelector("#cleanUp");
  let deleteButton = document.querySelector("#delete");
  let division = document.querySelector("#division");
  let multiplication = document.querySelector("#multiplication");
  let subtract = document.querySelector("#subtract");
  let plus = document.querySelector("#plus");
  let equal = document.querySelector("#equal");

  var operatorA;
  var operatorB;
  var operation;


  //Variables (Numbers)
  let zero = document.querySelector("#zero");
  let one = document.querySelector("#one");
  let two = document.querySelector("#two");
  let three = document.querySelector("#three");
  let four = document.querySelector("#four");
  let five = document.querySelector("#five");
  let six = document.querySelector("#six");
  let seven = document.querySelector("#seven");
  let eight = document.querySelector("#eight");
  let nine = document.querySelector("#nine");

  let visor = document.querySelector("#visor");

  //Events
  zero.onclick = function(e) {
    visor.innerHTML = visor.textContent + "0";
  }
  one.onclick = function(e) {
    visor.innerHTML = visor.textContent + "1";
  }
  two.onclick = function(e) {
    visor.innerHTML = visor.textContent + "2";
  }
  three.onclick = function(e) {
    visor.innerHTML = visor.textContent + "3";
  }
  four.onclick = function(e) {
    visor.innerHTML = visor.textContent + "4";
  }
  five.onclick = function(e) {
    visor.innerHTML = visor.textContent + "5";
  }
  six.onclick = function(e) {
    visor.innerHTML = visor.textContent + "6";
  }
  seven.onclick = function(e) {
    visor.innerHTML = visor.textContent + "7";
  }
  eight.onclick = function(e) {
    visor.innerHTML = visor.textContent + "8";
  }
  nine.onclick = function(e) {
    visor.innerHTML = visor.textContent + "9";
  }

  //Operation Plus
  plus.onclick = function(e) {
    operatorA = visor.textContent;
    operation = "+";
    clean();
  };
  //Operation Subtract
  subtract.onclick = function(e) {
    operatorA = visor.textContent;
    operation = "-";
    clean();
  };

  //Operation multiplication
  multiplication.onclick = function(e) {
    operatorA = visor.textContent;
    operation = "*";
    clean();
  };
  
  //Operation multiplication
  division.onclick = function(e) {
    operatorA = visor.textContent;
    operation = "/";
    clean();
  };

  //Operation Result
  equal.onclick = function(e) {
    operatorB = visor.textContent;
    resoult();
  };

  //Delete button
  deleteButton.onclick = function(e) {
    visor.textContent = visor.textContent.substring(0, visor.textContent.length - 1);
  };

  //Clean operation
  clearButton.onclick = function(e) {
    reset();
  };


  function resoult() {
    let res = 0;
    switch(operation) {
      case "+":
      res = parseFloat(operatorA) + parseFloat(operatorB);
      break;
      case "-": 
      res = parseFloat(operatorA) - parseFloat(operatorB);
      break;
      case "*": 
      res = parseFloat(operatorA) * parseFloat(operatorB);
      break;
      case "/": 
      res = parseFloat(operatorA) / parseFloat(operatorB);
      break;
    }
    reset();
    visor.textContent = res;
  };

  function clean() {
    visor.textContent = "";
  };

  function reset() {
    visor.textContent = "";
    operatorA = 0;
    operatorB = 0;
    operation = "";
  };
});