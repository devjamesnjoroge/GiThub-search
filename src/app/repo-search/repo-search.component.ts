import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';

@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  searchRepos!: any[]

  constructor(private service: GitHubService) { }

  searchRepo(searchQuery: any) {

    this.service.searchGithubRepo(searchQuery).then(
      (successful) => {
        this.searchRepos = this.service.searchRepos
      },
      (error) => {
        console.log("error")
      }
    )

  }

  ngOnInit(): void {
  }

}
