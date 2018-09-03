import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatSidenavContainer } from '@angular/material';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements AfterViewInit {
  @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

  ngAfterViewInit() {
    //this.sidenavContainer.scrollable.elementScrolled().subscribe(() => console.log('scrolled'));
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver) {}
  
  }
