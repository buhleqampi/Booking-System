import { Component, OnInit, ViewChild } from '@angular/core';
import { BookingService } from '../../services/booking/booking.service';
import { Booking } from '../../interfaces/booking';  
import { FormBuilder, FormGroup } from '@angular/forms';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarOptions, EventApi, EventClickArg, EventInput } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  @ViewChild('fullcalendar') calendarComponent!: FullCalendarComponent; 
  
  eventForm!: FormGroup
  color:string='red'
  date!: string
  selectedEvent: any
  all!: EventInput[]
  allEvents!:any
  events = [
    {
      id: "1", title: "hair wash and blow out", date:'2024-10-04' ,color: 'yellow',borderColor: 'blue', textColor: 'black', time: "02:03", duration: '60', end: '',
       customer: 'Vuyo Dila', service: "Quick Weave", contact_no: '123-3456-345', status: 'pending', 
    },
    {
      id: "2", title: "Quick Weave", date:'2024-10-04' ,color: 'orange',borderColor: 'green', textColor: 'black', time: "04:03", duration: '30', end: "",
     customer: 'Vuyo Dila', service: "Hair Treatment", contact_no: '123-3456-345', status: 'pending', 
    },
    
  ]
 calendarProps = {
   color: 'yellow',
   borderColor: 'blue', 
   textColor: 'black',
 }
  
 
  
  calendarOptions : CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    aspectRatio: 1.6,
   allDaySlot: false,
    eventBackgroundColor: this.color,
    eventClick: (arg)=> this.getEvent(arg),
    // dateClick: (arg) => this.handleDateClick(arg),
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay,dayGridMonth' 
    }
  }

  constructor(private formBuilder: FormBuilder, private bookingsService: BookingService ) {
    this.eventForm = this.formBuilder.group({
          time: [''],
          startDate: [''],
          email: [''],
          // endDate: [''],
          customer: [''],
          service: [''],
          title: [''],
          contact_no: [''],
          status: [''],
        });

  }

  ngOnInit(): void {
    // this.getBookings()
    // this.setTime()
    
  }


  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr)
    this.date = arg.dateStr

  }

  changed(event:any){
    console.log(event)
  }

  getEvent(arg: EventClickArg){
    const calendarApi = this.calendarComponent.getApi()
    const event = calendarApi.getEventById(arg.event.id)
    console.log(event)
    this.selectedEvent = event

    this.eventForm.setValue({
      time: event?.extendedProps['time'],
      startDate: event?.startStr.slice(0,10),
      // email: event?.extendedProps['email'],
      customer: event?.extendedProps['customer'],
      service: event?.extendedProps['service'],
      title: event?.title,
      contact_no: event?._def.extendedProps['contact_no'],
      status: event?.extendedProps['status'],
})
console.log(this.eventForm.value)
  
  }

  setTime() {
    const updatedEvents = this.events.map((event) => {
      const combinedDateTime = `${event.date}T${event.time}:00`;
      const endTime = combinedDateTime 
      return { ...event, start: combinedDateTime};
    });
  
    this.events = updatedEvents;
    this.all = this.events
    console.log(updatedEvents, this.all)
  }

    

  updateEventProperty(form: FormGroup, selectedEvent: any) {
    const calendarApi = this.calendarComponent.getApi(); 
    const event: EventApi | null = calendarApi.getEventById(selectedEvent.id); 

    
    if (event) {
      const sdate = `${form.get('startDate')?.value}T${form.value.time}`
      const endDate = form.get('endDate')?.value

      event.setProp('title',form.get('title')?.value)
      event.extendedProps['customer']=form.value.customer
      event.extendedProps['service'] = form.value.service
      // event.setExtendedProp('user.email', form.value.email)
      event.setExtendedProp('status', form.value.status)
      event.extendedProps['time'] = form.value.time
      event.setStart(sdate)
      event.extendedProps['contact_no'] = form.value.contact_no

      this.selectedEvent = event
      console.log('Event updated successfully!', event, this.selectedEvent);

    } else {
      alert('Event not found!');
    }
  }

  deleteEvent(selectedEvent: any){
    const calendarApi = this.calendarComponent.getApi(); 
    const event: EventApi | null = calendarApi.getEventById(selectedEvent.id); 
    event?.remove()
    console.log('Deleted Successfully!!!', event)
  }
  
    //   setBgColor(form:FormGroup, selectedEvent: EventInput){
        
    //   switch (form.value.status) {
    //     case 'Active':
    //       selectedEvent.color = "blue";
    //       break;
    //     case 'Completed':
    //       selectedEvent.color = "green";
    //       break;
    //     case 'Canceled':
    //       selectedEvent.color = "red";
    //       break;
    //     default:
    //       selectedEvent.color = "yellow";
    //   }
    //   console.log(selectedEvent.color)
    // }

    getBookings(){
      this.bookingsService.getAllBookings().subscribe({
        next:(data)=>{
          let bookings = data.bookings
          this.formatData(bookings)
          console.log(this.allEvents, "Eita")
        }
      })
    }
    
    formatData(bookings:any){
       this.allEvents=  bookings.map((booking: any)=>{
        console.log(booking._id)
          return {...booking, ...this.calendarProps, id:booking._id, title: booking.service.description }
        })
        this.all = this.allEvents
    }
}
