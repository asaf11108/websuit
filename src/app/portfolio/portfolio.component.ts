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
  // porfoliosImages: { [company: string]: Porfolio } = {
  //   elal: {
  //     url: 'https://www.elal.com/',
  //     images: [
  //       'assets/images-new/elal1.jpg',
  //       'assets/images-new/elal2.jpg',
  //       'assets/images-new/elal3.jpg'
  //     ]
  //   },
  //   proofpoint: {
  //     url: 'https://www.proofpoint.com/us',
  //     images: [
  //       'assets/images-new/casb1.jpg',
  //       'assets/images-new/casb2.jpg',
  //       'assets/images-new/observeit1.jpg',
  //     ]
  //   },
  //   niagara: {
  //     url: 'https://www.niagaranetworks.com/',
  //     images: [
  //       'assets/images-new/niagara1.jpg',
  //       'assets/images-new/niagara2.jpg',
  //       'assets/images-new/niagara3.jpg',
  //     ]
  //   }
  // };
  porfoliosImages: { [company: string]: Porfolio } = {
    company1: {
      url: '',
      images: [
        'assets/images-new/demo/dashboard1.png',
        'assets/images-new/demo/dashboard2.jpg',
      ]
    },
    company2: {
      url: '',
      images: [
        'assets/images-new/demo/dashboard3.jpg',
        'assets/images-new/demo/dashboard4.png',
      ]
    }
  };
  selectedPortfolio: Porfolio;

  companies: string[] = Object.keys(this.porfoliosImages);
  
  constructor() { }
  
  ngOnInit() {
    this.showPortfolio(this.companies[0]);
  }

  showPortfolio(portfolio: string) {
    this.selectedPortfolio = this.porfoliosImages[portfolio];
  }

  getCompanyLogo(company: string): string {
    // return `assets/images-new/${company}-logo.png`;
    return `assets/images-new/demo/${company}.png`;
  }
}
