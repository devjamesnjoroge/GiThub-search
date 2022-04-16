import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GiThubProfile } from '../gitHub/gi-thub-profile';
import { GitHubService } from '../gitHub/git-hub.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  REPOS_URL!: string;

  profile!: string;

  username!: string;

  repos!: GiThubProfile[];

  constructor(private service: GitHubService, private http: HttpClient) { }

  ngOnInit(): void {
    this.service.getGitHubProfile().subscribe(
      data => {
        this.REPOS_URL = data.repos_url;
        this.profile = data.name
        this.username = data.login
      }
    )

    this.service.getGitHubRepo().subscribe(
      data => {
        this.repos = data;
        console.log(data[1].html_url)
      }
    )

  }


}
