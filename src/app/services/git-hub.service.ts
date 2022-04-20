import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GiThubProfile } from '../classes/gi-thub-profile';
import { GiThubRepo } from '../classes/gi-thub-repo';
import { GitHubUser } from '../classes/git-hub-user';


@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  username = 'devjamesnjoroge'

  profile!: GiThubProfile;

  repos!: GiThubProfile[];

  searchRepos!: any[]


  BASE_URL = `https://api.github.com/users/`

  constructor(private http: HttpClient) { }

  getGitHubProfile() {
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<GitHubUser>(`${this.BASE_URL}${this.username}?${environment.API_KEY}`)
        .subscribe({
          next: (res) => {
            this.profile = res
            console.log(res)
            resolve();
          },
          error: (error: any) => {
            console.log('error')
            reject(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });
    return promise;
  }

  //REPO

  getGitHubRepo() {
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<GiThubRepo[]>(`${this.BASE_URL}${this.username}/repos?${environment.API_KEY}`)
        .subscribe({
          next: (res: GiThubRepo[]) => {
            console.log(res)
            this.repos = res;
            resolve();
          },
          error: (error: any) => {
            reject(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });
    return promise;
  }

  //SEARCH

  getGitHubProfileSearch(searchQuery: any) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<GitHubUser>(`${this.BASE_URL}${searchQuery}?${environment.API_KEY}`)
        .subscribe({
          next: (res) => {
            this.profile = res
            console.log(res)
            resolve();
          },
          error: (error: any) => {
            console.log('error')
            reject(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });
    return promise;
  }

  //REPO

  getGitHubRepoSearch(searchQuery: any) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http
        .get<GiThubRepo[]>(`${this.BASE_URL}${searchQuery}/repos?${environment.API_KEY}`)
        .subscribe({
          next: (res: GiThubRepo[]) => {
            console.log(res)
            this.repos = res;
            resolve();
          },
          error: (error: any) => {
            reject(error);
          },
          complete: () => {
            console.log('complete');
          },
        });
    });
    return promise;
  }

  searchGithubRepo(searchQuery: any) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get(`https://api.github.com/search/repositories?q=${searchQuery}`, {
        headers: {
          Authorisation: `token${environment.API_KEY}`
        }
      })
        .subscribe(
          {
            next: (data: any) => {
              this.searchRepos = data.items;
              console.log(data);
              resolve();
            },
            error: (err: any) => {
              console.log(`An error occurred`);
            },
            complete: () => {
              console.log(`complete`);
            }
          }
        )
    })
    return promise
  }

}
