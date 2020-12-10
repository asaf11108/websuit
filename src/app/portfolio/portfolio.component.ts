import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  images = [
    'assets/images-new/elal1.jpg',
    'assets/images-new/elal2.jpg',
  ];
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 900,
    interval: { timing: 1500, initialDelay: 1000 },
    animation: 'lazy',
    point: {
      visible: true
    },
    loop: true,
    load: 2,
    RTL: true
  };

  constructor() { }

  ngOnInit() {
  }

}
