
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavbarComponent } from './sidenavbar.component';

describe('SidenavbarComponent', () => {
  let component: SidenavbarComponent;
  let fixture: ComponentFixture<SidenavbarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [SidenavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
