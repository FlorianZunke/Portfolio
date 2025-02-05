import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FooterComponent } from "../shared/footer/footer.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: '',
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
      return  'Please enter our Name';
    } else {
      return 'our name'
    }
  }

  getEmailPlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return 'Please enter a valid Email';
    } else {
      return 'YourEmail@mail.de'
    }
  }

  getTextboxPlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return 'Please enter our message';
    } else {
      return 'our message'
    }
  }

}
