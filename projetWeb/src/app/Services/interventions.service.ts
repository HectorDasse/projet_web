import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Intervention} from '../models/intervention.model';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  private dataSource: Intervention[] = [
    {
      serviceConcerne: 'pas de service',
      Date: '01/01/2020',
      serviceCreation: 'Tinky-Winky',
      priorite: '1',
      commentaire: '',
      motif: 'Hébergement'
    },
    {serviceConcerne: 'pas de service', Date: '02/01/2020', serviceCreation: 'Dipsy', priorite: '2', commentaire: '', motif: 'Hébergement'},
    {serviceConcerne: 'pas de service', Date: '03/01/2020', serviceCreation: 'Laa Laa ', priorite: '3', commentaire: '', motif: 'Cloud'},
    {serviceConcerne: 'pas de service', Date: '04/01/2020', serviceCreation: 'Po', priorite: '4', commentaire: '', motif: 'Cloud'},
    {
      serviceConcerne: 'pas de service',
      Date: '05/01/2020',
      serviceCreation: 'oui oui',
      priorite: '5',
      commentaire: '',
      motif: 'Hébergement'
    },
    {serviceConcerne: 'pas de service', Date: '06/01/2020', serviceCreation: 'franklin', priorite: '6', commentaire: '', motif: 'Serveurs'},
    {
      serviceConcerne: 'pas de service',
      Date: '07/01/2020',
      serviceCreation: 'buzz l\'éclair',
      priorite: '7',
      commentaire: '',
      motif: 'Serveurs'
    },
    {serviceConcerne: 'pas de service', Date: '08/01/2020', serviceCreation: 'Pokemon', priorite: '8', commentaire: '', motif: 'Serveurs'},
    {serviceConcerne: 'pas de service', Date: '09/01/2020', serviceCreation: 'goldorak', priorite: '9', commentaire: '', motif: 'Cloud'},
    {
      serviceConcerne: 'pas de service',
      Date: '10/01/2020',
      serviceCreation: 'naruto',
      priorite: '10',
      commentaire: '',
      motif: 'Hébergement'
    },
  ];

  public interventions$ = new BehaviorSubject<Intervention[]>(this.dataSource);

  constructor() {
  }

  public getInterventions(): Observable<Intervention[]> {
    return this.interventions$.asObservable();
  }

  public addIntervention(formData: Intervention) {
    this.dataSource.push(formData);
    this.interventions$.next(this.dataSource);
  }
}
