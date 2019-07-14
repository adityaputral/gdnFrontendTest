import { Component, OnInit } from '@angular/core';
import { BannerService } from '../banner.service';
import { Banner } from '../banner.model';

@Component({
  selector: 'banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  bannerMenuValue: Banner[] ;

  mainCarousel: any = [];
  miniBanner: any = [];

  constructor(private bannerService: BannerService) { }

  getBanners(): void {
    this.bannerService.getHighlightMenu().
      subscribe(resBannerService => this.bannerMenuValue = resBannerService);
  }

  getMainBanner(): void {
    for (let i = 0; i < this.bannerMenuValue.length - 2; i++) {
      this.mainCarousel[i] = this.bannerMenuValue[i];
    }
  }

  getLastBanner(total: number): void {
    var counter = this.bannerMenuValue.length - 1;
    for (let i = 0; i < total; i++) {
      this.miniBanner[i] = this.bannerMenuValue[counter];
      counter--;
    }
  }

  ngOnInit() {
    this.getBanners();
    // this.getMainBanner();
    // this.getLastBanner(2);

    // let elementes = document.getElementsByClassName("mySlides");
    // let imageToDisplay = elementes.item(0) as HTMLElement;
    // imageToDisplay.style.display="block";
  }
}
