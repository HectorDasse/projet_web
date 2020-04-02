import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {InterventionsService} from '../../Services/interventions.service';
import {Intervention} from '../../models/intervention.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  displayedColumns: string[] = ['serviceConcerne', 'date', 'serviceCreation', 'priorite', 'commentaire', 'motif'];
  interventions: Intervention[] = [];

  constructor(private readonly interventionsService: InterventionsService) {
  }

  ngOnInit(): void {
    this.interventionsService.getInterventions().subscribe(interventions => {
      this.interventions = interventions;
    });
  }

}
