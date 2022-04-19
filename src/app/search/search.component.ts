import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GiThubProfile } from '../gitHub/gi-thub-profile';
import { GiThubRepo } from '../gitHub/gi-thub-repo';
import { GitHubUser } from '../gitHub/git-hub-user';
import { GitHubService } from '../gitHub/git-hub.service';

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

    this.http.get<GitHubUser>(`${this.service.BASE_URL}${searchQuery}?${environment.API_KEY}`)
      .subscribe(data => {
        this.profile = data;
      }, err => {
        alert("Invalid username, please doublecheck before searching")
      })

    this.http.get<GiThubRepo[]>(`${this.service.BASE_URL}${searchQuery}/repos?${environment.API_KEY}`)
      .subscribe(data => {
        this.repos = data
      })


  }



  ngOnInit(): void {
  }

}
