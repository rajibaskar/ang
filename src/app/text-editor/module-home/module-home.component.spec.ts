import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreModule } from '@app/core';
import { TestingModule } from '@testing/utils';
import { SettingsModule } from '@app/settings';

import { ModuleHomeComponent } from './module-home.component';

describe('ModuleHomeComponent', () => {
  let component: ModuleHomeComponent;
  let fixture: ComponentFixture<ModuleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, CoreModule, SettingsModule],
      declarations: [ModuleHomeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
