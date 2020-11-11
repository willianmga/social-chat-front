import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalChatComponent } from './personal-chat.component';

describe('PersonalChatComponent', () => {
  let component: PersonalChatComponent;
  let fixture: ComponentFixture<PersonalChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
