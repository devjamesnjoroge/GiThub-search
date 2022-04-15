import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../gitHub/git-hub.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(private service: GitHubService) { }

  ngOnInit(): void {
    this.service.getGitHubProfile().subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
