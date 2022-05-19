
// HERE I AM ADDING AND REMOVING CLASSES DYNAMICALLY USING JQUERY

// THIS IS FOR THE SIGNUP SECTION WHICH WILL BE AT THE BACK IN THE START
$(".back").click(function(){
	$(".logIn").removeClass("activeClass1");
	$(".signUp").addClass("activeClass2");
	$(".logIn").addClass("activeClass3");
	$(".signUp").removeClass("activeClass4");
});
// THIS IS FIOR THE LOGIN SECTION
$(".log-in").click(function(){
	$(".logIn").addClass("activeClass1");
	$(".signUp").removeClass("activeClass2");
	$(".logIn").removeClass("activeClass3");
	$(".signUp").addClass("activeClass4");
});