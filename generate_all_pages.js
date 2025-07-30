const fs = require('fs');
const path = require('path');

// 完整的页面模板数据
const pageTemplates = {
    // 商品模块 - 缺失的页面
    'replenish': {
        title: '补货管理',
        content: `
<div class="content-card">
    <div class="card-title">补货管理</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">待补货商品</div>
            <div class="info-value">8</div>
            <div class="info-change down">
                <i class="fas fa-exclamation-circle"></i> 需要及时处理
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">今日补货</div>
            <div class="info-value">12</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较昨日增加 3
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">补货金额</div>
            <div class="info-value">¥15,680</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较昨日增长 8%
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">供应商</div>
            <div class="info-value">6</div>
            <div class="info-change">
                <i class="fas fa-handshake"></i> 合作关系良好
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">待补货商品列表</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>商品名称</th>
                <th>当前库存</th>
                <th>安全库存</th>
                <th>建议补货量</th>
                <th>供应商</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>全自动咖啡机</td>
                <td>12</td>
                <td>20</td>
                <td>30</td>
                <td>咖啡设备供应商</td>
                <td><span class="status pending">待补货</span></td>
                <td><button class="btn btn-primary">补货</button></td>
            </tr>
            <tr>
                <td>智能手表</td>
                <td>5</td>
                <td>15</td>
                <td>25</td>
                <td>数码科技供应商</td>
                <td><span class="status pending">待补货</span></td>
                <td><button class="btn btn-primary">补货</button></td>
            </tr>
            <tr>
                <td>纯棉四件套</td>
                <td>0</td>
                <td>10</td>
                <td>50</td>
                <td>家纺用品供应商</td>
                <td><span class="status pending">紧急补货</span></td>
                <td><button class="btn" style="background: #e74c3c; color: white;">紧急补货</button></td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    'popular': {
        title: '热销商品',
        content: `
<div class="content-card">
    <div class="card-title">热销商品分析</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">热销商品数</div>
            <div class="info-value">15</div>
            <div class="info-change up">
                <i class="fas fa-fire"></i> 较上月增加 3
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">热销销售额</div>
            <div class="info-value">¥89,456</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 占总销售额 65%
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">平均销量</div>
            <div class="info-value">156</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较上月增长 12%
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">转化率</div>
            <div class="info-value">8.5%</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 高于平均水平
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">热销商品排行</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>排名</th>
                <th>商品名称</th>
                <th>销量</th>
                <th>销售额</th>
                <th>增长率</th>
                <th>状态</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>无线蓝牙耳机</td>
                <td>234</td>
                <td>¥140,400</td>
                <td>+25%</td>
                <td><span class="status completed">热销</span></td>
            </tr>
            <tr>
                <td>2</td>
                <td>全自动咖啡机</td>
                <td>189</td>
                <td>¥245,700</td>
                <td>+18%</td>
                <td><span class="status completed">热销</span></td>
            </tr>
            <tr>
                <td>3</td>
                <td>智能手表</td>
                <td>156</td>
                <td>¥140,400</td>
                <td>+32%</td>
                <td><span class="status completed">热销</span></td>
            </tr>
            <tr>
                <td>4</td>
                <td>纯棉四件套</td>
                <td>145</td>
                <td>¥57,800</td>
                <td>+15%</td>
                <td><span class="status completed">热销</span></td>
            </tr>
            <tr>
                <td>5</td>
                <td>高端无线蓝牙耳机</td>
                <td>123</td>
                <td>¥73,800</td>
                <td>+28%</td>
                <td><span class="status completed">热销</span></td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    'product-analysis': {
        title: '商品分析',
        content: `
<div class="content-card">
    <div class="card-title">商品分析概览</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">商品总数</div>
            <div class="info-value">128</div>
            <div class="info-change up">
                <i class="fas fa-boxes"></i> 本月新增 12
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">活跃商品</div>
            <div class="info-value">98</div>
            <div class="info-change up">
                <i class="fas fa-check-circle"></i> 活跃率 76%
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">滞销商品</div>
            <div class="info-value">15</div>
            <div class="info-change down">
                <i class="fas fa-exclamation-circle"></i> 需要处理
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">平均利润率</div>
            <div class="info-value">32%</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较上月提升 2%
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">分类销售分析</div>
    <div style="padding: 20px;">
        <h3>各分类销售表现</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <h4>数码电子</h4>
                <p>销售额：¥156,789</p>
                <p>占比：45%</p>
                <p style="color: #2ecc71;">增长率：+18%</p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <h4>家用电器</h4>
                <p>销售额：¥89,456</p>
                <p>占比：26%</p>
                <p style="color: #2ecc71;">增长率：+12%</p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <h4>家居家纺</h4>
                <p>销售额：¥67,234</p>
                <p>占比：19%</p>
                <p style="color: #e74c3c;">增长率：-3%</p>
            </div>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
                <h4>其他</h4>
                <p>销售额：¥34,567</p>
                <p>占比：10%</p>
                <p style="color: #2ecc71;">增长率：+8%</p>
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">滞销商品处理</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>商品名称</th>
                <th>库存</th>
                <th>销量</th>
                <th>上架时间</th>
                <th>建议操作</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>老款蓝牙耳机</td>
                <td>45</td>
                <td>2</td>
                <td>2023-08-15</td>
                <td>降价促销</td>
                <td><button class="btn btn-primary">促销</button></td>
            </tr>
            <tr>
                <td>过季服装</td>
                <td>23</td>
                <td>1</td>
                <td>2023-07-20</td>
                <td>清仓处理</td>
                <td><button class="btn" style="background: #e74c3c; color: white;">清仓</button></td>
            </tr>
            <tr>
                <td>旧款手机壳</td>
                <td>67</td>
                <td>3</td>
                <td>2023-09-01</td>
                <td>下架处理</td>
                <td><button class="btn" style="background: #95a5a6; color: white;">下架</button></td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    // 订单模块 - 缺失的页面
    'order-pending': {
        title: '待处理订单',
        content: `
<div class="content-card">
    <div class="card-title">待处理订单概览</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">待付款订单</div>
            <div class="info-value">12</div>
            <div class="info-change down">
                <i class="fas fa-clock"></i> 需要及时处理
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">待发货订单</div>
            <div class="info-value">18</div>
            <div class="info-change down">
                <i class="fas fa-truck"></i> 准备发货
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">待审核订单</div>
            <div class="info-value">5</div>
            <div class="info-change down">
                <i class="fas fa-search"></i> 需要审核
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">今日新增</div>
            <div class="info-value">35</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较昨日增加 8
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">待处理订单列表</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>订单号</th>
                <th>客户信息</th>
                <th>商品信息</th>
                <th>金额</th>
                <th>下单时间</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#ORD-2023-00130</td>
                <td>
                    <div>张明</div>
                    <div style="font-size: 12px; color: #7f8c8d;">139****1234</div>
                </td>
                <td>
                    <div>无线蓝牙耳机</div>
                    <div style="font-size: 12px; color: #7f8c8d;">数量：1</div>
                </td>
                <td>¥568.00</td>
                <td>2023-10-15 15:30</td>
                <td><span class="status pending">待付款</span></td>
                <td>
                    <button class="btn btn-primary" style="margin-right: 5px;">提醒</button>
                    <button class="btn" style="background: #e74c3c; color: white;">取消</button>
                </td>
            </tr>
            <tr>
                <td>#ORD-2023-00129</td>
                <td>
                    <div>李华</div>
                    <div style="font-size: 12px; color: #7f8c8d;">138****5678</div>
                </td>
                <td>
                    <div>全自动咖啡机</div>
                    <div style="font-size: 12px; color: #7f8c8d;">数量：1</div>
                </td>
                <td>¥1,248.00</td>
                <td>2023-10-15 15:25</td>
                <td><span class="status pending">待发货</span></td>
                <td>
                    <button class="btn btn-primary" style="margin-right: 5px;">查看</button>
                    <button class="btn" style="background: #27ae60; color: white;">发货</button>
                </td>
            </tr>
            <tr>
                <td>#ORD-2023-00128</td>
                <td>
                    <div>王芳</div>
                    <div style="font-size: 12px; color: #7f8c8d;">137****9876</div>
                </td>
                <td>
                    <div>智能手表</div>
                    <div style="font-size: 12px; color: #7f8c8d;">数量：1</div>
                </td>
                <td>¥899.00</td>
                <td>2023-10-15 15:20</td>
                <td><span class="status pending">待审核</span></td>
                <td>
                    <button class="btn btn-primary" style="margin-right: 5px;">查看</button>
                    <button class="btn" style="background: #27ae60; color: white;">审核</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    'order-shipped': {
        title: '已发货订单',
        content: `
<div class="content-card">
    <div class="card-title">已发货订单概览</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">今日发货</div>
            <div class="info-value">26</div>
            <div class="info-change up">
                <i class="fas fa-truck"></i> 较昨日增加 5
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">在途订单</div>
            <div class="info-value">42</div>
            <div class="info-change">
                <i class="fas fa-shipping-fast"></i> 正常配送
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">平均配送时间</div>
            <div class="info-value">2.3天</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较上月缩短 0.5天
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">配送满意度</div>
            <div class="info-value">96%</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较上月提升 2%
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">已发货订单列表</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>订单号</th>
                <th>客户信息</th>
                <th>商品信息</th>
                <th>发货时间</th>
                <th>物流公司</th>
                <th>物流状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#ORD-2023-00127</td>
                <td>
                    <div>刘强</div>
                    <div style="font-size: 12px; color: #7f8c8d;">136****5432</div>
                </td>
                <td>
                    <div>无线蓝牙耳机</div>
                    <div style="font-size: 12px; color: #7f8c8d;">数量：1</div>
                </td>
                <td>2023-10-15 14:30</td>
                <td>顺丰速运</td>
                <td><span class="status shipped">运输中</span></td>
                <td><button class="btn btn-primary">跟踪</button></td>
            </tr>
            <tr>
                <td>#ORD-2023-00126</td>
                <td>
                    <div>陈丽</div>
                    <div style="font-size: 12px; color: #7f8c8d;">135****8765</div>
                </td>
                <td>
                    <div>全自动咖啡机</div>
                    <div style="font-size: 12px; color: #7f8c8d;">数量：1</div>
                </td>
                <td>2023-10-15 14:25</td>
                <td>圆通速递</td>
                <td><span class="status shipped">运输中</span></td>
                <td><button class="btn btn-primary">跟踪</button></td>
            </tr>
            <tr>
                <td>#ORD-2023-00125</td>
                <td>
                    <div>张伟</div>
                    <div style="font-size: 12px; color: #7f8c8d;">139****1234</div>
                </td>
                <td>
                    <div>智能手表</div>
                    <div style="font-size: 12px; color: #7f8c8d;">数量：1</div>
                </td>
                <td>2023-10-15 14:20</td>
                <td>中通快递</td>
                <td><span class="status completed">已签收</span></td>
                <td><button class="btn btn-primary">查看</button></td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    'order-process': {
        title: '批量处理',
        content: `
<div class="content-card">
    <div class="card-title">批量订单处理</div>
    <div style="padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3>批量操作</h3>
            <div style="display: flex; gap: 10px;">
                <button class="btn btn-primary">
                    <i class="fas fa-check"></i> 批量发货
                </button>
                <button class="btn" style="background: #27ae60; color: white;">
                    <i class="fas fa-print"></i> 批量打印
                </button>
                <button class="btn" style="background: #f39c12; color: white;">
                    <i class="fas fa-envelope"></i> 批量通知
                </button>
            </div>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
            <h4>处理统计</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 10px;">
                <div>
                    <strong>待处理：</strong> 18 个订单
                </div>
                <div>
                    <strong>已选择：</strong> <span id="selectedCount">0</span> 个订单
                </div>
                <div>
                    <strong>预计时间：</strong> 5 分钟
                </div>
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">待批量处理订单</div>
    <table class="data-table">
        <thead>
            <tr>
                <th><input type="checkbox" id="selectAll"></th>
                <th>订单号</th>
                <th>客户</th>
                <th>商品</th>
                <th>金额</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><input type="checkbox" class="order-checkbox"></td>
                <td>#ORD-2023-00130</td>
                <td>张明</td>
                <td>无线蓝牙耳机</td>
                <td>¥568.00</td>
                <td><span class="status pending">待发货</span></td>
                <td><button class="btn btn-primary">处理</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" class="order-checkbox"></td>
                <td>#ORD-2023-00129</td>
                <td>李华</td>
                <td>全自动咖啡机</td>
                <td>¥1,248.00</td>
                <td><span class="status pending">待发货</span></td>
                <td><button class="btn btn-primary">处理</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" class="order-checkbox"></td>
                <td>#ORD-2023-00128</td>
                <td>王芳</td>
                <td>智能手表</td>
                <td>¥899.00</td>
                <td><span class="status pending">待发货</span></td>
                <td><button class="btn btn-primary">处理</button></td>
            </tr>
            <tr>
                <td><input type="checkbox" class="order-checkbox"></td>
                <td>#ORD-2023-00127</td>
                <td>刘强</td>
                <td>纯棉四件套</td>
                <td>¥356.00</td>
                <td><span class="status pending">待发货</span></td>
                <td><button class="btn btn-primary">处理</button></td>
            </tr>
        </tbody>
    </table>
</div>

<script>
// 全选功能
document.getElementById('selectAll').addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.order-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = this.checked;
    });
    updateSelectedCount();
});

