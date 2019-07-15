import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
  selector: 'banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  bannerMenuValue: Object;

  slideIndex: any = 1;

  constructor(private bannerService: BannerService) { }

  getBanners(): void {
    this.bannerService.getBanner().
      subscribe(resBannerService => this.bannerMenuValue = resBannerService);
  }

  ngOnInit() {
    this.getBanners();
  }

  ngAfterViewInit() {
    this.showSlides(1);
  }

  showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      let imageToDisplay = slides.item(i) as HTMLElement;
      imageToDisplay.style.display = "none";
    }

    for (let i = 0; i < slides.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    let imgDisplay = slides.item(this.slideIndex-1) as HTMLElement;
    imgDisplay.style.display = "block";

    let dotDisplay = dots.item(this.slideIndex-1) as HTMLElement;
    dotDisplay.className += " active";
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
}
