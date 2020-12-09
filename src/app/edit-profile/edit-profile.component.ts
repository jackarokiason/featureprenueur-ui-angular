import { Component, OnInit } from '@angular/core';
declare var bootstrap;
declare var getCookie;
declare var url;
declare var $: any;
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      //carousel options
      $("#quote-carousel").carousel({
        pause: true,
        interval: 10000,
      });
    });

    window.onload = () => {
      fetch(`${url}api/get-user-details/${getCookie("userid")}`)
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("name").innerHTML =
            data.user_details.username;
          if (data.user_details.bio != "") {
            document.getElementById("about-me").innerHTML =
              data.user_details.bio;
          }
        });
    };
    function update() {
      let about_me = document.getElementById("about-me").nodeValue;
      fetch(`${url}api/update-user-bio`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: parseInt(getCookie("userid")),
          bio: about_me,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.msg == "Updated Successfully") {
            window.location.assign("edit-profile.html");
          }
        });
    }

}
}
