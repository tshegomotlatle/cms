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

/* eslint-disable-next-line */
export interface CalendarUiProps {}

export interface CalendarEventInterface {
   title: string;
   start: Date;
}

export function CalendarUi(props: CalendarUiProps) {

  // events that an individual has
  const [events, setEvents] = useState<CalendarEventInterface[]>([{ title: 'Meeting', start: new Date() }]);

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
          setCourtCase(response.data);
          const tempEvents: CalendarEventInterface[] = []
          courtCases.forEach((courtCase: CourtCaseDto) => {
            if (courtCase.date)
            {
              tempEvents.push({
                title: courtCase.caseNumber + ' ' + courtCase.defendant + " vs " + courtCase.plaintiff,
                start: courtCase.date,
              });
            }
          });
          setEvents(tempEvents);
        });
  }, [])

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
              className={styles['caseNumberSelect']}
            >
              {courtCases.map((courtCase, index) =>{
                return <option key={index} value={courtCase.caseNumber}>{courtCase.caseNumber} - {courtCase.plaintiff} vs {courtCase.defendant}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarUi;
