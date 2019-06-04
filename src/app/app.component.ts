import { Component } from '@angular/core';
import { slideInLeftAnimation, slideOutLeftAnimation } from './animation';
import { trigger, transition, style, useAnimation } from '@angular/animations';
enum Delays {
  Fast = '0ms',
  Second = '200ms',
  Third =  '400ms',
  Fourth = '300ms',
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  animations: [
     trigger('delete', [
      transition(':enter', [
       useAnimation(slideInLeftAnimation, {
         params: {  delay: Delays.Third }
       })
      ]),
      transition(':leave', [
        useAnimation(slideOutLeftAnimation, {
          params: {  delay: Delays.Fast }
        })
      ])
    ]),
    /** 取消ボタン */
    trigger('cancel', [
      transition(':enter', [
       useAnimation(slideInLeftAnimation, {
         params: {  delay: Delays.Second }
       })
      ]),
      transition(':leave', [
        useAnimation(slideOutLeftAnimation, {
          params: {  delay: Delays.Second }
        })
      ])
    ]),
    /** 編集ボタン */
    trigger('edit', [
      transition(':enter', [
       useAnimation(slideInLeftAnimation, {
         params: {  delay: Delays.Third }
       })
      ]),
      transition(':leave', [
        useAnimation(slideOutLeftAnimation, {
          params: {  delay: Delays.Fast }
        })
      ])
    ]),
    /** マイリストボタン */
    trigger('myList', [
      transition(':enter', [
        useAnimation(slideInLeftAnimation, {
          params: { delay: Delays.Fourth }
        })
      ]),
      transition(':leave', [
        useAnimation(slideOutLeftAnimation, {
          params: { delay: Delays.Fast }
        })
      ])
    ])
  ]
})
export class AppComponent  {
  name = 'Angular';
}
