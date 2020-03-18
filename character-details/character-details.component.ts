import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {SwitchingOcsService} from '../switching-ocs.service';
import {oc} from '../oc';
import { Observable, } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  public Oc:oc =new oc;
  public character;
  public test: Observable<oc[]>;
  public sub;
  
 

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private _ocService:SwitchingOcsService) { }

  ngOnInit() {
//     this.activatedRoute.paramMap.subscribe(params=>{
//       let id = +params.get('id')
//       this._ocService.getOc(id).subscribe((oc)=> this.character = oc);
    
//  })

 this.activatedRoute.paramMap.subscribe(params => {
  let id = +params.get('id');
  if (id) {
    console.log(this.character)
    this._ocService.getOc(id).subscribe((character) => this.character = character);
    console.log(this.character);
  }
});

// this.activatedRoute.paramMap.subscribe(params => {
//   let id = +params.get('id');
//   if (id) {
//     this._ocService.getOcs().subscribe((Oc) => this.Oc = Oc);
//   }
// });
// this._ocService.getOcs().subscribe(data => this.Oc = data);

  //  this.activatedRoute.paramMap.subscribe(params => {
      
  //     this.character = params.get('id');
  //   });

// this.getCharacters(); 

    }
    // getCharacters(): void {
    //   this._ocService.getOcs()
    //       .subscribe(
    //           users => {
    //             let ocID = +users.
                
    //               console.log('this.users=' + this.character);
    //               console.log('this.users.length=' + this.character.length);
    //               console.log('this.users.name=' + this.character[0].name);

    //           }, //Bind to view
    //                       err => {
    //                   // Log errors if any
    //                   console.log(err);
    //               })
                
    //             }
    //             getCharacter(item:string){
                  
    //             }

}
