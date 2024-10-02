import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateTeamPage } from './update-team.page';

describe('UpdateTeamPage', () => {
  let component: UpdateTeamPage;
  let fixture: ComponentFixture<UpdateTeamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
