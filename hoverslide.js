(function($) {
	$.fn.hoverSlide = function(widthOffset) {
		if (isNaN(widthOffset)) {
			widthOffset = 400;
		}
		var $d = $('<div style="width:100%;position:relative;">');
		this.after($d);

		this.clone(false).css({
			width : "100%",
			overflow : "hidden",
			visibility : "hidden"
		}).appendTo($d);

		this.appendTo($d);

		this.css({
			position : "absolute",
			overflow : "hidden",
			width : "100%",
			top : -this.css("padding-top").replace("px","") - this.css("margin-top").replace("px",""),
			left : -this.css("padding-left").replace("px","") - this.css("margin-left").replace("px","")
		});

		var anim = null;
		return this.hover(
			function() {
				var $t = $(this), $p = $t.parent();
				$t.width($p.width());
				$t.height($p.height());
				if (anim) {
					anim.stop();
				}
				anim = $t.animate({width: $p.width()+widthOffset},400);
			},
			function() {
				var $t = $(this), $p = $t.parent();
				if (anim) {
					anim.stop();
				}
				anim = $t.animate({width: $p.width()},400);
			}
		);
	}
}(jQuery));
