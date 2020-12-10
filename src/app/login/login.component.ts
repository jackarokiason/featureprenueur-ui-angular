import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var bootstrap;
declare var setCookie;
declare var url;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      email: [''],
      password : ['']
    })
  }
  

  ngOnInit(): void {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  submitForm() {
    
    var formData :any ={};
    formData.email= this.form.get('email').value;
    formData.password= this.form.get('password').value;
    formData.user_role=2;
    console.log(JSON.stringify(formData));   

    this.http.post('http://0.0.0.0:8063/api/login?api_key=kaipuLla401326', JSON.stringify(formData) ,this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }
}
