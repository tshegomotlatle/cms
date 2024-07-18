import FullCalendar from '@fullcalendar/react';
import styles from './calendar-ui.module.scss';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from 'react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios, { AxiosResponse } from 'axios';
import { CourtCaseDto } from '../data-transfer-object/court-case/court-case.dto';
import { CourtCasesDatesDto } from '../data-transfer-object/court-case-dates/court-case-dates-dto';

/* eslint-disable-next-line */
export interface CalendarUiProps {}

export interface CalendarEventInterface {
  title: string;
  start: Date;
}

export function CalendarUi(props: CalendarUiProps) {
  // events that an individual has
  const [events, setEvents] = useState<CalendarEventInterface[]>([
    { title: 'Meeting', start: new Date() },
  ]);
  const [newEvent, setNewEvent] = useState<CourtCasesDatesDto>({
    caseNumber: '',
    title: '',
    lawyerIds: [],
  });

  //configuration for event format like '14:30'
  const eventTimeFormat: {
    hour: '2-digit' | 'numeric' | undefined;
    minute: '2-digit' | 'numeric' | undefined;
    meridiem: boolean;
  } = {
    hour: '2-digit',
    minute: '2-digit',
    meridiem: false,
  };

  // case numbers to pre-populate add calendar event select
  const [courtCases, setCourtCase] = useState<CourtCaseDto[]>([]);

  // a custom render function
  function renderEventContent(eventInfo: {
    timeText:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
    event: {
      title:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined;
    };
  }) {
    return (
      <>
        <div>
          <b>{eventInfo.timeText}&ensp;</b>
        </div>
        <div>
          <i>{eventInfo.event.title}</i>
        </div>
      </>
    );
  }

  useEffect(() => {
    axios
      .post('/court-cases/getAllCases', {
        accessToken: sessionStorage.getItem('access_token') || '',
      })
      .then((response: AxiosResponse) => {
        console.log(response);

        if (response) setCourtCase(response.data);
        const tempEvents: CalendarEventInterface[] = [];
        setEvents(tempEvents);
      });
  }, []);

  const handleTitleChange = (event: { target: { value: string } }) => {
    setNewEvent({
      ...newEvent,
      title: event.target.value,
    });
  };

  const handleDateChange = (event: { target: { value: string } }) => {
    setNewEvent({
      ...newEvent,
      date: new Date(event.target.value),
    });
  };

  const handleCaseNumberChange = (event: { target: { value: string } }) => {
    setNewEvent({
      ...newEvent,
      caseNumber: event.target.value,
    });
  };

  const handleInviteChange = (event: { target: { value: string } }) => {
    setNewEvent({
      ...newEvent,
      lawyerIds: newEvent.lawyerIds?.concat([event.target.value]),
    });
  };

  const AddEvent = () => {
    console.log(newEvent);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['calendarHeader']}>
        <div>
          <h1>Demo App</h1>
        </div>
        <div className={styles['addButton']}>
          <span
            className="material-symbols-outlined"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
          >
            add
          </span>
        </div>
      </div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          weekends={false}
          events={events}
          eventContent={renderEventContent}
          eventTimeFormat={eventTimeFormat}
          height={'92vh'}
        />
      </div>
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Backdrop with scrolling
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="form-group mt-2">
            <label htmlFor="caseNumber">Case Number</label>
            <select
              name="caseNumber"
              id="caseNumber"
              className="form-control"
              onChange={handleCaseNumberChange}
            >
              <option defaultChecked>---Select option---</option>
              {courtCases.map((courtCase, index) => {
                return (
                  <option key={index} value={courtCase.caseNumber}>
                    {courtCase.caseNumber} - {courtCase.plaintiff} vs{' '}
                    {courtCase.defendant}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group mt-2">
            <label htmlFor="plaintiff">Title</label>
            <input
              type="text"
              className="form-control"
              id="eventTitle"
              placeholder="Enter event title"
              onChange={handleTitleChange}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="lawyer">Date</label>
            <input
              id="startDate"
              className="form-control mt-2"
              type="datetime-local"
              onChange={handleDateChange}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="invites">Invite</label>
            <select
              name="invites"
              id="invites"
              className="form-control"
              onChange={handleInviteChange}
            >
              <option defaultChecked>---Select option---</option>
              <option value="test1">Test 1</option>
              <option value="test2">Test 2</option>
              <option value="test3">Test 3</option>
              {courtCases.map((courtCase, index) => {
                return (
                  <option key={index} value={courtCase.caseNumber}>
                    {courtCase.caseNumber} - {courtCase.plaintiff} vs{' '}
                    {courtCase.defendant}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles['InvitesBadgesContainer']}>
            <div>
              <span className="badge rounded-pill bg-primary">Primary</span>
            </div>
            {newEvent.lawyerIds?.map((lawyerId) => {
              return (
                <div>
                  <span className="badge rounded-pill bg-primary">
                    {lawyerId}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-outline-dark" onClick={AddEvent}>
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarUi;
