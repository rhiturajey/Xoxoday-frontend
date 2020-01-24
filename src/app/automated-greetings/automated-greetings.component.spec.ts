import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedGreetingsComponent } from './automated-greetings.component';

describe('AutomatedGreetingsComponent', () => {
  let component: AutomatedGreetingsComponent;
  let fixture: ComponentFixture<AutomatedGreetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomatedGreetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomatedGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
