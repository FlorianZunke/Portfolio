import { Component, inject, computed, signal } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { FooterComponent } from "../shared/footer/footer.component";
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { OverlayService } from '../services/overlay.service';

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

  constructor(private translate: TranslateService, private overlayService: OverlayService) {
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
    if (ngForm.form.valid) { 
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm(); // Reset form nach erfolgreichem Versand
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.overlayService.showSuccessMessage();
          }
        });
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
