import { 
  trigger, transition, style, 
  animate, keyframes, state, query, 
  stagger, animateChild, animation
} from '@angular/animations';

// 再利用可能なAnimationとして定義する。
// 'pointer-events': 'none' はダブルクリック禁止用css
// 出現時
export const slideInLeftAnimation = animation([
  style({ opacity: 0, 'pointer-events': 'none' }),
  animate("200ms {{ delay }} ease-out",
    keyframes([
      style({ opacity: 0, transform: 'scale(0.8) translateX(64px)'}),
      style({ opacity: 1, transform: 'translateX(0)'})
    ]))
]);

// 消える時
export const slideOutLeftAnimation = animation([
  style({ opacity: 1, 'pointer-events': 'none' }),
  animate("200ms {{ delay }} ease-in",
    keyframes([
      style({ opacity: 1, transform: 'translateX(0)'}),
      style({ opacity: 0, transform: 'scale(0.8) translateX(64px)'})
    ]))
]);

