const fs = require('fs');
const path = require('path');

// 页面模板数据
const pageTemplates = {
    // 商品模块
    'product-add': {
        title: '添加商品',
        content: `
<div class="content-card">
    <div class="card-title">添加新商品</div>
    <div style="padding: 20px;">
        <form>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">商品名称</label>
                <input type="text" placeholder="请输入商品名称" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">商品分类</label>
                <select style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
                    <option>请选择分类</option>
                    <option>数码电子</option>
                    <option>家用电器</option>
                    <option>家居家纺</option>
                </select>
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">商品价格</label>
                <input type="number" placeholder="请输入价格" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">库存数量</label>
                <input type="number" placeholder="请输入库存数量" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">商品描述</label>
                <textarea placeholder="请输入商品描述" rows="4" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">保存商品</button>
        </form>
    </div>
</div>`
    },
    'categories': {
        title: '分类管理',
        content: `
<div class="content-card">
    <div class="card-title">商品分类管理</div>
    <div style="padding: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3>分类列表</h3>
            <button class="btn btn-primary">
                <i class="fas fa-plus"></i> 添加分类
            </button>
        </div>
        <table class="data-table">
            <thead>
                <tr>
                    <th>分类名称</th>
                    <th>商品数量</th>
                    <th>创建时间</th>
                    <th>状态</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>数码电子</td>
                    <td>45</td>
                    <td>2023-09-15</td>
                    <td><span class="status completed">启用</span></td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #e74c3c; color: white;">删除</button>
                    </td>
                </tr>
                <tr>
                    <td>家用电器</td>
                    <td>32</td>
                    <td>2023-09-10</td>
                    <td><span class="status completed">启用</span></td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #e74c3c; color: white;">删除</button>
                    </td>
                </tr>
                <tr>
                    <td>家居家纺</td>
                    <td>28</td>
                    <td>2023-09-05</td>
                    <td><span class="status completed">启用</span></td>
                    <td>
                        <button class="btn btn-primary" style="margin-right: 5px;">编辑</button>
                        <button class="btn" style="background: #e74c3c; color: white;">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>`
    },
    'inventory': {
        title: '库存管理',
        content: `
<div class="content-card">
    <div class="card-title">库存管理</div>
    <div class="card-content">
        <div class="info-box">
            <div class="info-title">总库存商品</div>
            <div class="info-value">128</div>
            <div class="info-change up">
                <i class="fas fa-boxes"></i> 库存充足
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">库存预警</div>
            <div class="info-value">8</div>
            <div class="info-change down">
                <i class="fas fa-exclamation-circle"></i> 需要补货
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">缺货商品</div>
            <div class="info-value">3</div>
            <div class="info-change down">
                <i class="fas fa-times-circle"></i> 急需补货
            </div>
        </div>
        <div class="info-box">
            <div class="info-title">库存总值</div>
            <div class="info-value">¥156,789</div>
            <div class="info-change up">
                <i class="fas fa-arrow-up"></i> 较上月增长
            </div>
        </div>
    </div>
</div>

<div class="content-card">
    <div class="card-title">库存预警商品</div>
    <table class="data-table">
        <thead>
            <tr>
                <th>商品名称</th>
                <th>当前库存</th>
                <th>预警阈值</th>
                <th>状态</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>全自动咖啡机</td>
                <td>12</td>
                <td>20</td>
                <td><span class="status pending">库存不足</span></td>
                <td><button class="btn btn-primary">补货</button></td>
            </tr>
            <tr>
                <td>智能手表</td>
                <td>5</td>
                <td>15</td>
                <td><span class="status pending">库存不足</span></td>
                <td><button class="btn btn-primary">补货</button></td>
            </tr>
            <tr>
                <td>纯棉四件套</td>
                <td>0</td>
                <td>10</td>
                <td><span class="status pending">缺货</span></td>
                <td><button class="btn btn-primary">紧急补货</button></td>
            </tr>
        </tbody>
    </table>
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