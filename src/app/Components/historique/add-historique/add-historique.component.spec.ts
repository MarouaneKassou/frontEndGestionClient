import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoriqueComponent } from './add-historique.component';

describe('AddHistoriqueComponent', () => {
  let component: AddHistoriqueComponent;
  let fixture: ComponentFixture<AddHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
