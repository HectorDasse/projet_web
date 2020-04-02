import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Date: string;
  ID: number;
  Priorite: string;
  Service: string;
  Commentaire: string;
  motif: string;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['ID', 'Date', 'Service', 'Priorité', 'Commentaire', 'motif'];
  dataSource: PeriodicElement[] = [
    {ID: 1, Date: '01/01/2020', Service: 'Tinky-Winky', Priorite: '1', Commentaire: '', motif: 'Hébergement'},
    {ID: 2, Date: '02/01/2020', Service: 'Dipsy', Priorite: '2', Commentaire: '', motif: 'Hébergement'},
    {ID: 3, Date: '03/01/2020', Service: 'Laa Laa ', Priorite: '3', Commentaire: '', motif: 'Cloud'},
    {ID: 4, Date: '04/01/2020', Service: 'Po', Priorite: '4', Commentaire: '', motif: 'Cloud'},
    {ID: 5, Date: '05/01/2020', Service: 'oui oui', Priorite: '5', Commentaire: '', motif: 'Hébergement'},
    {ID: 6, Date: '06/01/2020', Service: 'franklin', Priorite: '6', Commentaire: '', motif: 'Serveurs'},
    {ID: 7, Date: '07/01/2020', Service: 'buzz l\'éclair', Priorite: '7', Commentaire: '', motif: 'Serveurs'},
    {ID: 8, Date: '08/01/2020', Service: 'Pokemon', Priorite: '8', Commentaire: '', motif: 'Serveurs'},
    {ID: 9, Date: '09/01/2020', Service: 'goldorak', Priorite: '9', Commentaire: '', motif: 'Cloud'},
    {ID: 10, Date: '10/01/2020', Service: 'naruto', Priorite: '10', Commentaire: '', motif: 'Hébergement'},
  ];

}
