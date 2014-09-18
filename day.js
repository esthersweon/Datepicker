(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var Day = datePicker.Day = function($el, label){
		this.$el = $el;
		this.label = label;

		this.render();
		this.clickListener();
	};

	Day.prototype.render = function(){
		var $day = $(document.createElement('div'));

		$day.attr("class", "day");
		$day.attr("id", this.label);
		$($day[0]).html(this.label);
		$(this.$el).append($day[0]);

	};

	Day.prototype.clickListener = function(){
		$(this.$el).on("click", function(){
			alert("hi");
		})(this);
	}

})(this);