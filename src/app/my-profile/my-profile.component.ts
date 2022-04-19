import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GiThubProfile } from '../classes/gi-thub-profile';
import { GiThubRepo } from '../classes/gi-thub-repo';
import { GitHubService } from '../services/git-hub.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  profile!: GiThubProfile;


  repos!: GiThubRepo[];

  constructor(private service: GitHubService, private http: HttpClient) { }


  ngOnInit(): void {
    this.service.getGitHubProfile().subscribe(
      data => {
        this.profile = data

        console.log(data)

      }
    )

    this.service.getGitHubRepo().subscribe(
      data => {
        this.repos = data;
      }
    )

  }


}
