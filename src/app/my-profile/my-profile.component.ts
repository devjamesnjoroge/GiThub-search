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

  profile!: GiThubProfile


  repos!: GiThubRepo[];

  constructor(private service: GitHubService, private http: HttpClient) { }


  ngOnInit(): void {

    // this.apiCall.globalRepositorySearch(userInput).then(
    //   (success) => {
    //     this.globalRepoReturn = this.apiCall.repositories;
    //     this.isRepositories = true;
    //     this.isUsers = false;
    //   },
    //   (error) => {
    //     alert('Repository not found');
    //     console.log(error);
    //   }
    // );

    this.service.getGitHubProfile().then(
      (success) => {
        this.profile = this.service.profile
      },
      (error) => {
        console.log("An error occurred")
      }
    )

    this.service.getGitHubRepo().then(
      (successful) => {
        this.repos = this.service.repos
      },
      (error) => {
        console.log("An error occurred")
      }
    )

  }


}
