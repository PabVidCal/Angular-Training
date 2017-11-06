import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSkuWithBuilderComponent } from './demo-sku-with-builder.component';

describe('DemoSkuWithBuilderComponent', () => {
  let component: DemoSkuWithBuilderComponent;
  let fixture: ComponentFixture<DemoSkuWithBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSkuWithBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSkuWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
