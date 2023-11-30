import React, { useState, useEffect, useRef } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import TimePicker from "react-time-picker";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import Navbar from "../../Navbar Items/Navbar";
import { saveUserData } from "../../../Api/saveUser";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, update, get } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../Redux/Actions/user_action";
import { useNavigate } from "react-router-dom";


const Calendar = (props) => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const dispatch = useDispatch();
  const calendarRef = useRef(null);
  const navigate = useNavigate();

  const [allEvents, setAllEvents] = useState([]);
  const [events, setEvents] = useState({
    events: [],
  });

  const setUserDataInCalendar = (userData) => {
    dispatch(setUser(userData));
  };

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();

    const fetchData = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userRef = ref(db, `/users/${user.uid}`);
          console.log(user.uid);
          const snapshot = await get(userRef);
          console.log("Firebase Snapshot:", snapshot.val()); // Log the snapshot

          let userData;
          userData = snapshot.val();
          console.log("Fetched info from Firebase:", userData);

          // Dispatch the setUser action with the fetched user data
          dispatch(setUser(userData));
          console.log("Fetched info from Firebase:", userData);

          // Set allEvents state with the events from the database
          setAllEvents(userData.events || []);

          const currentEvents = userData.events;
          handleEvents(currentEvents);
        }
      });

      return () => unsubscribe(); // Cleanup the subscription when component unmounts
    };

    fetchData();
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateClick = () => {
    // You can handle day cell click if needed
  };

  const handleDateSelect = async (selectInfo) => {
    const title = prompt("Please enter a new title for your event");

    // Check if title is not null
    if (title !== null) {
      const newEvent = {
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      // Update the allEvents state with the new event
      setAllEvents((prevEvents) => [...prevEvents, newEvent]);

      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        // Fetch current user data from the database
        const db = getDatabase();
        const userRef = ref(db, `/users/${user.uid}`);
        const snapshot = await get(userRef);
        const userData = snapshot.val();

        // Update the events array in the fetched user data
        const updatedEvents = userData.events
          ? [...userData.events, newEvent]
          : [newEvent];

        // Save the updated user data to the database
        await saveUserData({ events: updatedEvents }, user.uid);

        // Update the local state (if needed)
        setEvents((prevState) => ({ events: [...prevState.events, newEvent] }));

        // Update the calendar with the new events
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // clear date selection
        calendarApi.addEvent(newEvent);

        // If you want to see the updated INITIAL_EVENTS array, you can log it
        console.log("Updated INITIAL_EVENTS:", events.events);
        console.log("All events: ", userData.events);
        const currentEvents = userData.events;

        handleEvents(currentEvents);
      }
    } else {
      alert("Title is required. Event not added.");
    }
  };

  const handleEventClick = (clickInfo) => {
    const userConfirmed = window.confirm(
      `Are you sure you want to delete the event '${clickInfo.event.title}'`
    );

    if (userConfirmed) {
      // Remove the event from the allEvents state
      setAllEvents((prevEvents) =>
        prevEvents.filter((event) => event.id !== clickInfo.event.id)
      );

      clickInfo.event.remove();
    }
  };

  const handleEvents = (currentEvents) => {
    // Ensure that currentEvents is an array
    const eventsArray = Array.isArray(currentEvents) ? currentEvents : [];

    setCurrentEvents(eventsArray);
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }

  const renderSidebarEvent = (event) => (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </b>
      <br />
      <b>Meeting Title:</b> <i>{event.title}</i>
      {/* <i> {event.extendedProps.time}</i> */}
    </li>
  );

  const handleSaveAndPopulate = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Save the allEvents array to the user's database
      await saveUserData({ events: allEvents }, user.uid);

      // Update the events in the local state (if needed)
      setEvents((prevState) => ({ events: [...prevState.events, ...allEvents] }));

      window.location.reload();
      
    }
  };

  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          fontFamily: "Arial, Helvetica Neue, Helvetica, sans-serif",
          fontSize: "14px",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            padding: "2em",
            display: "flex",
            marginLeft: "300px",
          }}
        >
          <div style={{ width: "900px", margin: "0 auto" }}>
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
              headerToolbar={{
                left: "prev next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={weekendsVisible}
              initialEvents={events}
              select={handleDateSelect}
              eventContent={renderEventContent}
              eventClick={handleEventClick}
              eventsSet={handleEvents}
              dateClick={handleDateClick}
            />
          </div>

          <div
            style={{
              flexShrink: 0,
              padding: "1em",
              backgroundColor: "#F9F5DD",
              marginLeft: "20px",
              width: "300px",
            }}
          >
            <h2>Instructions</h2>
            <ul>
              <li>
                Select dates and you will be prompted to create a new event
              </li>
              <li>Drag, drop, and resize events</li>
              <li>Click an event to delete it</li>
              <li>
                Use the <b>'week'</b> and <b>'day'</b> options to make time
                specific appointments
              </li>
            </ul>

            <div className="demo-app-sidebar-section">
              <h2>All Events ({currentEvents.length})</h2>
              <ul>{currentEvents.map(renderSidebarEvent)}</ul>
            </div>

            <div
              className="demo-app-sidebar-section"
              style={{ fontSize: "20px" }}
            >
              <label>
                <input
                  type="checkbox"
                  checked={weekendsVisible}
                  onChange={handleWeekendsToggle}
                  style={{ paddingLeft: "30px" }}
                />
                Toggle weekends
              </label>
              <button onClick={handleSaveAndPopulate} >Save and Populate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
