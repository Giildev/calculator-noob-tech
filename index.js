var numbers = [];

document.querySelectorAll(".button").forEach(function (element) {
  element.addEventListener("click", function (event) {
    var key = event.target;
    var reg = /^\d+$/;

    document.getElementsByClassName("results")[0].textContent = key.textContent;

    var clear = key.dataset.clear ? true : false;

    var equal = key.textContent == "=" ? true : false;

    if (clear) {
      document.getElementsByClassName("results")[0].textContent = "0";
    }

    if (equal) {
      suma(numbers);
    }

    if (reg.test(key.textContent)) {
      numbers.push(parseInt(key.textContent));
    }

    function suma(...args) {
      var result = 0;
      args.forEach((num) => {
        num.forEach((res) => {
          result = result + res;
        });
      });
      console.log(result);
      document.getElementsByClassName("results")[0].textContent = result;
      numbers = [];
    }
  });
});
