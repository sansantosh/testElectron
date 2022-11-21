import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpcRenderer, IpcRendererEvent } from 'electron';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  private ipcRenderer: IpcRenderer;

  constructor(
    private router: Router,
    private electronService: ElectronService
  ) { 
    this.ipcRenderer = this.electronService.ipcRenderer;
  }

  ngOnInit(): void {
    console.log('HomeComponent INIT');
    this.ipcRenderer.on("test", () => {
      console.log("trestertselrselrkles");
    })
  }

  openWindow() {
    console.log("hi");
    this.ipcRenderer.send("openWindow", "test")
  }

}
