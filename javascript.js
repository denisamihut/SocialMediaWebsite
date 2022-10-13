
  var arrayValues = ["Post1", "Post2", "Post3", "Post4", "Post5"];
  for (let i = 0; i <= arrayValues.length - 1; i++) {
    $("#flag1").mouseover(function(){
      $(".banners").text(arrayValues[2]);
    });
  }