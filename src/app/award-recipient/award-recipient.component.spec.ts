import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardRecipientComponent } from './award-recipient.component';

describe('AwardRecipientComponent', () => {
  let component: AwardRecipientComponent;
  let fixture: ComponentFixture<AwardRecipientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardRecipientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
