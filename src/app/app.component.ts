import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'home',
  moduleId: module.id,
  templateUrl: `../templates/home.html`,
  styleUrls: ['../style/home.css']
})
export class AppComponent  {
  name = 'Angular';
  title = 'Toyota Scorecard';

  showMore = false;

  public searchForm = this.fb.group({
    vin: ["", Validators.required],
    quantity: [""],
    timeSpan: [""]
  });

  constructor(public fb: FormBuilder) {}

  //gather searchForm data and make call to service
  //doSearch(event) {
  //  console.log(event);
  //  console.log(this.searchForm.value);
  //}
}

