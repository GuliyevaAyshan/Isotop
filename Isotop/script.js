$("button").click(function () {
    $("button").removeClass("active");
    $(this).addClass("active");
    let dataFilter = $(this).data("filter");
    if (dataFilter == "all") {
      $(".myelements tr").show(500);
    } else {
      $(".myelements tr").hide(500);
      $("." + dataFilter).show(500);
    }
  });
  