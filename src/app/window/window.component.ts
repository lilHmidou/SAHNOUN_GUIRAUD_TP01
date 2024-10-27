import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrl: './window.component.css'
})
export class WindowComponent {
  @Output() changeBackgroundColorEvent = new EventEmitter<string>();

  public changeBackgroundColor(color: string) {
    this.changeBackgroundColorEvent.emit(color);
  }

}
