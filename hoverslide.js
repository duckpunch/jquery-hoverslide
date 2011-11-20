(function($) {
	$.fn.hoverSlide = function(widthOffset) {
		if (!this) {
			return;
		}
		if (isNaN(widthOffset)) {
			widthOffset = 400;
		}
		this.each(function() {
			var $d = $('<div style="width:100%;position:relative;">');
			var $t = $(this);
			$t.after($d);

			$t.clone(false).css({
				width : "100%",
				overflow : "hidden",
				visibility : "hidden"
			}).appendTo($d);

			$t.appendTo($d);

			$t.css({
				position : "absolute",
				overflow : "hidden",
				width : "100%",
				top : -$t.css("padding-top").replace("px","") - $t.css("margin-top").replace("px",""),
				left : -$t.css("padding-left").replace("px","") - $t.css("margin-left").replace("px","")
			});
			var anim = null;
			$t.hover(
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
		});
		return this;
	}
}(jQuery));
