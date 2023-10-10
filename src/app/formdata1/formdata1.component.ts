import { Component } from '@angular/core';

interface FormData{
  name: string;
  age: number;
  phoneNumber: string;
  date: string;
  email: string;
  emailShare: boolean;
  password: string;
}

@Component({
  selector: 'app-formdata1',
  templateUrl: './formdata1.component.html',
  styleUrls: ['./formdata1.component.css']
})
export class Formdata1Component {
  formData: FormData ={
    name: '',
    age: 0,
    phoneNumber: '',
    date: '',
    email: '',
    emailShare: false,
    password: ''
  };
  onSubmit(){
    console.log("Form data submitted: ", this.formData);
  };
}
