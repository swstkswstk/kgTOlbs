(function () {
  document.addEventListener('DOMContentLoaded', function () {
    let btn = document.getElementById("calculate");
    let lblResult = document.getElementById("lblResult");
    function calculate() {
      let weight = document.getElementById("weight").value;
      if (weight == "") {
        lblResult.innerHTML = `Enter Some value for conversion`;
      }
      else if(weight<0){
        lblResult.innerHTML = `Enter a sane value for conversion`;


      }
      else {
        let convert = weight * 2.20462;
        lblResult.innerHTML = `Converted Weight is :${convert}lbs`;
      }

    }
    btn.addEventListener('click', calculate);
  })

})();
