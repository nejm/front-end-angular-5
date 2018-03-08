import { Component, OnInit } from '@angular/core';
import { StatService } from '../services/stat.service';
import { Stat } from '../models/stat';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  private stats:Stat[];
  constructor(private statService:StatService) { }

  ngOnInit() {
    this.statService.getAllStats().subscribe(data => {
      this.stats = data;
    });
  }

}
