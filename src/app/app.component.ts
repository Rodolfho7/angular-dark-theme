import { Component, OnInit } from '@angular/core';
import { StorageService } from './service/storage.service';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  themeDark: boolean = false;
  names: string[] = ['nome0', 'nome1', 'nome2'];

  constructor(
    private readonly themeService: ThemeService,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    if (this.storageService.getItem('my-theme') === 'dark') {
      this.themeDark = true;
      this.toggleMode();
    }
  }

  addNome(): void {
    this.names.push(`nome${this.names.length}`);
  }

  toggleMode(): void {
    this.themeService.toggleTheme(this.themeDark);
  }
}
