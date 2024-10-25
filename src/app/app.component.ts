import { Component, ElementRef, ViewChild } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent
  ],
  standalone: true
})

export class AppComponent {
  @ViewChild('pageContainer', { static: true }) pageContainer!: ElementRef;

  changeBackgroundColor(color: string) {
    this.pageContainer.nativeElement.style.backgroundColor = color;
  }
}
