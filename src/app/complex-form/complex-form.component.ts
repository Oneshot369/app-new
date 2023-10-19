import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  formValid = false;
  formSubmit = false;
  onSubmit() {
    // Perform actions on form submission
    this.formValid = true;
    this.formSubmit = true;

    // You can access form values through this.contact object
    console.log('Form submitted:', this.formData2);
  }

  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form to its initial state
    this.formValid = false; // Reset form validation state
    this.formSubmit = false; // Reset form submission state
  }
}
