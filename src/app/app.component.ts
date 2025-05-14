import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FolderStructureComponent } from './folder-structure/folder-structure.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FolderStructureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'folder-structure';
}
