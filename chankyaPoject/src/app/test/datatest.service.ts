import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root'
})
export class DatatestService {
  

  constructor(private dataService:DataService ) { }


   car= this.dataService.carName

   title=this.dataService.function()

}
