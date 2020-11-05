import { AfterViewInit, Component, OnInit } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss']
})
export class ScreenshotComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    var swiper = new Swiper('.swiper-screenshots-container-1', {
      effect: 'coverflow',
      grabCursor: true,
      initialSlide: 2,
      centeredSlides: true,
      loop: true,
      spaceBetween: 0,
      slidesPerView: 4,
      pagination: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.43,
        slideShadows: false,
      },
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        360: {
          slidesPerView: 1,
          coverflowEffect: {
            depth: 50,
            modifier: 0,
          },
        },
        640: {
          slidesPerView: 3,
          coverflowEffect: {
            depth: 80,
            modifier: 0,
          },
        }
      }
    });
  }

  ngOnInit() {
  }

}
