import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {SwitchingOcsService} from '../switching-ocs.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  public ocs = [];

  constructor( private router:Router, private _ocService:SwitchingOcsService) { }

  ngOnInit() {
    this._ocService.getOcs().subscribe(data => this.ocs = data);
  
  }

  onSelect(oc){
    this.router.navigate(['/character',oc.id]);
  }

}
