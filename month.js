(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
		days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		dayNames = ["S", "M", "T", "W", "Th", "F", "S"];

	var Month = datePicker.Month = function(){
		var date = arguments.length!=0 ? new Date(arguments[0], arguments[1]-1) : new Date(),
			dd = date.getDate(),
			mm = date.getMonth()+1,
			yyyy = date.getFullYear(), 
			dayOfWeek = date.getDay(),
			monthTitle = months[mm-1], 
			dayTitle = dayNames[dayOfWeek];

			if (arguments.length==0) {
				this.fillInput(mm, dd, yyyy);
			}

			this.renderMonthHeading(mm, monthTitle, yyyy);
			this.renderWeekHeading();
			this.findCurrentDays(mm, yyyy, monthTitle, dayTitle);

			if (mm==Number($('#dateInput').val().slice(0,2)) && yyyy==Number($('#dateInput').val().slice(6))) {
				this.highlightCurrentDay(Number($('#dateInput').val().slice(3, 5)));
			}
	};

	Month.prototype.fillInput = function(month, day, year){
		if(month<10) { month='0'+month;} 
		if(day<10) { day='0'+day;} 

		$('#dateInput').val(month + "/" + day + '/' + year);
	};

	Month.prototype.renderMonthHeading = function(month, monthTitle, year){
		$('#month').html(monthTitle);
		$('#month').attr("class", month);
		$('#year').html(year);
	};

	Month.prototype.renderWeekHeading = function(){
		var $headingDiv = $(document.createElement('div'));
		$headingDiv.attr("id", "weekHeading");

		for (var i = 0; i<dayNames.length; i++){
			$headingDiv.append(new datePicker.Day($headingDiv, dayNames[i]));
			$('#monthDisplay').html("");
			$('#monthDisplay').append($headingDiv);
		}
	};

	Month.prototype.findCurrentDays = function(month, year, monthTitle, dayTitle){
		if (monthTitle == "Feb"){
			if (year%4==0 && year%100==0 && year%400==0){
				this.findStart(month, year, dayTitle, 29);
			} else {
				this.findStart(month, year, dayTitle, days[month-1]);
			}
		} else {
			this.findStart(month, year, dayTitle, days[month-1]);
		};
	};

	Month.prototype.findStart = function(month, year, dayTitle, numOfDays) {
		var firstDayOfMonth = (new Date (year, month-1, 1)).getDay();

		for (var i = 0; i<firstDayOfMonth; i++){
			var fillerDay = new datePicker.Day($('#monthDisplay'), "");
			$('#monthDisplay').append(fillerDay);
		}
		this.createDays(dayTitle, numOfDays);
	};

	Month.prototype.createDays = function(dayTitle, numOfDays){
		for (var i = 1; i<numOfDays+1; i++){
			$('#monthDisplay').append(new datePicker.Day($('#monthDisplay'), i));
		}
	};

	Month.prototype.highlightCurrentDay = function(dd){
		var daySelector = "#" + dd;
		$(daySelector).css('background-color', 'white');
	}
})(this);