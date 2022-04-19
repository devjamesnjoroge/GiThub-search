import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GiThubProfile } from './gi-thub-profile';
import { GiThubRepo } from './gi-thub-repo';
import { GitHubUser } from './git-hub-user';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  username = 'devjamesnjoroge'

  profile!: GiThubProfile;

  repos!: GiThubProfile[];


  BASE_URL = `https://api.github.com/users/`

  constructor(private http: HttpClient) { }

  getGitHubProfile(): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.BASE_URL}${this.username}?${environment.API_KEY}`)
  }

  getGitHubRepo(): Observable<GiThubRepo[]> {
    return this.http.get<GitHubUser[]>(`${this.BASE_URL}${this.username}/repos?${environment.API_KEY}`)
  }


}