// 更新选中数量
function updateSelectedCount() {
    const checkedBoxes = document.querySelectorAll('.order-checkbox:checked');
    document.getElementById('selectedCount').textContent = checkedBoxes.length;
}

// 监听单个复选框变化
document.querySelectorAll('.order-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedCount);
});
</script>`
    },
    'order-refund': {
        title: '退款管理',
        content: `
<div class="content-card">
    <div class="card-title">退款管理概览</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">待处理退款</div>
            <div class="info-value">8</div>
            <div class="info-change down">
                <i class="fas fa-exclamation-circle"></i> 需要及时处理
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">今日退款</div>
            <div class="info-value">12</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较昨日增加 3
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">退款金额</div>
            <div class="info-value">¥3,456</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较昨日增加 ¥1,200
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">退款率</div>
            <div class="info-value">2.3%</div>
            <div class="info-change down">
                <i class="fas fa-arrow-down"></i> 较上月下降 0.5%
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">退款申请列表</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>退款单号</th>
                <th>原订单号</th>
                <th>客户信息</th>
                <th>退款金额</th>
                <th>申请时间</th>
                <th>退款原因</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>#REF-2023-001</td>
                <td>#ORD-2023-00125</td>
                <td>
                    <div>张明</div>
                    <div style="font-size: 12px; color: #7f8c8d;">139****1234</div>
                </td>
                <td>¥568.00</td>
                <td>2023-10-15 14:30</td>
                <td>商品质量问题</td>
                <td><span class="status pending">待审核</span></td>
                <td>
                    <button class="btn btn-primary" style="margin-right: 5px;">审核</button>
                    <button class="btn" style="background: #e74c3c; color: white;">拒绝</button>
                </td>
            </tr>
            <tr>
                <td>#REF-2023-002</td>
                <td>#ORD-2023-00124</td>
                <td>
                    <div>李华</div>
                    <div style="font-size: 12px; color: #7f8c8d;">138****5678</div>
                </td>
                <td>¥1,248.00</td>
                <td>2023-10-15 13:45</td>
                <td>客户取消订单</td>
                <td><span class="status completed">已退款</span></td>
                <td><button class="btn btn-primary">查看</button></td>
            </tr>
            <tr>
                <td>#REF-2023-003</td>
                <td>#ORD-2023-00123</td>
                <td>
                    <div>王芳</div>
                    <div style="font-size: 12px; color: #7f8c8d;">137****9876</div>
                </td>
                <td>¥356.00</td>
                <td>2023-10-15 12:20</td>
                <td>发货延迟</td>
                <td><span class="status pending">待处理</span></td>
                <td>
                    <button class="btn btn-primary" style="margin-right: 5px;">处理</button>
                    <button class="btn" style="background: #27ae60; color: white;">同意</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>`
    },
    'logistics': {
        title: '物流设置',
        content: `
