$('#calendar').fullCalendar({
  header: {
    title:Tenants calendar
    left: 'today prev, next' 
    center: 'addEventButton',
    right: 'months'
  },
  defaultDate: ' 01-01-2019',
  editable: true,
  eventLimit: true,
  events: [{
      title: 'Tenant Registatration',
      start: '2019-01-10',
      description: 'Employees are able to register new clients'
    },

  ],
  customButtons: {
    addEventButton: {
      text: 'Add new event',
      click: function () {
        var dateStr = prompt('Enter date in DD/MM/YYYY');
        var date = moment(dateStr);

        
        
  dayClick: function (date, jsEvent, view) {
    var date = moment(date);

    