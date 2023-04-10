import {
  AfterContentInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

/**
 * angular样式穿透用指令
 */
@Directive({
  selector: '[libThrough]',
})
export class ThroughStyleDirective implements AfterContentInit {
  /** 基底组件标记 */
  baseAttr = '';

  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterContentInit() {
    // 获取上级组件对象
    const parentElement = this.elRef.nativeElement.parentElement;
    // 获取当前组件标记作为基底标记
    this.baseAttr =
      Array.from(this.elRef.nativeElement.attributes).find((attr) =>
        attr.name.startsWith('_ngcontent')
      )?.name || '';
    // 从上级组件中取得上级组件的标记
    const attributeName = Array.from(parentElement?.attributes ?? []).find(
      (attr) => attr.name.startsWith('_ngcontent')
    )?.name;
    // 得到标记时
    if (attributeName) {
      // 递归设置
      this.setCustomAttribute(this.elRef.nativeElement, attributeName);
    }
  }

  /**
   * 向元素中设置指定样式标记
   *
   * @param element 对象元素
   * @param attributeName 设置属性名
   * @param attributeValue 设置属性値
   */
  private setCustomAttribute(
    element: Element,
    attributeName = '',
    attributeValue = ''
  ): void {
    // 获取当前标记
    const currentAttr =
      Array.from(element.attributes).find((attr) =>
        attr.name.startsWith('_ngcontent')
      )?.name || '';

    // 如果当前标记状态与基底标记不同时，结束这条分支的递归
    if (
      (this.baseAttr && !element.hasAttribute(this.baseAttr)) ||
      (!this.baseAttr && currentAttr)
    ) {
      return;
    }

    // 设置标记
    this.renderer.setAttribute(element, attributeName, attributeValue);
    // 对子节点继续递归设置
    for (const child of Array.from(element.children)) {
      this.setCustomAttribute(child, attributeName, attributeValue);
    }
  }
}
