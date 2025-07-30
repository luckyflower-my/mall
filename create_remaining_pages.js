const fs = require('fs');
const path = require('path');

// 定义所有缺失的页面
const missingPages = [
    'customer-migrate',
    'tag-manage', 
    'customer-group',
    'member-level',
    'scene-marketing',
    'people-operate',
    'benefit-card',
    'point-operate',
    'custom-benefit',
    'recharge-rule',
    'recharge-query',
    'recharge-operate',
    'recharge-setting',
    'customer-setting',
    'marketing-manage',
    'activity-query',
    'product-query',
    'exclusion-query',
    'expire-remind',
    'blacklist',
    'omni-channel',
    'distribution',
    'ad-promotion',
    'common-tools',
    'store-config',
    'product-config',
    'trade-config',
    'store-info',
    'contact-us',
    'distribution-info',
    'return-info',
    'store-manage',
    'address-lib',
    'staff-manage',
    'role-manage',
    'service-provider',
    'profile-config',
    'user-auth',
    'coupon-auth',
    'asset-config',
    'hardware-device',
    'receipt',
    'electronic-waybill',
    'voice-remind',
    'speaker',
    'security-overview',
    'consumer-protect',
    'whitelist',
    'privacy-waybill',
    'data-desensitization',
    'watermark',
    'operation-record',
    'staff-risk',
    'decrypt-manage'
];

// 生成页面的函数
function generatePage(pageName) {
    const pageContent = `<!-- ${pageName}.html -->
<div class="content-card">
    <div class="card-title">${getPageTitle(pageName)}</div>
    <div style="padding: 20px;">
        <h3>🎯 ${getPageTitle(pageName)}</h3>
        <p>这是 ${getPageTitle(pageName)} 页面的内容。该功能正在开发中...</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4>功能说明</h4>
            <p>此页面用于展示 ${getPageTitle(pageName)} 相关的功能和数据。</p>
            <ul style="margin: 10px 0; padding-left: 20px;">
                <li>数据展示</li>
                <li>操作管理</li>
                <li>统计分析</li>
                <li>配置设置</li>
            </ul>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 20px;">
            <div style="background: #e8f4ff; padding: 15px; border-radius: 8px; text-align: center;">
                <h4 style="color: #3498db; margin: 0 0 10px 0;">📊 数据统计</h4>
                <p style="margin: 0; font-size: 24px; font-weight: bold; color: #3498db;">156</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #7f8c8d;">总数量</p>
            </div>
            <div style="background: #d4edda; padding: 15px; border-radius: 8px; text-align: center;">
                <h4 style="color: #27ae60; margin: 0 0 10px 0;">✅ 正常状态</h4>
                <p style="margin: 0; font-size: 24px; font-weight: bold; color: #27ae60;">98%</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #7f8c8d;">成功率</p>
            </div>
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; text-align: center;">
                <h4 style="color: #f39c12; margin: 0 0 10px 0;">⚠️ 待处理</h4>
                <p style="margin: 0; font-size: 24px; font-weight: bold; color: #f39c12;">12</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #7f8c8d;">待处理项</p>
            </div>
            <div style="background: #f8d7da; padding: 15px; border-radius: 8px; text-align: center;">
                <h4 style="color: #dc3545; margin: 0 0 10px 0;">❌ 异常</h4>
                <p style="margin: 0; font-size: 24px; font-weight: bold; color: #dc3545;">3</p>
                <p style="margin: 5px 0 0 0; font-size: 12px; color: #7f8c8d;">异常项</p>
            </div>
        </div>
        
        <div style="margin-top: 30px;">
            <button class="btn btn-primary" style="margin-right: 10px;">
                <i class="fas fa-plus"></i> 添加
            </button>
            <button class="btn" style="background: #27ae60; color: white; margin-right: 10px;">
                <i class="fas fa-edit"></i> 编辑
            </button>
            <button class="btn" style="background: #f39c12; color: white; margin-right: 10px;">
                <i class="fas fa-download"></i> 导出
            </button>
            <button class="btn" style="background: #e74c3c; color: white;">
                <i class="fas fa-trash"></i> 删除
            </button>
        </div>
    </div>
</div>`;
    
    const filePath = path.join(__dirname, 'page', `${pageName}.html`);
    fs.writeFileSync(filePath, pageContent);
    console.log(`✅ 已生成: ${pageName}.html`);
}

// 获取页面标题的函数
function getPageTitle(pageName) {
    const titleMap = {
        'customer-migrate': '客户迁移',
        'tag-manage': '标签管理',
        'customer-group': '客户分群',
        'member-level': '会员等级',
        'scene-marketing': '场景营销',
        'people-operate': '人群运营',
        'benefit-card': '权益卡',
        'point-operate': '积分运营',
        'custom-benefit': '自定义权益',
        'recharge-rule': '储值规则',
        'recharge-query': '储值查询',
        'recharge-operate': '储值运营',
        'recharge-setting': '储值设置',
        'customer-setting': '客户设置',
        'marketing-manage': '营销管理',
        'activity-query': '活动查询',
        'product-query': '商品查询',
        'exclusion-query': '互斥查询',
        'expire-remind': '到期提醒',
        'blacklist': '黑名单',
        'omni-channel': '全渠道经营',
        'distribution': '分销分佣',
        'ad-promotion': '广告推广',
        'common-tools': '常用工具',
        'store-config': '店铺设置',
        'product-config': '商品设置',
        'trade-config': '交易设置',
        'store-info': '店铺信息',
        'contact-us': '联系我们',
        'distribution-info': '分销信息',
        'return-info': '退货信息',
        'store-manage': '门店管理',
        'address-lib': '商家地址库',
        'staff-manage': '员工管理',
        'role-manage': '角色管理',
        'service-provider': '我的服务商',
        'profile-config': '资料项设置',
        'user-auth': '用户授权',
        'coupon-auth': '卡券授权',
        'asset-config': '资产设置',
        'hardware-device': '硬件设备',
        'receipt': '收银小票',
        'electronic-waybill': '电子面单',
        'voice-remind': '语音提醒',
        'speaker': '音箱',
        'security-overview': '安全保障概览',
        'consumer-protect': '消费保障',
        'whitelist': '白名单管理',
        'privacy-waybill': '隐私面单',
        'data-desensitization': '数据脱敏',
        'watermark': '水印管理',
        'operation-record': '操作记录',
        'staff-risk': '员工风险',
        'decrypt-manage': '解密管理'
    };
    
    return titleMap[pageName] || pageName;
}

// 确保 page 目录存在
const pageDir = path.join(__dirname, 'page');
if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir);
}

// 生成所有页面
console.log('🚀 开始生成剩余页面文件...\n');

missingPages.forEach(pageName => {
    generatePage(pageName);
});

console.log('\n🎉 所有页面生成完成！');
console.log(`📊 总共生成了 ${missingPages.length} 个页面文件`); 