<div class="content-card">
    <div class="card-title">物流设置</div>
    <div style="padding: 20px;">
        <h3>物流公司配置</h3>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <p>管理合作的物流公司信息</p>
            <button class="btn btn-primary">
                <i class="fas fa-plus"></i> 添加物流公司
            </button>
        </div>
        
        <table class="data-table">
            <thead>
                <tr>
                    <th>物流公司</th>
                    <th>合作状态</th>
                    <th>配送范围</th>
                    <th>收费标准</th>
                    <th>联系方式</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>顺丰速运</td>
                    <td><span class="status completed">合作中</span></td>
                    <td>全国</td>
                    <td>首重12元，续重2元/kg</td>
                    <td>400-811-1111</td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #e74c3c; color: white;">停用</button>
                    </td>
                </tr>
                <tr>
                    <td>圆通速递</td>
                    <td><span class="status completed">合作中</span></td>
                    <td>全国</td>
                    <td>首重8元，续重1.5元/kg</td>
                    <td>400-889-0953</td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #e74c3c; color: white;">停用</button>
                    </td>
                </tr>
                <tr>
                    <td>中通快递</td>
                    <td><span class="status completed">合作中</span></td>
                    <td>全国</td>
                    <td>首重10元，续重1.8元/kg</td>
                    <td>400-827-0270</td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #e74c3c; color: white;">停用</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="content-card">
    <div class="card-title">配送区域设置</div>
    <div style="padding: 20px;">
        <h3>配送区域管理</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <h4>华东地区</h4>
                <p>配送时间：1-2天</p>
                <p>运费：免费</p>
                <p>状态：<span class="status completed">正常</span></p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <h4>华北地区</h4>
                <p>配送时间：2-3天</p>
                <p>运费：¥5</p>
                <p>状态：<span class="status completed">正常</span></p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <h4>华南地区</h4>
                <p>配送时间：2-3天</p>
                <p>运费：¥8</p>
                <p>状态：<span class="status completed">正常</span></p>
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                <h4>其他地区</h4>
                <p>配送时间：3-5天</p>
                <p>运费：¥12</p>
                <p>状态：<span class="status completed">正常</span></p>
            </div>
        </div>
    </div>
