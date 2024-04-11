import FullCalendar from '@fullcalendar/react';
import styles from './calendar-ui.module.scss';
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

/* eslint-disable-next-line */
export interface CalendarUiProps {}

export function CalendarUi(props: CalendarUiProps) {
  const events = [{ title: 'Meeting', start: new Date() }];

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
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div className={styles['container']}>
      <h1>Demo App</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        events={events}
        eventContent={renderEventContent}
        
      />
    </div>
  );
}

export default CalendarUi;
