import { Component, OnDestroy, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ActivationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { routerTransition } from './core/animations/router.transition';
import { Subject } from 'rxjs/Subject';
import { environment as env } from '@env/environment';
import { logout, selectorAuth } from './core/auth/auth.reducer';
import { Store } from '@ngrx/store';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'thermo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  version = env.versions.app;
  year = new Date().getFullYear();
  navigation = [
    { link: 'dashboard', label: 'Dashboard' },
    { link: 'entity-kinds', label: 'Entity Kinds' },
    { link: 'records', label: 'Records' }
  ];
  navigationSideMenu = [
    ...this.navigation,
  ];
  isAuthenticated;

  constructor(private apollo: Apollo,
              private store: Store<any>,
              private router: Router,
              private titleService: Title) {

  }

  ngOnInit(): void {
    this.store
      .select(selectorAuth)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(auth => this.isAuthenticated = auth.isAuthenticated);
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        let lastChild = event.snapshot;
        while (lastChild.children.length) {
          lastChild = lastChild.children[0];
        }
        const { title } = lastChild.data;
        this.titleService.setTitle(
          title ? `${title} - ${env.appName}` : env.appName
        );
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLogoutClick(): void {
    this.store.dispatch(logout());
  }
}
