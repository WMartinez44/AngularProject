import { Component, OnInit } from '@angular/core';
import { SwitchingOcsService} from '../switching-ocs.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {


  constructor(private switcingOcs:SwitchingOcsService ) { }

  ngOnInit() {

  }

}
