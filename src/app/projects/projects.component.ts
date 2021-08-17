import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  portfolioItems?:Portfolio[];

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.getPortfolios();
  }

  getPortfolios(): void{
    this.projectService.getPortfolios()
      .subscribe(portofilos => this.portfolioItems = portofilos);
  }
}
