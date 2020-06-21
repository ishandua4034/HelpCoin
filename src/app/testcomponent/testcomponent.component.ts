import { Component, OnInit, OnDestroy } from "@angular/core";
import { TestService } from "../services/test.service";
import { Subscription } from "rxjs";
import { User } from "../user-info/models/user";

@Component({
  selector: "app-testcomponent",
  templateUrl: "./testcomponent.component.html",
  styleUrls: ["./testcomponent.component.scss"]
})
export class TestcomponentComponent implements OnInit, OnDestroy {

  usersObj: User;
  userList: JSON;
  isData = false;
  private subscription: Subscription;
  constructor(private dataService: TestService ) {}
  ngOnInit(): void {
    this.usersObj = new User(111330112265722171611, "ISHAN DUA", "ishan.dua01@gmail.com", "https://lh3.googleusercontent.com/a-/AOh14Ghw3-K1xXMkvsWEUP_Yc8JNwPHzRWsI732q-4-BjpM=s96-c");
  }
  getData(){
    this.subscription = this.dataService.getData().subscribe(res => {
      this.isData = true;
      this.userList = JSON.parse(JSON.stringify(res));
    });
  }
  ngOnDestroy(){
    this.isData = false;
    this.subscription.unsubscribe();
  }
  addData(){
    this.subscription = this.dataService.addData().subscribe(res => {
      console.log(res);
    }, err => {console.log(err); });
  }

  onLogin() {
    console.log("hi");
  }

}
