import { Component, OnInit } from '@angular/core';
import {ExamenService} from "../service/examen.service";

@Component({
  selector: 'app-examen-list',
  templateUrl: './examen-list.component.html',
  styleUrls: ['./examen-list.component.css']
})
export class ExamenListComponent implements OnInit {
  examen: string[];
  constructor(private examenService: ExamenService) { }

  ngOnInit() {
    this.examenService.getJSON().subscribe(data => {
      console.log(data);
    });
    this.examen = this.examenService.listExamen();
  }

}
