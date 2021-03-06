/**
 * JavaScript to show jump links to motor-impaired users when they are focused.
 */
$(function () {
	$(".mw-jump").on("focus blur", "a", function (e) {
		// Confusingly jQuery leaves e.type as focusout for delegated blur events
		if (e.type === "blur" || e.type === "focusout") {
			$(this).closest(".mw-jump").css({ height: 0 });
		} else {
			$(this).closest(".mw-jump").css({ height: "auto" });
		}
	});
});
