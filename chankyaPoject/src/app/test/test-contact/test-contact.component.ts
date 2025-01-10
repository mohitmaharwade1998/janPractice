import { Component } from '@angular/core';
import { DatatestService } from '../datatest.service';

@Component({
  selector: 'app-test-contact',
  templateUrl: './test-contact.component.html',
  styleUrls: ['./test-contact.component.scss']
})
export class TestContactComponent {
  carname: any;

  constructor(private dataService: DatatestService){}

  ngOnInit(){
    this.carname=this.dataService.car
  }

}
