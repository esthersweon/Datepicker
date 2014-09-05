(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var Month = datePicker.Month = function($el){
		this.$el = $el;
		this.renderHeading();
		this.renderWeeks();
		this.days = this.renderDays();
	};

	Month.prototype.renderHeading = function(){
		var days = ["S", "M", "T", "W", "Th", "F", "S"];
		var $headingDiv = $(document.createElement('div'));
		$headingDiv.attr("id", "weekHeading");
		var $weekHeading = $('#weekHeading');

		for (var i = 0; i<days.length; i++){
			var day = days[i];
			$weekHeading.append(new datePicker.Day($weekHeading, day));
			this.$el.append($headingDiv);
		}
	};

	Month.prototype.renderWeeks = function(){

	};

	Month.prototype.renderDays = function(){

	};
})(this);