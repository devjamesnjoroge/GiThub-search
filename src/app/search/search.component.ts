import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GiThubProfile } from '../classes/gi-thub-profile';
import { GiThubRepo } from '../classes/gi-thub-repo';
import { GitHubUser } from '../classes/git-hub-user';
import { GitHubService } from '../services/git-hub.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profile!: GiThubProfile;
  repos!: GiThubRepo[];

  constructor(private http: HttpClient, private service: GitHubService) { }

  searchUser(searchQuery: any) {

    event?.preventDefault()

    this.service.getGitHubProfileSearch(searchQuery).then(
      (success) => {
        this.profile = this.service.profile
      },
      (error) => {
        console.log("An error occurred")
      }
    )
    this.service.getGitHubRepoSearch(searchQuery).then(
      (success) => {
        this.repos = this.service.repos
      },
      (error) => {
        console.log("An error occurred")
      }
    )



  }



  ngOnInit(): void {
  }

}
