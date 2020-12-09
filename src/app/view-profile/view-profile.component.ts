import { Component, OnInit } from '@angular/core';
declare var bootstrap;
declare var getCookie;
declare var setCookie;
declare var url;
declare var $: any;
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    window.onload = () => {
      fetch(`${url}api/get-user-details/${getCookie("userid")}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          let user = data.user_details;
          document.getElementById("name").innerHTML = user.username;
          // document.getElementById("ml_score").innerHTML = user.ml_score;
          // document.getElementById("git_score").innerHTML = user.git_score;
          let handles = "";
          if (user.github_handle != "") {
            handles = `
              <li>
                <a href="${user.github_handle}" title="Github" target="_blank"
                  ><i class="fa fa-github-square"></i
                ></a>
              </li>`;
          }
          if (user.linkedin_handle != "") {
            handles = `
            ${handles}
              <li>
                <a href="${user.linkedin_handle}" title="Linkedin" target="_blank"
                  ><i class="fa fa-linkedin-square"></i
                ></a>
              </li>`;
          }
          if (user.kaggle_handle != "") {
            handles = `
            ${handles}
              <li>
                <a href="${user.kaggle_handle}" title="Kaggle" target="_blank"
                  ><i class="fa fa-link"></i
                ></a>
              </li>`;
          }
          document.getElementById("profile").innerHTML = `
              <div class="pro_head">
                <div class="pro_left">
                  <div class="avator img">
                    <img src="img/male.png" alt="" title="" />
                  </div>
                  <h3>${user.username}</h3>
                  <p>${user.country}</p>
                </div>
              </div>
              <div class="pro_foot">
                <div class="content-box simple content box">
                  <div class="content-box simple-content">
                    <div class="pr-left-box">
                      <nav>
                        <ul>
                          ${handles}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              `;
          if (user.bio != null) {
            document.getElementById("bio").innerHTML = user.bio;
          }
          if (data.user_details.user_role !== 2) {
            document.getElementById("rm-nonuser").innerHTML = "";
          }
        });

      fetch(`${url}api/get-user-tactcoins/${getCookie("userid")}`)
        .then((res) => res.json())
        .then((data) => {
          document.getElementById("total_tc").innerHTML =
            data.total_tact_coins;
        });

      fetch(`${url}api/get-features-of-user/${getCookie("userid")}`)
        .then((res) => res.json())
        .then((data) => {
          let element = "";
          data.features.forEach((feature) => {
            element = `${element}
            <div class="block-link block-link--bordered" onclick="setFeature(${feature.feature_id})">
                  <a class="block-link__anchor" href="#"></a>
                  <div class="achievement-summary__highlight">
                  <div class="achievement-summary__highlight__title">
                      <p>
                      <a
                          href="#" title="Continents and Medals Count" class="text-capitalize" style=" position: relative; z-index: 2; pointer-events: auto; "
                      >
                      ${feature.title}
                      </a>
                      </p>
                      <p
                      class="achievement-summary__highlight__subtitle"
                      >
                      </p>
                  </div>
              </div>`;
          });
          document.getElementById("feature").innerHTML = element;
        });
    };
    function setFeature(id) {
      setCookie("featureid", id, 1);
      window.location.assign("/feature-detail.html");
    }
  }

}
