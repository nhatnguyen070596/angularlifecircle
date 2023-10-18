import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy,DoCheck  } from '@angular/core';
import { Customer } from '../customer.dto';
import { SharedService } from '../common/shareService';
import { EmitService } from '../common/EmitService';
import { Subscription } from 'rxjs';
 
@Component({
    selector: 'child-component',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit {
    @Input() message: string = "";
    @Input() customer: Customer;
    changelog: string[] = [];
    oldCustomer: Customer= new Customer();
    DocheckCount = 0;
    messageEvent1: string = "";
    childSubscription: Subscription;
    constructor(private sharedService: SharedService, private EmitService : EmitService) {
        this.getEvent1();
    }
    ngOnInit() {
       // console.log('ChildComponent:OnInit');
        this.oldCustomer = Object.assign({}, this.customer);
       // console.log("old",this.oldCustomer)
    }
    ngDoCheck() {
     //   console.log('Docheck');
        this.DocheckCount++;
        if (this.oldCustomer.name !== this.customer.name || this.oldCustomer.code !== this.customer.code ) {
            const to  = JSON.stringify(this.customer);
            const from = JSON.stringify(this.oldCustomer);
            const changeLog = `DoCheck customer: changed from ${from} to ${to} `;
            this.changelog.push(changeLog);
 
            this.oldCustomer = Object.assign({}, this.customer);
        }
        this.childSubscription.unsubscribe();
    }
    ResetCustomer (){
        this.changelog = [];
        this.DocheckCount = 0;
    }
    ngOnChanges(changes: SimpleChanges) {
       // console.log('ChildComponent:OnChanges');
       // console.log(JSON.stringify(changes));
 
        // tslint:disable-next-line:forin
        for (const propName in changes) {
             const change = changes[propName];
             const to  = JSON.stringify(change.currentValue) == undefined ? "" : JSON.stringify(change.currentValue);
             const from = JSON.stringify(change.previousValue) == undefined ? "" : JSON.stringify(change.previousValue);
             var changeLog = "";
             changeLog = `${propName}: changed from ${from} to ${to} `;
             if(to == from)
             {
                changeLog = `Not Change`;
             }
             this.changelog.push(changeLog);
        }
      //  console.log(this.changelog)
    }

    getEvent1()
    {
      this.messageEvent1 = "";
      this.childSubscription =  this.EmitService.event1.subscribe((data: any) => {
        if(data)
        {
          this.messageEvent1 = data.event;
        }
        
      });
    }
    AfterContentInit(){
     //   console.log("ChildComponent:AfterContentInit")
    }
    ngAfterContentChecked () {
     //   console.log("ChildComponent:ngAfterContentChecked")
    }

    ngAfterViewInit () {
   //     console.log("ChildComponent:ngAfterViewInit")
    }

    ngAfterViewChecked () {
     //   console.log("ChildComponent:ngAfterViewChecked")
    }

    ngOnDestroy () {
      //  console.log("ChildComponent:ngOnDestroy")
        this.ResetCustomer();
        this.EmitService.event1.unsubscribe();
    }
}