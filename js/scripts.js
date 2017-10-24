$(document).ready(function() {
  $("form#addnumber").submit(function(event) {
    var i = parseInt($("input#numero").val());

    if (isNaN(i)) {
      alert("please enter a number");
    };
    function factorial(n) {
      if (n === 0) {
        return 1;
      }
      return n * factorial(n - 1);
    }
    alert(factorial(i));
    event.preventDefault();
  })
});
