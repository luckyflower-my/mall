// 菜单数据定义
const menuData = {
  dashboard: {
      title: "概览仪表盘",
      subtitle: "今日数据更新于",
      submenu: [
          {
              groupTitle: "核心数据",
              items: [
                  { id: "overview", icon: "fas fa-tachometer-alt", title: "数据总览" },
                  { id: "sales", icon: "fas fa-chart-bar", title: "销售分析" },
                  { id: "realtime", icon: "fas fa-shopping-cart", title: "实时订单" }
                //   { id: "scrollTest", icon: "fas fa-scroll", title: "滚动测试" }
              ]
          },
          {
              groupTitle: "店铺管理",
              items: [
                  { id: "performance", icon: "fas fa-chart-line", title: "店铺表现" },
                  { id: "reviews", icon: "fas fa-star", title: "评价管理" }
              ]
          }
      ],
      content: `
          <div class="content-card">
              <div class="card-title">核心指标概览</div>
              <div class="card-content">
                  <div class="info-box">
                      <div class="info-title">今日销售额</div>
                      <div class="info-value">¥24,568</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 12.5% 较昨日
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">订单数量</div>
                      <div class="info-value">186</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 8.2% 较昨日
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">新增客户</div>
                      <div class="info-value">42</div>
                      <div class="info-change down">
                          <i class="fas fa-arrow-down"></i> 3.7% 较昨日
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">转化率</div>
                      <div class="info-value">4.8%</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 1.2% 较昨日
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="content-card">
              <div class="card-title">最新订单</div>
              <table class="data-table">
                  <thead>
                      <tr>
                          <th>订单号</th>
                          <th>客户</th>
                          <th>日期</th>
                          <th>金额</th>
                          <th>状态</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#ORD-2023-00125</td>
                          <td>李明</td>
                          <td>2023-10-15</td>
                          <td>¥568.00</td>
                          <td><span class="status shipped">已发货</span></td>
                          <td><button class="btn btn-primary">查看</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00124</td>
                          <td>张伟</td>
                          <td>2023-10-15</td>
                          <td>¥1,248.00</td>
                          <td><span class="status completed">已完成</span></td>
                          <td><button class="btn btn-primary">查看</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00123</td>
                          <td>王芳</td>
                          <td>2023-10-14</td>
                          <td>¥356.00</td>
                          <td><span class="status pending">待付款</span></td>
                          <td><button class="btn btn-primary">查看</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `
  },
  products: {
      title: "商品管理",
      subtitle: "管理您的商品信息",
      submenu: [
          {
              groupTitle: "商品操作",
              items: [
                  { id: "list", icon: "fas fa-boxes", title: "商品列表" },
                  { id: "add", icon: "fas fa-plus-circle", title: "添加商品" },
                  { id: "categories", icon: "fas fa-tags", title: "分类管理" }
              ]
          },
          {
              groupTitle: "库存管理",
              items: [
                  { id: "inventory", icon: "fas fa-archive", title: "库存管理" },
                  { id: "replenish", icon: "fas fa-shipping-fast", title: "补货管理" }
              ]
          },
          {
              groupTitle: "商品分析",
              items: [
                  { id: "popular", icon: "fas fa-fire", title: "热销商品" },
                  { id: "analysis", icon: "fas fa-chart-pie", title: "商品分析" }
              ]
          }
      ],
      content: `
          <div class="content-card">
              <div class="card-title">商品概览</div>
              <div class="card-content">
                  <div class="info-box">
                      <div class="info-title">商品总数</div>
                      <div class="info-value">128</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 新增 12 个商品
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">库存预警</div>
                      <div class="info-value">8</div>
                      <div class="info-change down">
                          <i class="fas fa-exclamation-circle"></i> 需要及时补货
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">今日上架</div>
                      <div class="info-value">5</div>
                      <div class="info-change up">
                          <i class="fas fa-check-circle"></i> 已完成
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="content-card">
              <div class="card-title">商品列表</div>
              <table class="data-table">
                  <thead>
                      <tr>
                          <th>商品ID</th>
                          <th>商品名称</th>
                          <th>分类</th>
                          <th>价格</th>
                          <th>库存</th>
                          <th>状态</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#P-10025</td>
                          <td>高端无线蓝牙耳机</td>
                          <td>数码电子</td>
                          <td>¥599.00</td>
                          <td>68</td>
                          <td><span class="status completed">在售</span></td>
                      </tr>
                      <tr>
                          <td>#P-10024</td>
                          <td>全自动咖啡机</td>
                          <td>家用电器</td>
                          <td>¥1,299.00</td>
                          <td>12</td>
                          <td><span class="status shipped">在售</span></td>
                      </tr>
                      <tr>
                          <td>#P-10023</td>
                          <td>纯棉四件套</td>
                          <td>家居家纺</td>
                          <td>¥399.00</td>
                          <td>0</td>
                          <td><span class="status pending">缺货</span></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `
  },
  customers: {
      title: "客户管理",
      subtitle: "处理您的店铺订单",
      submenu: [
          {
              groupTitle: "基础管理",
              items: [
                  { id: "overview", icon: "fas fa-chart-line", title: "客户概况" },
                  { id: "list", icon: "fas fa-list", title: "客户列表" },
                  { id: "import", icon: "fas fa-upload", title: "客户导入" },
                  { id: "migrate", icon: "fas fa-exchange-alt", title: "客户迁移" }
              ]
          },
          {
              groupTitle: "标签与分群",
              items: [
                  { id: "tagManage", icon: "fas fa-tags", title: "标签管理" },
                  { id: "group", icon: "fas fa-users-cog", title: "客户分群" }
              ]
          },
          {
              groupTitle: "会员与营销",
              items: [
                  { id: "memberLevel", icon: "fas fa-star", title: "会员等级" },
                  { id: "sceneMarketing", icon: "fas fa-bullhorn", title: "场景营销" },
                  { id: "peopleOperate", icon: "fas fa-user-friends", title: "人群运营" }
              ]
          },
          {
              groupTitle: "权益与积分",
              items: [
                  { id: "benefitCard", icon: "fas fa-id-card", title: "权益卡" },
                  { id: "pointOperate", icon: "fas fa-coins", title: "积分运营" },
                  { id: "customBenefit", icon: "fas fa-gift", title: "自定义权益" }
              ]
          },
          {
              groupTitle: "储值管理",
              items: [
                  { id: "rechargeRule", icon: "fas fa-ruler", title: "储值规则" },
                  { id: "rechargeQuery", icon: "fas fa-search-dollar", title: "储值查询" },
                  { id: "rechargeOperate", icon: "fas fa-money-check-alt", title: "储值运营" },
                  { id: "rechargeSetting", icon: "fas fa-cog", title: "储值设置" }
              ]
          },
          {
              groupTitle: "系统设置",
              items: [
                  { id: "customerSetting", icon: "fas fa-cog", title: "客户设置" }
              ]
          }
      ],
      content: `
          <div class="content-card">
              <div class="card-title">订单概览</div>
              <div class="card-content">
                  <div class="info-box">
                      <div class="info-title">待处理订单</div>
                      <div class="info-value">18</div>
                      <div class="info-change down">
                          <i class="fas fa-exclamation-circle"></i> 需要及时处理
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">今日订单数</div>
                      <div class="info-value">42</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 较昨日增加 8%
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">待发货订单</div>
                      <div class="info-value">26</div>
                      <div class="info-change">
                          <i class="fas fa-truck"></i> 准备发货
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="content-card">
              <div class="card-title">待处理订单</div>
              <table class="data-table">
                  <thead>
                      <tr>
                          <th>订单号</th>
                          <th>客户</th>
                          <th>金额</th>
                          <th>下单时间</th>
                          <th>状态</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#ORD-2023-00128</td>
                          <td>刘明</td>
                          <td>¥899.00</td>
                          <td>2023-10-15 14:25</td>
                          <td><span class="status pending">待付款</span></td>
                          <td><button class="btn btn-primary">处理</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00127</td>
                          <td>张丽</td>
                          <td>¥1,568.00</td>
                          <td>2023-10-15 13:42</td>
                          <td><span class="status pending">待发货</span></td>
                          <td><button class="btn btn-primary">发货</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00126</td>
                          <td>王强</td>
                          <td>¥356.00</td>
                          <td>2023-10-15 11:15</td>
                          <td><span class="status pending">待审核</span></td>
                          <td><button class="btn btn-primary">审核</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `
  },
  orders: {
      title: "订单设置",
      subtitle: "处理您的店铺订单",
      submenu: [
          {
              groupTitle: "订单操作",
              items: [
                  { id: "all", icon: "fas fa-list", title: "全部订单" },
                  { id: "pending", icon: "fas fa-hourglass-half", title: "待处理" },
                  { id: "shipped", icon: "fas fa-truck", title: "已发货" }
              ]
          },
          {
              groupTitle: "订单处理",
              items: [
                  { id: "process", icon: "fas fa-cog", title: "批量处理" },
                  { id: "refund", icon: "fas fa-undo", title: "退款管理" }
              ]
          },
          {
              groupTitle: "物流管理",
              items: [
                  { id: "logistics", icon: "fas fa-shipping-fast", title: "物流设置" },
                  { id: "templates", icon: "fas fa-file-alt", title: "打印模板" }
              ]
          }
      ],
      content: `
          <div class="content-card">
              <div class="card-title">订单概览</div>
              <div class="card-content">
                  <div class="info-box">
                      <div class="info-title">待处理订单</div>
                      <div class="info-value">18</div>
                      <div class="info-change down">
                          <i class="fas fa-exclamation-circle"></i> 需要及时处理
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">今日订单数</div>
                      <div class="info-value">42</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 较昨日增加 8%
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">待发货订单</div>
                      <div class="info-value">26</div>
                      <div class="info-change">
                          <i class="fas fa-truck"></i> 准备发货
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="content-card">
              <div class="card-title">待处理订单</div>
              <table class="data-table">
                  <thead>
                      <tr>
                          <th>订单号</th>
                          <th>客户</th>
                          <th>金额</th>
                          <th>下单时间</th>
                          <th>状态</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#ORD-2023-00128</td>
                          <td>刘明</td>
                          <td>¥899.00</td>
                          <td>2023-10-15 14:25</td>
                          <td><span class="status pending">待付款</span></td>
                          <td><button class="btn btn-primary">处理</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00127</td>
                          <td>张丽</td>
                          <td>¥1,568.00</td>
                          <td>2023-10-15 13:42</td>
                          <td><span class="status pending">待发货</span></td>
                          <td><button class="btn btn-primary">发货</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00126</td>
                          <td>王强</td>
                          <td>¥356.00</td>
                          <td>2023-10-15 11:15</td>
                          <td><span class="status pending">待审核</span></td>
                          <td><button class="btn btn-primary">审核</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `
  },
  marketing: {
      title: "营销管理",
      subtitle: "处理您的店铺订单",
      submenu: [
          {
              groupTitle: "基础查询",
              items: [
                  { id: "marketingManage", icon: "fas fa-bullhorn", title: "营销管理" },
                  { id: "activityQuery", icon: "fas fa-search", title: "活动查询" },
                  { id: "productQuery", icon: "fas fa-boxes", title: "商品查询" },
                  { id: "exclusionQuery", icon: "fas fa-ban", title: "互斥查询" }
              ]
          },
          {
              groupTitle: "客户与提醒",
              items: [
                  { id: "expireRemind", icon: "fas fa-bell", title: "到期提醒" },
                  { id: "blacklist", icon: "fas fa-user-slash", title: "黑名单" }
              ]
          },
          {
              groupTitle: "渠道与推广",
              items: [
                  { id: "omniChannel", icon: "fas fa-globe", title: "全渠道经营" },
                  { id: "distribution", icon: "fas fa-hand-holding-usd", title: "分销分佣" },
                  { id: "adPromotion", icon: "fas fa-ad", title: "广告推广" }
              ]
          },
          {
              groupTitle: "辅助工具",
              items: [
                  { id: "commonTools", icon: "fas fa-tools", title: "常用工具" }
              ]
          }
      ],
      content: `
          <div class="content-card">
              <div class="card-title">订单概览</div>
              <div class="card-content">
                  <div class="info-box">
                      <div class="info-title">待处理订单</div>
                      <div class="info-value">18</div>
                      <div class="info-change down">
                          <i class="fas fa-exclamation-circle"></i> 需要及时处理
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">今日订单数</div>
                      <div class="info-value">42</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 较昨日增加 8%
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">待发货订单</div>
                      <div class="info-value">26</div>
                      <div class="info-change">
                          <i class="fas fa-truck"></i> 准备发货
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="content-card">
              <div class="card-title">待处理订单</div>
              <table class="data-table">
                  <thead>
                      <tr>
                          <th>订单号</th>
                          <th>客户</th>
                          <th>金额</th>
                          <th>下单时间</th>
                          <th>状态</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#ORD-2023-00128</td>
                          <td>刘明</td>
                          <td>¥899.00</td>
                          <td>2023-10-15 14:25</td>
                          <td><span class="status pending">待付款</span></td>
                          <td><button class="btn btn-primary">处理</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00127</td>
                          <td>张丽</td>
                          <td>¥1,568.00</td>
                          <td>2023-10-15 13:42</td>
                          <td><span class="status pending">待发货</span></td>
                          <td><button class="btn btn-primary">发货</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00126</td>
                          <td>王强</td>
                          <td>¥356.00</td>
                          <td>2023-10-15 11:15</td>
                          <td><span class="status pending">待审核</span></td>
                          <td><button class="btn btn-primary">审核</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `
  },
  settings: {
      title: "设置管理",
      subtitle: "处理您的店铺订单",
      submenu: [
          {
              groupTitle: "通用配置",
              items: [
                  { id: "storeConfig", icon: "fas fa-store", title: "店铺设置" },
                  { id: "productConfig", icon: "fas fa-boxes", title: "商品设置" },
                  { id: "tradeConfig", icon: "fas fa-exchange-alt", title: "交易设置" }
              ]
          },
          {
              groupTitle: "店铺信息",
              items: [
                  { id: "storeInfo", icon: "fas fa-info-circle", title: "店铺信息" },
                  { id: "contactUs", icon: "fas fa-envelope", title: "联系我们" },
                  { id: "distributionInfo", icon: "fas fa-handshake", title: "分销信息" },
                  { id: "returnInfo", icon: "fas fa-undo", title: "退货信息" }
              ]
          },
          {
              groupTitle: "店铺管理",
              items: [
                  { id: "storeManage", icon: "fas fa-building", title: "门店管理" },
                  { id: "addressLib", icon: "fas fa-map-marker-alt", title: "商家地址库" },
                  { id: "staffManage", icon: "fas fa-users-cog", title: "员工管理" },
                  { id: "roleManage", icon: "fas fa-user-shield", title: "角色管理" },
                  { id: "serviceProvider", icon: "fas fa-briefcase", title: "我的服务商" }
              ]
          },
          {
              groupTitle: "客户配置",
              items: [
                  { id: "profileConfig", icon: "fas fa-user-cog", title: "资料项设置" },
                  { id: "userAuth", icon: "fas fa-user-lock", title: "用户授权" },
                  { id: "couponAuth", icon: "fas fa-ticket-alt", title: "卡券授权" }
              ]
          },
          {
              groupTitle: "资产与硬件",
              items: [
                  { id: "assetConfig", icon: "fas fa-cog", title: "资产设置" },
                  { id: "hardwareDevice", icon: "fas fa-laptop-code", title: "硬件设备" },
                  { id: "receipt", icon: "fas fa-file-invoice", title: "收银小票" },
                  { id: "electronicWaybill", icon: "fas fa-file-alt", title: "电子面单" },
                  { id: "voiceRemind", icon: "fas fa-bell", title: "语音提醒" },
                  { id: "speaker", icon: "fas fa-bullhorn", title: "音箱" }
              ]
          },
          {
              groupTitle: "安全保障",
              items: [
                  { id: "securityOverview", icon: "fas fa-shield-alt", title: "概览" },
                  { id: "consumerProtect", icon: "fas fa-user-shield", title: "消费保障" },
                  { id: "blacklist", icon: "fas fa-ban", title: "黑名单管理" },
                  { id: "whitelist", icon: "fas fa-check", title: "白名单管理" },
                  { id: "privacyWaybill", icon: "fas fa-user-secret", title: "隐私面单" },
                  { id: "dataDesensitization", icon: "fas fa-eye-slash", title: "数据脱敏" },
                  { id: "watermark", icon: "fas fa-tint", title: "水印管理" },
                  { id: "operationRecord", icon: "fas fa-history", title: "操作记录" },
                  { id: "staffRisk", icon: "fas fa-exclamation-triangle", title: "员工风险" },
                  { id: "decryptManage", icon: "fas fa-unlock", title: "解密管理" }
              ]
          }
      ],
      content: `
          <div class="content-card">
              <div class="card-title">订单概览</div>
              <div class="card-content">
                  <div class="info-box">
                      <div class="info-title">待处理订单</div>
                      <div class="info-value">18</div>
                      <div class="info-change down">
                          <i class="fas fa-exclamation-circle"></i> 需要及时处理
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">今日订单数</div>
                      <div class="info-value">42</div>
                      <div class="info-change up">
                          <i class="fas fa-arrow-up"></i> 较昨日增加 8%
                      </div>
                  </div>
                  <div class="info-box">
                      <div class="info-title">待发货订单</div>
                      <div class="info-value">26</div>
                      <div class="info-change">
                          <i class="fas fa-truck"></i> 准备发货
                      </div>
                  </div>
              </div>
          </div>
          
          <div class="content-card">
              <div class="card-title">待处理订单</div>
              <table class="data-table">
                  <thead>
                      <tr>
                          <th>订单号</th>
                          <th>客户</th>
                          <th>金额</th>
                          <th>下单时间</th>
                          <th>状态</th>
                          <th>操作</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>#ORD-2023-00128</td>
                          <td>刘明</td>
                          <td>¥899.00</td>
                          <td>2023-10-15 14:25</td>
                          <td><span class="status pending">待付款</span></td>
                          <td><button class="btn btn-primary">处理</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00127</td>
                          <td>张丽</td>
                          <td>¥1,568.00</td>
                          <td>2023-10-15 13:42</td>
                          <td><span class="status pending">待发货</span></td>
                          <td><button class="btn btn-primary">发货</button></td>
                      </tr>
                      <tr>
                          <td>#ORD-2023-00126</td>
                          <td>王强</td>
                          <td>¥356.00</td>
                          <td>2023-10-15 11:15</td>
                          <td><span class="status pending">待审核</span></td>
                          <td><button class="btn btn-primary">审核</button></td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `
  },

};

