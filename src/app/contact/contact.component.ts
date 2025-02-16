import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FooterComponent } from "../shared/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FooterComponent, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private translate: TranslateService) {}

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  mailTest = true;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }


  getNamePlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return  "What's your name?";
    } else {
      return 'You forgot your name!'
    }
  }

  getEmailPlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return 'yourmail@mail.com';
    } else {
      return 'I need your email to answer you!'
    }
  }

  getTextboxPlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return 'Hey Flori, I am intrested at ...';
    } else {
      return 'What do you want to know?'
    }
  }

}