</div>`
    },
    'templates': {
        title: '打印模板',
        content: `
<div class="content-card">
    <div class="card-title">打印模板管理</div>
    <div style="padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3>模板列表</h3>
            <button class="btn btn-primary">
                <i class="fas fa-plus"></i> 新建模板
            </button>
        </div>
        
        <table class="data-table">
            <thead>
                <tr>
                    <th>模板名称</th>
                    <th>类型</th>
                    <th>尺寸</th>
                    <th>创建时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>标准快递单</td>
                    <td>快递单</td>
                    <td>100×180mm</td>
                    <td>2023-09-15</td>
                    <td><span class="status completed">启用</span></td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #f39c12; color: white;">预览</button>
                    </td>
                </tr>
                <tr>
                    <td>热敏标签</td>
                    <td>标签</td>
                    <td>40×60mm</td>
                    <td>2023-09-10</td>
                    <td><span class="status completed">启用</span></td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #f39c12; color: white;">预览</button>
                    </td>
                </tr>
                <tr>
                    <td>发货单</td>
                    <td>发货单</td>
                    <td>A4</td>
                    <td>2023-09-05</td>
                    <td><span class="status completed">启用</span></td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #f39c12; color: white;">预览</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="content-card">
    <div class="card-title">模板预览</div>
    <div style="padding: 20px;">
        <h3>标准快递单模板</h3>
        <div style="border: 2px solid #ddd; padding: 20px; background: white; margin-top: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                <div>
                    <strong>收件人：</strong>张明<br>
                    <strong>电话：</strong>139****1234<br>
                    <strong>地址：</strong>北京市朝阳区xxx街道xxx号
                </div>
                <div style="text-align: right;">
                    <strong>订单号：</strong>#ORD-2023-00130<br>
                    <strong>商品：</strong>无线蓝牙耳机<br>
                    <strong>数量：</strong>1
                </div>
            </div>
            <div style="border-top: 1px solid #ddd; padding-top: 15px;">
                <div style="display: flex; justify-content: space-between;">
                    <div>
                        <strong>寄件人：</strong>商家店铺<br>
                        <strong>电话：</strong>400-123-4567<br>
                        <strong>地址：</strong>上海市浦东新区xxx路xxx号
                    </div>
                    <div style="text-align: right;">
                        <strong>重量：</strong>0.5kg<br>
                        <strong>运费：</strong>¥12<br>
                        <strong>日期：</strong>2023-10-15
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
    }
};

// 生成页面的函数
function generatePage(pageName, template) {
    const pageContent = `<!-- ${pageName}.html -->
${template.content}`;
    
    const filePath = path.join(__dirname, 'page', `${pageName}.html`);
    fs.writeFileSync(filePath, pageContent);
    console.log(`✅ 已生成: ${pageName}.html`);
}

// 确保 page 目录存在
const pageDir = path.join(__dirname, 'page');
if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir);
}

// 生成所有页面
console.log('🚀 开始生成页面文件...\n');

Object.entries(pageTemplates).forEach(([pageName, template]) => {
    generatePage(pageName, template);
});

console.log('\n🎉 页面生成完成！'); 