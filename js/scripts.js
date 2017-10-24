$(document).ready(function() {
  $("form#addnumber").submit(function(event) {
    var i = parseInt($("input#numero").val());
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
