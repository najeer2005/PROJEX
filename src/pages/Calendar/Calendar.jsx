import "./Calendar.css";
import { useState } from "react";
import FormModal from "../../components/FormModal";

import {
  HiMagnifyingGlass,
  HiPlus,
  HiCalendarDays,
  HiClock,
  HiFlag,
  HiBriefcase,
} from "react-icons/hi2";

function Calendar() {
  const [showForm, setShowForm] = useState(false);
  const [eventData, setEventData] = useState({ title: "", date: "", time: "", type: "Meeting" });

  /* =========================
      CALENDAR STATISTICS
  ========================= */

  const calendarStats = {

    totalEvents: 18,

    meetings: 7,

    deadlines: 6,

    holidays: 5,

  };

  /* =========================
      TODAY'S EVENTS
  ========================= */

  const [todayEvents, setTodayEvents] = useState([

    {
      id: 1,
      title: "Sprint Planning",
      time: "10:00 AM",
      type: "Meeting",
    },

    {
      id: 2,
      title: "Client Discussion",
      time: "2:00 PM",
      type: "Meeting",
    },

    {
      id: 3,
      title: "CRM Deadline",
      time: "5:00 PM",
      type: "Deadline",
    },

  ]);

  const handleChange = (event) => setEventData((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodayEvents((previous) => [...previous, { id: Date.now(), ...eventData }]);
    setEventData({ title: "", date: "", time: "", type: "Meeting" });
    setShowForm(false);
  };

  /* =========================
      CALENDAR DAYS
  ========================= */

  const calendarDays = [

    "", "", "1", "2", "3", "4", "5",

    "6", "7", "8", "9", "10", "11", "12",

    "13", "14", "15", "16", "17", "18", "19",

    "20", "21", "22", "23", "24", "25", "26",

    "27", "28", "29", "30", "31"

  ];
    return (

    <div className="page-content">

      {/* =========================
          PAGE HEADER
      ========================= */}

      <div className="page-header">

        <div>

          <h2>Calendar</h2>

          <p>Manage project schedules, meetings and deadlines.</p>

        </div>

        <button className="primary-btn" onClick={() => setShowForm(true)}>

          <HiPlus />

          Add Event

        </button>

      </div>

      {showForm && (
        <FormModal title="Add Event" onClose={() => setShowForm(false)} onSubmit={handleSubmit} submitLabel="Save Event">
          <div className="form-field full-width"><label htmlFor="event-title">Event Title</label><input id="event-title" name="title" value={eventData.title} onChange={handleChange} required /></div>
          <div className="form-field"><label htmlFor="event-date">Date</label><input id="event-date" type="date" name="date" value={eventData.date} onChange={handleChange} required /></div>
          <div className="form-field"><label htmlFor="event-time">Time</label><input id="event-time" type="time" name="time" value={eventData.time} onChange={handleChange} required /></div>
          <div className="form-field full-width"><label htmlFor="event-type">Event Type</label><select id="event-type" name="type" value={eventData.type} onChange={handleChange}><option>Meeting</option><option>Deadline</option><option>Holiday</option></select></div>
        </FormModal>
      )}

      {/* =========================
          CALENDAR STATISTICS
      ========================= */}

      <section className="calendar-stats">

        <div className="calendar-stat-card">

          <HiCalendarDays />

          <div>

            <h3>{calendarStats.totalEvents}</h3>

            <span>Total Events</span>

          </div>

        </div>

        <div className="calendar-stat-card">

          <HiClock />

          <div>

            <h3>{calendarStats.meetings}</h3>

            <span>Meetings</span>

          </div>

        </div>

        <div className="calendar-stat-card">

          <HiFlag />

          <div>

            <h3>{calendarStats.deadlines}</h3>

            <span>Deadlines</span>

          </div>

        </div>

        <div className="calendar-stat-card">

          <HiBriefcase />

          <div>

            <h3>{calendarStats.holidays}</h3>

            <span>Holidays</span>

          </div>

        </div>

      </section>

      {/* =========================
          SEARCH & FILTERS
      ========================= */}

      <div className="toolbar">

        <div className="search-box">

          <HiMagnifyingGlass />

          <input
            type="text"
            placeholder="Search event..."
          />

        </div>

        <div className="filters">

          <select>

            <option>All Events</option>

            <option>Meetings</option>

            <option>Deadlines</option>

            <option>Holidays</option>

          </select>

        </div>

      </div>

      {/* =========================
          CALENDAR GRID
      ========================= */}

      <div className="calendar-card">

        <div className="calendar-title">

          <h3>July 2026</h3>

        </div>

        <div className="calendar-weekdays">

          <span>Sun</span>

          <span>Mon</span>

          <span>Tue</span>

          <span>Wed</span>

          <span>Thu</span>

          <span>Fri</span>

          <span>Sat</span>

        </div>

        <div className="calendar-grid">

          {calendarDays.map((day, index) => (

            <div
              key={index}
              className={`calendar-day ${day === "15" ? "today" : ""}`}
            >

              {day}

            </div>

          ))}

        </div>

      </div>

      {/* =========================
          TODAY'S EVENTS
      ========================= */}

      <div className="events-card">

        <div className="card-header">

          <h3>Today's Events</h3>

        </div>

        <div className="events-list">
                      {todayEvents.map((event) => (

            <div className="event-item" key={event.id}>

              <div className="event-icon">

                <HiCalendarDays />

              </div>

              <div className="event-details">

                <strong>{event.title}</strong>

                <span>{event.type}</span>

              </div>

              <div className="event-time">

                {event.time}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

export default Calendar;