// 获取DOM元素
const menuItems = document.querySelectorAll('.menu-item');
const subSidebar = document.getElementById('subSidebar');
const dynamicContent = document.getElementById('dynamicContent');
const contentTitle = document.getElementById('contentTitle');
const contentSubtitle = document.getElementById('contentSubtitle');
const mobileSubmenuToggle = document.getElementById('mobileSubmenuToggle');

// 新增：根据菜单项 ID 映射 HTML 文件路径
const pageMap = {
  // 概览模块
  overview: 'page/overview.html',
  sales: 'page/sales-analysis.html',
  realtime: 'page/realtime.html',
  performance: 'page/performance.html',
  reviews: 'page/reviews.html',
//   scrollTest: 'page/scroll-test.html', // 滚动测试页面
  
  // 商品模块
  list: 'page/product-list.html',
  add: 'page/product-add.html',
  categories: 'page/categories.html',
  inventory: 'page/inventory.html',
  replenish: 'page/replenish.html',
  popular: 'page/popular.html',
  analysis: 'page/product-analysis.html',
  
  // 客户模块
  import: 'page/customer-import.html',
  migrate: 'page/customer-migrate.html',
  tagManage: 'page/tag-manage.html',
  group: 'page/customer-group.html',
  memberLevel: 'page/member-level.html',
  sceneMarketing: 'page/scene-marketing.html',
  peopleOperate: 'page/people-operate.html',
  benefitCard: 'page/benefit-card.html',
  pointOperate: 'page/point-operate.html',
  customBenefit: 'page/custom-benefit.html',
  rechargeRule: 'page/recharge-rule.html',
  rechargeQuery: 'page/recharge-query.html',
  rechargeOperate: 'page/recharge-operate.html',
  rechargeSetting: 'page/recharge-setting.html',
  customerSetting: 'page/customer-setting.html',
  
  // 订单模块
  all: 'page/order-all.html',
  pending: 'page/order-pending.html',
  shipped: 'page/order-shipped.html',
  process: 'page/order-process.html',
  refund: 'page/order-refund.html',
  logistics: 'page/logistics.html',
  templates: 'page/templates.html',
  
  // 营销模块
  marketingManage: 'page/marketing-manage.html',
  activityQuery: 'page/activity-query.html',
  productQuery: 'page/product-query.html',
  exclusionQuery: 'page/exclusion-query.html',
  expireRemind: 'page/expire-remind.html',
  blacklist: 'page/blacklist.html',
  omniChannel: 'page/omni-channel.html',
  distribution: 'page/distribution.html',
  adPromotion: 'page/ad-promotion.html',
  commonTools: 'page/common-tools.html',
  
  // 设置模块
  storeConfig: 'page/store-config.html',
  productConfig: 'page/product-config.html',
  tradeConfig: 'page/trade-config.html',
  storeInfo: 'page/store-info.html',
  contactUs: 'page/contact-us.html',
  distributionInfo: 'page/distribution-info.html',
  returnInfo: 'page/return-info.html',
  storeManage: 'page/store-manage.html',
  addressLib: 'page/address-lib.html',
  staffManage: 'page/staff-manage.html',
  roleManage: 'page/role-manage.html',
  serviceProvider: 'page/service-provider.html',
  profileConfig: 'page/profile-config.html',
  userAuth: 'page/user-auth.html',
  couponAuth: 'page/coupon-auth.html',
  assetConfig: 'page/asset-config.html',
  hardwareDevice: 'page/hardware-device.html',
  receipt: 'page/receipt.html',
  electronicWaybill: 'page/electronic-waybill.html',
  voiceRemind: 'page/voice-remind.html',
  speaker: 'page/speaker.html',
  securityOverview: 'page/security-overview.html',
  consumerProtect: 'page/consumer-protect.html',
  whitelist: 'page/whitelist.html',
  privacyWaybill: 'page/privacy-waybill.html',
  dataDesensitization: 'page/data-desensitization.html',
  watermark: 'page/watermark.html',
  operationRecord: 'page/operation-record.html',
  staffRisk: 'page/staff-risk.html',
  decryptManage: 'page/decrypt-manage.html'
};

