import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    $(document).ready(function () {
      //carousel options
      $("#quote-carousel").carousel({
        pause: true,
        interval: 10000,
      });
    });
    document.addEventListener("submit", sendData);
    function sendData(e) {
      e.preventDefault();
      const password = (<HTMLInputElement>document.getElementById("password")).value;
      const email = (<HTMLInputElement>document.getElementById("email")).value;
      fetch(`${url}api/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          user_role: 2,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.user_id === -1) {
            document.getElementById(
              "err-msg"
            ).innerHTML = `<div class="err-msg">${data.authenticated}</div>`;
          } else {
            setCookie("userid", data.user_id, 1);
            window.location.assign("/feature.html");
          }
        })
        .catch((err) => console.log(err));
    }
}}
