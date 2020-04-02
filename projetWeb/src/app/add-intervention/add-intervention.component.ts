import {Component, OnInit} from '@angular/core';
import {InterventionsService} from '../Services/interventions.service';
import {Intervention} from '../models/intervention.model';

@Component({
  selector: 'app-add-intervention',
  templateUrl: './add-intervention.component.html',
  styleUrls: ['./add-intervention.component.scss']
})
export class AddInterventionComponent implements OnInit {
  public formData: Intervention = {
    Date: Date.now().toLocaleString('fr-FR'),
    commentaire: '',
    motif: '',
    priorite: '',
    serviceConcerne: '',
    serviceCreation: ''
  };

  constructor(private interventionsService: InterventionsService) {
  }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.interventionsService.addIntervention(this.formData);
  }
}


