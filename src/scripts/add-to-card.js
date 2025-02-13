function decreaseValue() {
    let input = document.getElementById("quantity");
    let value = parseInt(input.value, 10);
    if (value > 1) {
      input.value = value - 1;
    }
  }

  function increaseValue() {
    let input = document.getElementById("quantity");
    let value = parseInt(input.value, 10);
    input.value = value + 1;
  }
