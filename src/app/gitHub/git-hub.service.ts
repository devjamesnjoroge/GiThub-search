import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GitHubUser } from './git-hub-user';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  BASE_URL = 'https://api.github.com/users/devjamesnjoroge?'

  constructor(private http: HttpClient) { }

  getGitHubProfile(): Observable<GitHubUser> {
    return this.http.get<GitHubUser>(`${this.BASE_URL}${environment.API_KEY}`)
  }
}
