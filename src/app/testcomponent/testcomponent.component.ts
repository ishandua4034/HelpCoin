import { Component, OnInit, OnDestroy } from '@angular/core';
import { TestService } from '../auth/test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss']
})
export class TestcomponentComponent implements OnInit, OnDestroy {

  userList:JSON;
  isData= false;
  private subscription: Subscription;
  constructor(private dataService: TestService ) {}
  ngOnInit(): void {
  }

  getData(){
    this.subscription=this.dataService.getData().subscribe(res=>{
      this.isData=true;
      this.userList=JSON.parse(JSON.stringify(res));
    })
  }
  ngOnDestroy(){
    this.isData=false;
    this.subscription.unsubscribe();
  }
  addData(){
    this.subscription= this.dataService.addData().subscribe(res=>{
      console.log(res)
    }, err=>{console.log(err)})
  }

}
