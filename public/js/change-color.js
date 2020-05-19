$("document").ready(function() {
	$(".badge").on("click", function () {
		var pickcolor = $(this).data("color");
		console.log(pickcolor);
		$("#cbp-spmenu-s1").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$("#cbp-spmenu-s1").addClass("badge-" + pickcolor);
		$(".header-section").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$(".header-section").addClass("badge-" + pickcolor);
		$("button#showLeftPush").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$("button#showLeftPush").addClass("badge-" + pickcolor);
		$(".logo").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$(".logo").addClass("badge-" + pickcolor);
		$(".modal-header").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$(".modal-header").addClass("badge-" + pickcolor);
	});
	$(".reset-color").click(function() {
		$("#cbp-spmenu-s1").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$("#cbp-spmenu-s1").css("background", "linear-gradient(0deg, #318c38 0%, #3ec9d6 100%)");
		$(".header-section").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$(".header-section").css("background", "linear-gradient(0deg, #318c38 0%, #3ec9d6 100%)");
		$("button#showLeftPush").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$("button#showLeftPush").css("background", "linear-gradient(0deg, #318c38 0%, #3ec9d6 100%)");
		$(".logo").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$(".logo").css("background", "linear-gradient(0deg, #318c38 0%, #3ec9d6 100%)");
		$(".modal-header").removeClass("badge-primary badge-info badge-success badge-warning badge-danger");
		$(".modal-header").css("background", "linear-gradient(0deg, #318c38 0%, #3ec9d6 100%)");
	})
});
