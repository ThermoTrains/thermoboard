import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'thermo-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.scss']
})
export class AddFavoriteComponent implements OnInit {
  @Input() url: any;
  @Input() inTable: boolean;

  added = false;
  favorites: any;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    this.url = this.url || this.router.url;
    this.added = this.favorites[this.url];
  }

  add() {
    this.added = true;
    this.favorites[this.url] = true;
    this.update();
  }

  remove() {
    this.added = false;
    this.favorites[this.url] = false;
    this.update();
  }

  update() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
