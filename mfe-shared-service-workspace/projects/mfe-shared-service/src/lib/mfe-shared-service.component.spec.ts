import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeSharedServiceComponent } from './mfe-shared-service.component';

describe('MfeSharedServiceComponent', () => {
  let component: MfeSharedServiceComponent;
  let fixture: ComponentFixture<MfeSharedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfeSharedServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeSharedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
