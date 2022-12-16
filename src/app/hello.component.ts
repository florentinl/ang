import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
  imports: []
})
export class HelloComponent  {
  @Input() name: string = 'world';
}
