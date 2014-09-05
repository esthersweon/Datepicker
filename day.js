(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var Day = datePicker.Day = function($el, str){
		this.$el = $el;
		this.label = str;
		this.render();
	};

	Day.prototype.render = function(){
		var $day = $(document.createElement('div'));
		$($day[0]).append(this.label);
		debugger;
		return $day[0];
	};

})(this);