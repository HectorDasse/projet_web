import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.scss']
})
export class AddInterventionComponent implements OnInit {

  public inputContent: string;
  public ServiceCo: string;
  public ServiceTech: string;

  constructor() {
  }

  ngOnInit(): void {
  }
}


