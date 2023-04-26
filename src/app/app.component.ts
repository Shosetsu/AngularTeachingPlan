import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /** 加载指示符 */
  isLoader = false;

  /**
   * 构造器
   *
   * @param router 路由管理服务
   * @param modal 窗口管理服务
   */
  constructor(private router: Router) {
    // 预先绑定路由事件
    this.router.events.subscribe((event) => {
      switch (true) {
        // 开始导航时添加屏幕锁定
        case event instanceof NavigationStart: {
          this.isLoader = true;
          break;
        }
        // 结束导航时解除屏幕锁定
        case event instanceof NavigationEnd: {
          this.isLoader = false;
          break;
        }
      }
    });
  }
}
