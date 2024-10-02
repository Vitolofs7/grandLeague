import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationTeamPage } from './creation-team.page';

describe('CreationTeamPage', () => {
  let component: CreationTeamPage;
  let fixture: ComponentFixture<CreationTeamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationTeamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
