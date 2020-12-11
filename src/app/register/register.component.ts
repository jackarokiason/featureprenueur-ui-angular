import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    public fb: FormBuilder,
    private http: HttpClient) { 
      this.form = this.fb.group({
        name:[''],
        email: [''],
        password : [''],
        confirmpassword:[''],
      })
     
  }

  ngOnInit(): void {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })                                                        

  }
  submitForm() {
    
    var formData :any ={};
    formData.name= this.form.get('name').value;
    formData.email= this.form.get('email').value;
    formData.password= this.form.get('password').value;
    
    formData.location='';
    formData.country='';
    formData.bio='';
    formData.github_handle='';
    formData.linkedin_handle='';
    formData.kaggle_handle='';
    formData.user_role=2;
    
    this.http.post('http://0.0.0.0:8063/api/signup?api_key=kaipuLla401326', JSON.stringify(formData) ,this.httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }  
}
