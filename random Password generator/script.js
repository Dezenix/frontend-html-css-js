
// JQUERY for Easy peasy
let dynamicPass = function(length)
{
  words = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOP@QRSTUVWXYZ";
  let pass = "";
  for(x=0;x<length;x++)
  {
    y = Math.floor(Math.random() * 62);
    pass += words.charAt(y);
  }
  $("#pass").text( pass );
}

$("button").on("click", function() {
  let length = $("input").val();
  if (length <= 0) {
    $("#pass").show();
    $("#pass").text("Enter a number more than 0.");
  }else{
    $("#pass").show();
    dynamicPass(length);
  }
  
});


