import { Component } from '@angular/core';

interface ComplexForm{
  username: string;
  password: string;
  country: string;
  agree: boolean;
  subscribe: boolean;
  offers: boolean;
  gender: string;
}

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent {
  formData2: ComplexForm ={
    username: '',
    password: '',
    country: '',
    agree: false,
    subscribe: false,
    offers: false,
    gender: "NA"
  };
  onSubmit2(){
    console.log("Form data submitted: ", this.formData2);

  };
}
