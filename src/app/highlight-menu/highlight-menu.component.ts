import { Component, OnInit } from '@angular/core';
import { HighlightMenuService } from '../highlight-menu.service';

@Component({
  selector: 'highlight-menu',
  templateUrl: './highlight-menu.component.html',
  styleUrls: ['./highlight-menu.component.css']
})
export class HighlightMenuComponent implements OnInit {
  highLightMenuValue:Object;

  constructor(private highlightMenuService: HighlightMenuService) { }

  getHighlightMenu(){
    this.highlightMenuService.getHighlightMenu().
    subscribe(resHighlightMenu => this.highLightMenuValue = resHighlightMenu);
  }

  ngOnInit() {
    this.getHighlightMenu()
  }
}
