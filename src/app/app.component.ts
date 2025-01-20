import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  HeaderComponent  from '../app/shared/ui/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'store-tech';
}
