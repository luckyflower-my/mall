# 商家后台管理系统

这是一个基于HTML、CSS和JavaScript的商家后台管理系统，支持多级导航和动态页面加载。

## 功能特性

### 🎯 核心功能
- **多级导航系统**：左侧一级菜单 + 中间二级菜单
- **动态页面加载**：点击二级菜单项时，右侧内容区域加载对应的独立页面
- **滚动优化**：右侧内容区域支持流畅滚动，固定导航栏
- **响应式设计**：支持桌面端和移动端
- **现代化UI**：采用现代化的设计风格和交互体验

### 📁 文件结构
```
project/
├── index.html          # 主页面文件
├── page/              # 页面文件目录
│   ├── overview.html   # 数据总览
│   ├── sales-analysis.html # 销售分析
│   ├── realtime.html  # 实时订单
│   ├── performance.html # 店铺表现
│   ├── reviews.html   # 评价管理
│   ├── product-list.html # 商品列表
│   ├── product-add.html # 添加商品
│   ├── categories.html # 分类管理
│   ├── inventory.html # 库存管理
│   ├── order-all.html # 全部订单
│   └── test-page.html # 测试页面
├── script.js          # 脚本文件
├── style.css          # 样式文件
└── generate_pages.js  # 页面生成脚本
```

### 🚀 使用方法

1. **启动项目**
   ```bash
   # 使用任何HTTP服务器启动项目
   python -m http.server 8000
   # 或者使用Node.js
   npx http-server
   ```

2. **访问系统**
   - 打开浏览器访问 `http://localhost:8000`
   - 点击左侧一级菜单切换不同模块
   - 点击中间二级菜单加载对应页面

3. **添加新页面**
   - 在 `page/` 目录下创建新的HTML文件
   - 在 `index.html` 的 `pageMap` 对象中添加映射关系
   - 页面内容使用 `content-card` 类包装

### 🎨 页面开发规范

#### HTML结构
```html
<!-- 页面文件名：example.html -->
<div class="content-card">
    <div class="card-title">页面标题</div>
    <div style="padding: 20px;">
        <!-- 页面内容 -->
    </div>
</div>
```

#### 可用的CSS类
- `.content-card` - 内容卡片容器
- `.card-title` - 卡片标题
- `.card-content` - 卡片内容区域
- `.info-box` - 信息展示框
- `.data-table` - 数据表格
- `.btn` - 按钮样式
- `.status` - 状态标签

### 🔧 技术实现

#### 页面加载机制
1. 用户点击二级菜单项
2. JavaScript获取菜单项ID
3. 从 `pageMap` 查找对应的HTML文件路径
4. 使用 `fetch()` API加载HTML文件
5. 将内容渲染到右侧内容区域

#### 错误处理
- 文件不存在时显示错误页面
- 网络错误时显示友好的错误信息
- 加载失败时回退到默认内容

### 📱 响应式支持

- **桌面端**：完整的三栏布局，右侧内容区域可滚动
- **平板端**：二级菜单可折叠，内容区域自适应滚动
- **移动端**：单栏布局，菜单可切换，优化滚动体验

### 🎯 滚动功能特性

- **固定导航**：左侧菜单和顶部操作栏保持固定位置
- **流畅滚动**：右侧内容区域支持垂直滚动
- **自适应高度**：内容区域根据屏幕高度自动调整
- **移动端优化**：在小屏幕设备上提供更好的滚动体验

### 🎯 已实现的页面

#### 概览模块
- ✅ 数据总览 (`overview.html`)
- ✅ 销售分析 (`sales-analysis.html`)
- ✅ 实时订单 (`realtime.html`)
- ✅ 店铺表现 (`performance.html`)
- ✅ 评价管理 (`reviews.html`)
- ✅ 滚动测试 (`scroll-test.html`)

#### 商品模块
- ✅ 商品列表 (`product-list.html`)
- ✅ 添加商品 (`product-add.html`)
- ✅ 分类管理 (`categories.html`)
- ✅ 库存管理 (`inventory.html`)
- ✅ 补货管理 (`replenish.html`)
- ✅ 热销商品 (`popular.html`)
- ✅ 商品分析 (`product-analysis.html`)

