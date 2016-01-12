

$(document).ready(function() {

  $('#calendar').fullCalendar({
    eventClick: function(calEvent) {
      alert('Event: ' + calEvent.title);
    }
  });
  var source = {
    events: [
          // {
          //     title: 'Event1',
          //     start: '2016-01-04'
          // },
          // {
          //     title: 'Event2',
          //     start: '2016-01-05',
          //     end: '2016-01-07'
          // },
          // {
          //     title: 'Event3',
          //     start: '2016-01-05',
          //     end: '2016-01-10'
          // } 
      ],
    color: 'yellow',   
    textColor: 'black' 
  };
  $.ajax({
    url: '/calendar/events',
    type: 'GET',
    dataType: 'json'
  }).done(function(response){
    source.events = response;
    $('#calendar').fullCalendar('addEventSource', source);
  });

});