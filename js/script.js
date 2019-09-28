$(document).ready(function() {
	$(".my-form").on("click", ".tab", function() {
		$(".my-form").find(".active").removeClass("active");
		$(this).addClass("active");
		$(".tab-form").eq($(this).index()).addClass("active");
		// $("#signIn").toggleClass("del");
		// $("#signUp").toggleClass("del");
	});

	$(".input").on("focus", function() {
		$(this).parent().addClass("focus");
	}).blur(function() {
		if($(this).val() === ""){
			$(this).parent().removeClass("focus");
		}
	});
});