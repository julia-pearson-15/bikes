

$(document).ready(function() {
  var eventModal = $(".modal-container.event");
  var closeEventButton = $(".close-button.event");
  var toggleEventsModal = function() {
    eventModal.toggle();
  };
  closeEventButton.on('click', toggleEventsModal);
  $('#calendar').fullCalendar({
    eventClick: function(calEvent) {
      // var template = Handlebars.compile($("#event-listing").html());
      // template(calEvent);
      var modal = $('.modal-content');
      var toAppend = $('<p>');
      toAppend.text(calEvent.title);
      modal.append(toAppend);
      var toAppend = $('<p>');
      toAppend.text(calEvent.start+'-'+calEvent.end);
      modal.append(toAppend);
      var toAppend = $('<p>');
      toAppend.text(calEvent.attendees+'/'+calEvent.spots);
      modal.append(toAppend);
      toggleEventsModal();
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