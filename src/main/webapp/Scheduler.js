var p = MindFusion.Scheduling;

//create a new calendar
var calendar = new p.Calendar(document.getElementById("calendar"));

calendar.theme = "business";

calendar.selectionEnd.addEventListener(handleSelection);
calendar.headerClick.addEventListener(handleHeaderClick);

//show calendar
calendar.render();

function handleHeaderClick(sender, args)
{
	if(sender.currentView === p.CalendarView.Timetable)
	{
		sender.date = sender.timetableSettings.dates.items()[0];
		sender.currentView = p.CalendarView.SingleMonth;
	}
}

function handleSelection(sender, args)
{
	if(sender.currentView === p.CalendarView.SingleMonth)
	{
		args.cancel = true;
		
		var start = args.startTime;
		var end = args.endTime;
		
		//clear all dates
		sender.timetableSettings.dates.clear();
		
		while(start < end)
		{
			sender.timetableSettings.dates.add(start);
			start = p.DateTime.addDays(start, 1);
			
		}
		
		sender.currentView = p.CalendarView.Timetable;
	}
}

