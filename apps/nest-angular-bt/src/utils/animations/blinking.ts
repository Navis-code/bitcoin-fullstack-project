import { animation, style, animate, keyframes } from '@angular/animations';

/**
 * Animation params expressed as milliseconds
 * @param duration 1000
 * @param delay 0
 */
export const blinkAnimation = animation(
  animate(
    '5s',
    keyframes([
      style({ opacity: 1, offset: 0 }),
      style({ opacity: 0, offset: 0.1 }),
      style({ opacity: 1, offset: 0.2 }),
      style({ opacity: 0, offset: 0.3 }),
      style({ opacity: 1, offset: 0.4 }),
      style({ opacity: 0, offset: 0.5 }),
      style({ opacity: 1, offset: 0.6 }),
      style({ opacity: 0, offset: 0.7 }),
      style({ opacity: 1, offset: 0.8 }),
      style({ opacity: 0, offset: 0.9 }),
      style({ opacity: 1, offset: 1 }),
    ])
  )
);
