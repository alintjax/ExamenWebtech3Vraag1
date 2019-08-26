import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ExamenService} from "../service/examen.service";

@Component({
  selector: 'app-examen-search',
  templateUrl: './examen-search.component.html',
  styleUrls: ['./examen-search.component.css']
})
export class ExamenSearchComponent implements OnInit {
  search: FormGroup;
  examen: string;
  constructor(private examenService: ExamenService) { }

  ngOnInit(): void {
    this.search = new FormGroup({opnameplaatsStraat: new FormControl('')})
  }
  onsubmit(): void {
    this.examen = this.examenService.searchExamen(this.search.value.opnameplaatsStraat);
  }
}
