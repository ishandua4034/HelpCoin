import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, Validators, FormBuilder } from "@angular/forms";
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "app-poll",
  templateUrl: "./poll.component.html",
  styleUrls: ["./poll.component.scss"]
})
export class PollComponent implements OnInit {

  pollForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.pollForm = this.fb.group({
      options: this.fb.array([this.fb.control("", Validators.required)])
    });
    this.cssInitializer();
  }

  // to get instance of FormArray
  getOptions(){
    return (this.pollForm.get("options") as FormArray);
  }
  // to add control in FormArray daynamically
  addOptions(){
    this.getOptions().push(this.fb.control(""));
  }

  // method to initialize materilize css components
  cssInitializer(){
    const chips = document.querySelectorAll(".chips");
    const date = document.querySelectorAll(".datepicker");
    M.Chips.init(chips, { placeholder: "Enter Options", secondaryPlaceholder: "+Options"});
    M.Datepicker.init(date, {autoClose: true, format: "yyyy-mm-dd"});
  }

}
