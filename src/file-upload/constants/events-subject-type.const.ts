import { SUBJECT_TYPE } from "./subject-type.const";

export const EVENTS_BY_SUBJECT_TYPE = {
  [SUBJECT_TYPE.INPUT]: ['change'],
  [SUBJECT_TYPE.DRAG_N_DROP]: [
    'dragstart',
    'drag',
    'dragenter',
    'drop',
    'dragleave',
    'dragend',
  ],
}
