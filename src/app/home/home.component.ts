import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcRenderer, IpcRendererEvent } from 'electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  private ipc: IpcRenderer;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
  }

  openWindow() {
    this.ipc.send("openWindow")
  }

}
