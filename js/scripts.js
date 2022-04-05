$(document).ready(function() {
  $("#orderform").submit(function(event) {
    event.preventDefault();
    const lastNameInput = $("input#lastName").val();
    const firstNameInput = $("input#firstName").val();
    const addressInput = $("input#address").val();
    const apartmentInput = $("input#apartment").val();
    const cityInput = $("input#city").val();
    const state = $("#state").val();
    const zipCodeInput = $("input#zipCode").val();
    const product = $("input:radio[name=product]:checked").val();

    $(".lastName").text(lastNameInput);
    $(".firstName").text(firstNameInput);
    $(".address").text(addressInput);
    $(".apartment").text(apartmentInput);
    $(".city").text(cityInput);
    $(".state").text(state);
    $(".zipCode").text(zipCodeInput);
    $(".product").text(product);

    $("#receipt").show();
  });
});