// 初始化页面
function initPage() {
  // 默认激活概览菜单
  activateMenu('dashboard');
  renderSubmenu('dashboard');
  updateContent('dashboard');
}

// 激活菜单项
function activateMenu(menuId) {
  // 移除所有激活状态
  menuItems.forEach(item => {
      item.classList.remove('active');
  });

  // 添加激活状态到当前菜单
  document.querySelector(`.menu-item[data-menu="${menuId}"]`).classList.add('active');
}

// 渲染二级菜单
function renderSubmenu(menuId) {
  const menu = menuData[menuId];

  // 清空当前二级菜单
  subSidebar.innerHTML = '';

  // 添加菜单标题
  const header = document.createElement('div');
  header.className = 'submenu-header';
  header.textContent = menu.title;
  subSidebar.appendChild(header);

  // 添加菜单项
  menu.submenu.forEach(group => {
      // 添加分组标题
      const groupTitle = document.createElement('div');
      groupTitle.className = 'group-title';
      groupTitle.textContent = group.groupTitle;
      subSidebar.appendChild(groupTitle);

      // 添加分组项
      group.items.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.className = 'submenu-item';
          menuItem.dataset.id = item.id;

          menuItem.innerHTML = `
              <i class="${item.icon}"></i>
              <span>${item.title}</span>
          `;

          // 默认激活第一项
          if (group === menu.submenu[0] && item === group.items[0]) {
              menuItem.classList.add('active');
          }

          menuItem.addEventListener('click', function () {
              // 移除所有二级菜单项的激活状态
              document.querySelectorAll('.submenu-item').forEach(el => {
                  el.classList.remove('active');
              });
              // 添加激活状态到当前菜单
              this.classList.add('active');
              // 调用 updateContent 更新右侧内容（会触发 fetch 加载 HTML）
              updateContent(menuId);
          });

          subSidebar.appendChild(menuItem);
      });
  });
}

