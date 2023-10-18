import { EventEmitter, Injectable, Output } from "@angular/core";
import { Subscription } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() event1 = new EventEmitter<any>();

  
  subEvent1: Subscription;

}
