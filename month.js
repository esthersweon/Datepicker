(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var Month = datePicker.Month = function(el){
		this.el = el;
		this.renderHeading();
		this.renderWeeks();
		this.days = this.renderDays();
	};

	Month.prototype.renderHeading = function(){
		var days = ["S", "M", "T", "W", "Th", "F", "S"];
		var $headingDiv = $(document.createElement('div'));

		for (var i = 0; i<days.length; i++){
			$headingDiv.append(new datePicker.Day(days[i]));
			this.el.append($headingDiv);
		}
	};

	Month.prototype.renderWeeks = function(){

	};

	Month.prototype.renderDays = function(){

	};
})(this);