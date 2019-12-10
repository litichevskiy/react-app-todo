import {
  SHOW_COMPLETED_TODO,
  SHOW_LOW_PRIORITY_TODO,
  SHOW_MIDDLE_PRIORITY_TODO,
  SHOW_HIGH_PRIORITY_TODO } from './constants';

export const filters = [
  {title: 'done', filter: SHOW_COMPLETED_TODO},
  {title: 'low', filter: SHOW_LOW_PRIORITY_TODO},
  {title: 'middle', filter: SHOW_MIDDLE_PRIORITY_TODO},
  {title: 'high', filter: SHOW_HIGH_PRIORITY_TODO}
];

export const priorities = ['low', 'middle', 'high'];
export const DEFAULT_PRIORITY = 'low';
export const DEFAULT_ICON_WIDTH = '20px';
export const DEFAULT_ICON_HEIGHT = '20px';
export const DEFAULT_ICON_FILL = '#808080';
export const DEFAULT_STROKE_WIDTH = '2';
export const DEFAULT_TRANSITION_TIMEOUT = 200; //ms