#### 订单模块
- ✅ 全部订单 (`order-all.html`)
- ✅ 待处理订单 (`order-pending.html`)
- ✅ 已发货订单 (`order-shipped.html`)
- ✅ 批量处理 (`order-process.html`)
- ✅ 退款管理 (`order-refund.html`)
- ✅ 物流设置 (`logistics.html`)
- ✅ 打印模板 (`templates.html`)

#### 客户模块
- ✅ 客户导入 (`customer-import.html`)
- ✅ 客户迁移 (`customer-migrate.html`)
- ✅ 标签管理 (`tag-manage.html`)
- ✅ 客户分群 (`customer-group.html`)
- ✅ 会员等级 (`member-level.html`)
- ✅ 场景营销 (`scene-marketing.html`)
- ✅ 人群运营 (`people-operate.html`)
- ✅ 权益卡 (`benefit-card.html`)
- ✅ 积分运营 (`point-operate.html`)
- ✅ 自定义权益 (`custom-benefit.html`)
- ✅ 储值规则 (`recharge-rule.html`)
- ✅ 储值查询 (`recharge-query.html`)
- ✅ 储值运营 (`recharge-operate.html`)
- ✅ 储值设置 (`recharge-setting.html`)
- ✅ 客户设置 (`customer-setting.html`)

#### 营销模块
- ✅ 营销管理 (`marketing-manage.html`)
- ✅ 活动查询 (`activity-query.html`)
- ✅ 商品查询 (`product-query.html`)
- ✅ 互斥查询 (`exclusion-query.html`)
- ✅ 到期提醒 (`expire-remind.html`)
- ✅ 黑名单 (`blacklist.html`)
- ✅ 全渠道经营 (`omni-channel.html`)
- ✅ 分销分佣 (`distribution.html`)
- ✅ 广告推广 (`ad-promotion.html`)
- ✅ 常用工具 (`common-tools.html`)

#### 设置模块
- ✅ 店铺设置 (`store-config.html`)
- ✅ 商品设置 (`product-config.html`)
- ✅ 交易设置 (`trade-config.html`)
- ✅ 店铺信息 (`store-info.html`)
- ✅ 联系我们 (`contact-us.html`)
- ✅ 分销信息 (`distribution-info.html`)
- ✅ 退货信息 (`return-info.html`)
- ✅ 门店管理 (`store-manage.html`)
- ✅ 商家地址库 (`address-lib.html`)
- ✅ 员工管理 (`staff-manage.html`)
- ✅ 角色管理 (`role-manage.html`)
- ✅ 我的服务商 (`service-provider.html`)
- ✅ 资料项设置 (`profile-config.html`)
- ✅ 用户授权 (`user-auth.html`)
- ✅ 卡券授权 (`coupon-auth.html`)
- ✅ 资产设置 (`asset-config.html`)
- ✅ 硬件设备 (`hardware-device.html`)
- ✅ 收银小票 (`receipt.html`)
- ✅ 电子面单 (`electronic-waybill.html`)
- ✅ 语音提醒 (`voice-remind.html`)
- ✅ 音箱 (`speaker.html`)
- ✅ 安全保障概览 (`security-overview.html`)
- ✅ 消费保障 (`consumer-protect.html`)
- ✅ 白名单管理 (`whitelist.html`)
- ✅ 隐私面单 (`privacy-waybill.html`)
- ✅ 数据脱敏 (`data-desensitization.html`)
- ✅ 水印管理 (`watermark.html`)
- ✅ 操作记录 (`operation-record.html`)
- ✅ 员工风险 (`staff-risk.html`)
- ✅ 解密管理 (`decrypt-manage.html`)

### 🔄 扩展开发

#### 添加新模块
1. 在 `menuData` 对象中添加新模块配置
2. 在 `pageMap` 中添加页面映射
3. 创建对应的页面文件

#### 添加新页面
1. 在 `page/` 目录创建HTML文件
2. 在 `pageMap` 中添加映射
3. 确保页面内容使用正确的CSS类

### 🐛 故障排除

#### 页面加载失败
- 检查文件路径是否正确
- 确认HTML文件存在且格式正确
- 查看浏览器控制台错误信息

#### 样式问题
- 确保使用了正确的CSS类名
- 检查CSS文件是否正确加载
- 验证Font Awesome图标库是否可用

### 📄 许可证

MIT License

---

**注意**：这是一个演示项目，实际使用时需要根据具体需求进行定制和优化。 