import {
  AfterContentInit,
  Directive,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[libThrough]',
})
export class ThroughStyleDirective implements AfterContentInit {
  constructor(
    private elRef: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngAfterContentInit() {
    // 子コンポーネントのルート要素の親要素を取得
    const parentElement = this.elRef.nativeElement.parentElement;
    // 親要素から「_ngcontent」で始まる属性名を取得
    const attributeName = Array.from(parentElement?.attributes ?? []).find(
      (attr) => attr.name.startsWith('_ngcontent')
    )?.name;
    // 取得した属性名を子コンポーネントの全ての要素に設定
    this.setCustomAttribute(this.elRef.nativeElement, attributeName);
  }

  // 反例_ngAfterContentInit() {
  //   // 子コンポーネントのルート要素の親要素を取得
  //   const parentElement = this.elRef.nativeElement.parentElement!;
  //   // 親要素から「_ngcontent」で始まる属性名を取得
  //   const attributeName = Array.from(parentElement.attributes).find((attr) =>
  //     attr.name.startsWith('_ngcontent')
  //   )?.name;
  //   // 取得した属性名を子コンポーネントの全ての要素に設定
  //   this.setCustomAttribute(this.elRef.nativeElement, attributeName);
  // }

  /**
   * 要素にカスタム属性を設定するメソッド
   * @param element 対象の要素
   * @param attributeName 設定する属性名
   * @param attributeValue 設定する属性値
   */
  private setCustomAttribute(
    element: Element,
    attributeName = '',
    attributeValue = ''
  ): void {
    // 属性名がない場合、設定不要
    if (!attributeName) {
      return;
    }
    // 属性名を設定
    this.renderer.setAttribute(element, attributeName, attributeValue);
    // 子要素全てに対して再帰的に処理を実行
    for (const child of Array.from(element.children)) {
      this.setCustomAttribute(child, attributeName, attributeValue);
    }
  }
}
