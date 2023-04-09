import {
  query,
  style,
  transition,
  trigger,
  animate,
  state,
} from '@angular/animations';
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ opacity: 0, position: 'relative' })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.3s', style({ opacity: 0, position: 'relative' })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1, position: 'relative' })),
      ],
      { optional: true }
    ),
  ]),
]);
export const clickCopied = trigger('clickCopied', [
  state('click', style({ opacity: 0 })),
  transition('* => *', [animate('1s')]),
]);