// 更新内容区域
function updateContent(menuId) {
  const menu = menuData[menuId];

  // 更新标题
  contentTitle.textContent = menu.title;
  contentSubtitle.textContent = `${menu.subtitle} ${new Date().toLocaleTimeString()}`;

  // 找到当前激活的二级菜单项
  const activeSubItem = document.querySelector('.submenu-item.active');
  if (activeSubItem) {
      const subItemId = activeSubItem.dataset.id; // 获取二级菜单项的 id
      const htmlPath = pageMap[subItemId];        // 从映射表找 HTML 路径

      if (htmlPath) {
          // 🔥 通过 fetch 加载独立 HTML 文件
          fetch(htmlPath)
              .then(response => {
                  if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                  }
                  return response.text();
              })
              .then(html => {
                  dynamicContent.innerHTML = html; // 渲染到右侧内容区
              })
              .catch(error => {
                  console.error('加载页面失败:', error);
                  dynamicContent.innerHTML = `
                      <div class="content-card">
                          <div class="card-title">页面加载失败</div>
                          <div style="padding: 20px; color: #e74c3c;">
                              <p>加载 ${subItemId} 页面失败，请检查文件路径：${htmlPath}</p>
                              <p>错误信息：${error.message}</p>
                          </div>
                      </div>
                  `;
              });
      } else {
          // 如果没有找到对应的页面文件，显示默认内容
          dynamicContent.innerHTML = menu.content;
      }
  } else {
      // 如果没有激活的二级菜单项，显示默认内容
      dynamicContent.innerHTML = menu.content;
  }

  // 更新时间
  const now = new Date();
  contentSubtitle.textContent = `${menu.subtitle} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

  // 添加菜单项点击事件
  menuItems.forEach(item => {
      item.addEventListener('click', function () {
          const menuId = this.getAttribute('data-menu');
          activateMenu(menuId);
          renderSubmenu(menuId);
          updateContent(menuId);

          // 在移动设备上显示二级菜单
          if (window.innerWidth <= 992) {
              subSidebar.classList.add('active');
          }
      });
  });

  // 移动端二级菜单切换
  mobileSubmenuToggle.addEventListener('click', () => {
      subSidebar.classList.toggle('active');
      mobileSubmenuToggle.innerHTML = subSidebar.classList.contains('active') ?
          '<i class="fas fa-chevron-left"></i>' : '<i class="fas fa-chevron-right"></i>';
  });

  // 初始化页面
  window.addEventListener('DOMContentLoaded', initPage);