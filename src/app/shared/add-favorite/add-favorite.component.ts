import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from '@app/core/favorite/favorite.service';

@Component({
  selector: 'thermo-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.scss']
})
export class AddFavoriteComponent implements OnInit {
  @Input() type: string;
  @Input() name: string;
  @Input() url: string;
  @Input() inTable: boolean;

  added = false;

  constructor(private router: Router,
              private favoriteService: FavoriteService) {
  }

  ngOnInit() {
    this.url = this.url || this.router.url;
    this.added = this.favoriteService.isFavorite(this.url);
  }

  add() {
    this.added = true;
    this.favoriteService.addFavorite(this.url, this.name, this.type);
  }

  remove() {
    this.added = false;
    this.favoriteService.removeFavorite(this.url);
  }
}
