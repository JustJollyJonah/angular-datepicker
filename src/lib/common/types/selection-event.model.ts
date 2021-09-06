import {SingleCalendarValue} from './single-calendar-value';
import {SelectEvent} from './selection-event.enum';
import { OpUnitType } from 'dayjs';

export interface ISelectionEvent {
  date: SingleCalendarValue;
  granularity: OpUnitType;
  type: SelectEvent;
}
