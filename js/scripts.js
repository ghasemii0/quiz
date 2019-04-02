$(function() {
  $("form#stressTest").submit(function(event){
    event.preventDefault();

    var stressInput = $("input:checkbox[name=stress]:checked").length;
    var symptomsInput = $("input:checkbox[name=symptoms]:checked").length;
    console.log(symptomsInput);
    var copeInput = $("input:checkbox[name=cope]:checked").length;
    console.log(copeInput);

    if (stressInput >= 3 && symptomsInput >= 3 && copeInput >=3) {
      $("#first-response").show();
      $(".response:not(#first-response)").hide();
    } else if (stressInput === 2 && symptomsInput === 2 && copeInput ===2) {
      $("#second-response").show();
      $(".response:not(#second-response)").hide();
    } else if (stressInput === 1 && symptomsInput === 1 && copeInput ===1)  {
      $("#third-response").show();
      $(".response:not(#third-response)").hide();
    } else {
      alert("Error");
    }
  });
});
