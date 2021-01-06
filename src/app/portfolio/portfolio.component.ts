import { Component, OnInit } from '@angular/core';

interface  Porfolio {
  url: string;
  images: string[]
}


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  private static _porfoliosImages: { [company: string]: Porfolio } = {
    elal: {
      url: 'https://www.elal.com/',
      images: [
        'assets/images-new/elal1.jpg',
        'assets/images-new/elal2.jpg',
        'assets/images-new/elal3.jpg'
      ]
    },
    proofpoint: {
      url: 'https://www.proofpoint.com/us',
      images: [
        'assets/images-new/casb1.jpg',
        'assets/images-new/casb2.jpg',
        'assets/images-new/observeit1.jpg',
      ]
    },
    niagara: {
      url: 'https://www.niagaranetworks.com/',
      images: [
        'assets/images-new/niagara1.jpg',
        'assets/images-new/niagara2.jpg',
        'assets/images-new/niagara3.jpg',
      ]
    }
  };
  selectedPortfolio: Porfolio;

  constructor() { }

  ngOnInit() {
    this.showPortfolio('elal');
  }

  showPortfolio(portfolio: string) {
    this.selectedPortfolio = PortfolioComponent._porfoliosImages[portfolio];
  }
}
