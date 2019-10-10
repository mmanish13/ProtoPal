import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-find-similar-studies',
  templateUrl: './find-similar-studies.component.html',
  styleUrls: ['./find-similar-studies.component.scss']
})
export class FindSimilarStudiesComponent implements OnInit {
public advancedSearchClicked : boolean;
constructor(private router: Router) { }
  ngOnInit() {
  }
  advancedSearchClick()
{
  this.advancedSearchClicked = true;
}
cancelAdvSearch()
{
  this.advancedSearchClicked = false;
}
search()
{
  this.router.navigate(["viewProtocol"]);
}
generateRisk()
{
  this.router.navigate(["viewProtocol"]);
}
}
