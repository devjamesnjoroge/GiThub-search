import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GitHubUser } from './git-hub-user';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private http: HttpClient) { }

  getGitHubProfile() {
    return this.http.get<GitHubUser>(`https://api.github.com/users/devjamesnjoroge?${environment.API_KEY}`)
  }
}
