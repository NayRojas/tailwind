import { Component, Output } from '@angular/core';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Output() darkMode: boolean = false;
  darkModeActivator: boolean = false;

  image: string = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  text = this.darkModeActivator ? 'Change to light mode' : 'Change to dark mode';
  changeToDarkMode():void {
    this.text === 'Change to dark mode' ? document.body.classList.add('dark') : document.body.classList.add('light');  
  }
}
