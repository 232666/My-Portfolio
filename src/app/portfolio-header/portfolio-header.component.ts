import { Component, OnInit } from '@angular/core';
import { HeaderIndexService } from '../header-index.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent implements OnInit {
  headersIndex$!:Observable<string[]>;
  iconLink?:string;

  constructor(private headersIndexService:HeaderIndexService) { }

  ngOnInit(): void {
    this.inicializeHeadersIndex();
    this.getIconLink();
  }

  private inicializeHeadersIndex(): void{
    this.headersIndex$ = this.headersIndexService.getHeaders();
  }

  private getIconLink(): void{
    this.headersIndexService.getIconLink().subscribe(link => this.iconLink = link);
  }
}
