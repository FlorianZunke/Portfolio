import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private overlayVisible = new BehaviorSubject<boolean>(false);
  overlayVisible$ = this.overlayVisible.asObservable();

  openOverlay() {
    this.overlayVisible.next(true);
  }

  closeOverlay() {
    this.overlayVisible.next(false);
  }
}