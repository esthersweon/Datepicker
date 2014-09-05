(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var Day = datePicker.Day = function(str){
		this.label = str;
		this.render();
	};

	Day.prototype.render = function(){
		var $day = $(document.createElement('div'));
		$day.append("hi");
		return $day;
	};

})(this);