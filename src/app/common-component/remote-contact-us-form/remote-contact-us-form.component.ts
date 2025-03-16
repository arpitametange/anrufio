import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-remote-contact-us-form',
   standalone: true,
      imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        
      ],
  templateUrl: './remote-contact-us-form.component.html',
  styleUrl: './remote-contact-us-form.component.css'
})
export class RemoteContactUsFormComponent {

}
