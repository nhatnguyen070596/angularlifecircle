import { Component, OnInit,AfterContentChecked } from '@angular/core';
import { SharedService } from '../common/shareService';
import { EmitService } from '../common/EmitService';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements AfterContentChecked {
  comp1Val: string;
  comp2Val: string;
  messageEvent1 : string = "";
  constructor(private sharedService: SharedService, private EmitService : EmitService) {
    this.sharedService.comp1Val = "Component 1 initial value";
   }
  ngAfterContentChecked() {
    this.comp2Val = this.sharedService.comp2Val;
  }
  addValue(str) {
    this.sharedService.updateComp1Val(str);
    this.EmitService.event1.emit({ event: str, message: "transfer data"})
    this.EmitService.subEvent1 =  this.EmitService.event1.subscribe((data: any) => {      
    });
  }
  setEvent1()
  {
    this.EmitService.event1.emit({ event: '', message: "transfer data"})
    console.log(this.sharedService);
  }
  // getEvent1(str)
  // {
  //   this.sharedService.event1.subscribe((data: any) => {
  //     console.log(data.message);
  //     this.messageEvent1 = data.message;
  //   }, (error) => {

  //   })
  // }

  ngOnDestroy () {
    this.EmitService.event1.unsubscribe();
  }

}
