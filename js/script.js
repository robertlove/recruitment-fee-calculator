function calculatePercentage(rate, amount) {
  return Number(rate) / 100 * Number(amount);
}

$(function() {

  $("#base-amount, #super-rate, #fee-rate, input[name='fee-of'], #gst-rate").change(function() {

    var baseAmount = Number($("#base-amount").val());
    var superRate = Number($("#super-rate").val());
    var feeRate = Number($("#fee-rate").val());
    var feeOf = $("input[name='fee-of']:checked").val();
    var gstRate = Number($("#gst-rate").val());

    var superAmount = calculatePercentage(superRate, baseAmount);
    var packageAmount = baseAmount + superAmount;
    if (feeOf == "Base") {
      var feeAmount = calculatePercentage(feeRate, baseAmount);
    } else {
      var feeAmount = calculatePercentage(feeRate, packageAmount);
    }
    var gstAmount = calculatePercentage(gstRate, feeAmount);
    var totalAmount = feeAmount + gstAmount;

    $("#super-rate-label").html(superRate);
    $("#fee-rate-label").html(feeRate);
    $("#fee-of-label").html(feeOf);
    $("#gst-rate-label").html(gstRate);

    $("#super-amount").html(superAmount.toLocaleString("AUD"));
    $("#package-amount").html(packageAmount.toLocaleString("AUD"));
    $("#fee-amount").html(feeAmount.toLocaleString("AUD"));
    $("#gst-amount").html(gstAmount.toLocaleString("AUD"));

    $("#total-amount").html(totalAmount.toLocaleString("AUD"));

  });

});
