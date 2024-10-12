import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
})

export class AppComponent {
  @ViewChild('pageContainer', { static: true }) pageContainer!: ElementRef;

  changeBackgroundColor(color: string) {
    this.pageContainer.nativeElement.style.backgroundColor = color;
  }
}
