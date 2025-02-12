import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  isOpen:boolean = false;

  private overlayVisible = new BehaviorSubject<boolean>(false);
  overlayVisible$ = this.overlayVisible.asObservable();

  openOverlay() {
    this.isOpen = true;
    this.overlayVisible.next(true);
  }

  closeOverlay() {
    this.isOpen = false;
    this.overlayVisible.next(false);
  }
}