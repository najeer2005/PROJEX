import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormModal from "../../components/FormModal";
import { apiFetch } from "../../api/api";

function EventForm({ eventData: initialEventData, onChange: externalOnChange, onSubmit: externalOnSubmit, onClose }) {
  const navigate = useNavigate();
  const [internalEventData, setInternalEventData] = useState({
    title: "",
    date: "",
    time: "",
    type: "Meeting",
  });

  const eventData = initialEventData || internalEventData;
  const onChange = externalOnChange || ((event) => {
    const { name, value } = event.target;
    setInternalEventData((previous) => ({ ...previous, [name]: value }));
  });

  const handleSubmit = externalOnSubmit || ((event) => {
    event.preventDefault();
    alert("Event added successfully.");
    navigate("/calendar");
  });

  return (
    <div className="page-content">
      <div className="page-header">
        <div>
          <h2>Add Event</h2>
          <p>Schedule a project meeting, deadline, or milestone.</p>
        </div>
      </div>

      <FormModal title="Add Event" onClose={onClose || (() => navigate("/calendar"))} onSubmit={handleSubmit} submitLabel="Save Event">
        <div className="form-field full-width">
          <label htmlFor="event-title">Event Title</label>
          <input id="event-title" name="title" value={eventData.title} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="event-date">Date</label>
          <input id="event-date" type="date" name="date" value={eventData.date} onChange={onChange} required />
        </div>
        <div className="form-field">
          <label htmlFor="event-time">Time</label>
          <input id="event-time" type="time" name="time" value={eventData.time} onChange={onChange} required />
        </div>
        <div className="form-field full-width">
          <label htmlFor="event-type">Event Type</label>
          <select id="event-type" name="type" value={eventData.type} onChange={onChange}>
            <option>Meeting</option>
            <option>Deadline</option>
            <option>Holiday</option>
          </select>
        </div>
      </FormModal>
    </div>
  );
}

export default EventForm;
