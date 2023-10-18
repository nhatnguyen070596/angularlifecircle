import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { SharedService } from '../common/shareService';
import { EmitService } from '../common/EmitService';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements AfterContentChecked {
  comp1Val: string;
  comp2Val: string;
  messageEvent1 : string ="";
  constructor(private sharedService: SharedService,private EmitService : EmitService) {
    this.sharedService.comp2Val = "Component 2 initial value";
    this.getEvent1();
  }
  ngAfterContentChecked() {
    this.comp1Val = this.sharedService.comp1Val;
    this.comp2Val = this.sharedService.comp2Val;
  }
  addValue(str) {
    this.sharedService.updateComp2Val(str);
  }

  getEvent1()
  {
    this.messageEvent1 = "";
    this.EmitService.subEvent1 =  this.EmitService.event1.subscribe((data: any) => {
      if(data)
      {
        this.messageEvent1 = data.event;
      }
      
    });
  }
  ngOnDestroy()
  {
    
  }

}
