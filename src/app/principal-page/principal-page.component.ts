import { Component, OnInit } from '@angular/core';
import { HeaderIndexService } from '../header-index.service';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  linkImageReadMore?:string;
  linkImageArrow?:string;
  hideMoreDescription?:boolean = true;
  showReadMore?:boolean = false;
  constructor(private headerIndex: HeaderIndexService) { }

  ngOnInit(): void {
    this.getReadMoreImage();
    this.getArrowImage();
    this.hideMoreDescription = true;
    this.showReadMore = false;
  }

  getReadMoreImage(): void{
    this.headerIndex.getReadMoreImage().subscribe(
      link => this.linkImageReadMore = link
    );
  }

  getArrowImage(): void{
    this.headerIndex.getArrowImage().subscribe(
      link => this.linkImageArrow = link
    );
  }

  changeStatesAtributes(): void{
    this.hideMoreDescription = false;
    this.showReadMore = true;
  }
}
