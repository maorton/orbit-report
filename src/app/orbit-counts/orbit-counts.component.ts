import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  constructor() { }

  @Input() satellites: Satellite[];

  ngOnInit() {
  }

  satelliteCount(type: string): number {
    let count: number = 0;
    for (let i = 0; i < this.satellites.length; i ++) {
      if (this.satellites[i].type === type) {
        count += 1
      } else if (type === 'total') {
        count += 1;
      }
    }
    return count;
  }
}
