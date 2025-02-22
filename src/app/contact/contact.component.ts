import { Component, inject, computed, signal } from '@angular/core';
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

  placeholderTexts = signal({
    name: this.translate.instant('contact.placeholder.name'),
    nameError: this.translate.instant('contact.placeholder.nameError'),
    email: this.translate.instant('contact.placeholder.email'),
    emailError: this.translate.instant('contact.placeholder.emailError'),
    message: this.translate.instant('contact.placeholder.message'),
    messageError: this.translate.instant('contact.placeholder.messageError'),
  });

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.updatePlaceholders();
    });
  }

  private updatePlaceholders() {
    this.placeholderTexts.set({
      name: this.translate.instant('contact.placeholder.name'),
      nameError: this.translate.instant('contact.placeholder.nameError'),
      email: this.translate.instant('contact.placeholder.email'),
      emailError: this.translate.instant('contact.placeholder.emailError'),
      message: this.translate.instant('contact.placeholder.message'),
      messageError: this.translate.instant('contact.placeholder.messageError'),
    });
  }

  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: '',
    privacy: false,
  }

  mailTest = false;

  post = {
    endPoint: 'https://florian-zunke.de/sendMail.php',
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
          complete: () => 
            // Hier noch ein Overlay öffnen wo steht das die Nachricht angekommen ist
            console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  getNamePlaceholder(name: NgModel): string {
    return !name.valid && name.touched ? this.placeholderTexts().nameError : this.placeholderTexts().name;
  }

  getEmailPlaceholder(email: NgModel): string {
    return !email.valid && email.touched ? this.placeholderTexts().emailError : this.placeholderTexts().email;
  }

  getTextboxPlaceholder(message: NgModel): string {
    return !message.valid && message.touched ? this.placeholderTexts().messageError : this.placeholderTexts().message;
  }
}
