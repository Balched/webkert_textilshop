import { HighlightOnHoverDirective } from './highlight-on-hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightOnHoverDirective', () => {
  let directive: HighlightOnHoverDirective;
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = { nativeElement: document.createElement('div') } as ElementRef;
    renderer = {} as Renderer2;
    
    directive = new HighlightOnHoverDirective(elementRef, renderer);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
