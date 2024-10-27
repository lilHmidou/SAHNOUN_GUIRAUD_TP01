import { Component, ElementRef, ViewChild } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {WindowComponent} from "./window/window.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    HeaderComponent,
    FooterComponent,
    WindowComponent,
    NgClass
  ],
  standalone: true
})

export class AppComponent {

  public colorBackground: string = '';

  changeBackgroundColor(color: string) {
    this.colorBackground = color;
  }
}
