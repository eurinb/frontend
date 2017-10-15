import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquiditySettingsComponent } from './liquidity-settings.component';

describe('LiquiditySettingsComponent', () => {
  let component: LiquiditySettingsComponent;
  let fixture: ComponentFixture<LiquiditySettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquiditySettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquiditySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
