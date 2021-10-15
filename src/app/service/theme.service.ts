import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private htmlReference: HTMLHtmlElement;

  constructor(private readonly storageService: StorageService) {
    this.htmlReference = document.getElementsByTagName('html')[0];
  }

  toggleTheme(themeDarkChecked: boolean): void {
    this.storageService.setItem('my-theme', themeDarkChecked ? 'dark' : 'light');
    this.htmlReference.classList.toggle('dark');
  }
}
