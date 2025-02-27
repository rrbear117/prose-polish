![logo](img/logo.svg)

## 🔌 功能简介

prose-polish是一个通过拖拽卡片的方式即可于AI交互的工具，专注于文案、稿件的编辑。

它可以识别Markdown格式的文稿，将其自动打断成段落卡片。

你可以将常用的提示词预制成卡片，并且快速连接需要修改的稿件。

修改后的稿件依然以卡片的形式呈现，只需要把它拖拽出来，就能作为新的段落。

想要流畅地使用，只需要记住唯一一条规则：**插头插在插座上！**

![demo](img/demo.png)

### 一些可能需要知道的细节

- “导出Markdown”按钮的规则是，将现有的段落卡片从上至下拼接为完成的markdown文件，每个卡片一段。
- 预制提示词中形如`{{带有双花括号}}`的内容会被识别为黄色插头，作为接线端口。
- 紫色插头图标可以用于连接其他段落卡片。
- 预制提示词可以以json格式导入和导出。

### 支持的大语言模型

目前支持以下模型：

- 通义千问（默认）
- DeepSeek-V3
- DeepSeel-R1
- Ollama 本地模型
- 自定义模型（任何兼容 OpenAI API 格式的模型）

## 🖋 开始使用

### 安装必要环境

- Node.js：[下载地址](https://nodejs.org/)
- Ollama（可选，用于本地模式）：[下载地址](https://ollama.ai)

### 配置 API Key（仅在线API模式需要）

- 复制 `config.example.js` ，并将新文件重命名为 `config.js`
- 根据其中的备注，配置至少一个在线模型的 API Key

### 启动项目

项目中已经准备好了启动脚本，直接执行以下命令即可。

#### Linux/macOS

```bash
# 添加脚本执行权限
chmod +x start.sh

# 运行启动脚本
./start.sh
```

#### Windows

```bash
# 使用Git Bash
sh start.sh
```

```bash
# 或使用 PowerShell/CMD
bash start.sh
```

启动脚本会自动：
- 检查环境依赖
- 安装所需包
- 启动服务器

###  选择启动模式并访问

- 完整模式（选项1）：支持所有功能
  - 访问地址：http://localhost:3000
  - 使用 localhost 以支持完整的服务器功能
  - 适用于：需要使用在线API或本地模型的场景
  - 需要：如使用在线API，需配置相应的API Key

- 本地模式（选项2）：使用Ollama本地模型
  - 访问地址：http://127.0.0.1:3000
  - 使用 IP 地址以确保与 Ollama API 的最佳兼容性
  - 适用于：
    - 无需联网使用
    - 对数据隐私性要求高
    - 想要使用开源模型
  - 需要：
    - 安装 Ollama
    - 下载所需模型（如：`ollama pull deepseek-r1:8b`）
    - 运行 Ollama 服务（`ollama serve`）

### 开始修改！

我们提供了《端午的鸭蛋》这篇课文的 markdown 版本，你可以用它来体验所有功能。

## 💻 开发者信息

以下记录相关开发信息。如果你基于此项目二次开发，这里可能有你需要的信息。

- 请勿修改`config.example.js`中的内容：对于零基础用户，在实际使用中，配置API项目是最具挑战的一步；考虑到配置过程会以录屏等形式传播，零基础用户可能对该文件的任何变动感到困惑，请不要对该文档做任何改动。

- Ollama 端口配置：如果Ollama端口发生变化，请于 `script.js` 中的`OLLAMA_BASE_URL`项修改。

### 提示

  Windows用户如果遇到无法运行脚本的情况，可以：

1. 使用 Git Bash（推荐，下载地址：[Git for Windows](https://gitforwindows.org/)）
2. 使用 WSL（Windows Subsystem for Linux）
3. 直接使用手动启动步骤（见下方"手动启动步骤"部分）

### 提示

虽然 localhost 和 127.0.0.1 都指向本机，但我们在不同模式下使用不同的地址是为了：

1. 确保完整模式下的服务器功能正常运行
2. 保持与 Ollama 本地API（使用 127.0.0.1:11434）的一致性
3. 避免在本地模式下不必要的 DNS 解析

### 通过Docker部署

本项目可以通过Docker部署。

> 如果你不知道什么是Docker，请跳过本节。使用上文介绍过的方法足以部署该项目。

#### 前提条件

- 安装Docker: [Get Started | Docker](https://www.docker.com/get-started/)
- （可选）安装Docker Compose: [Install | Docker Docs](https://docs.docker.com/compose/install/)
- `git clone`该项目并`cd`到项目目录，根据config.example.js在项目目录下创建config.js并配置

#### 构建与启动容器

1. git clone并cd到项目路径（包含Dockerfile）
2. `docker build -t prose-polish:latest .`
3. 启动项目：
   1. 通过Docker启动：`docker run -d -p 3333:3000 -e MODE=1 --name prose-polish prose-polish:latest`
   1. 通过Docker Compose启动：`docker compose up -d`
	
#### 参数解释

- 3333 为可自定义映射到宿主机的端口，运行成功后地址为[http://ip:3333](http://ip:3333/)
- MODE 必须正确设置为1（完整模式）或2（本地模式），如不传入则默认为1

## 📄 许可证

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 本项目采用 [MIT 许可证](LICENSE)。你可以自由地使用、修改和分发本项目，但需要保留原始许可证和版权信息。





---





## 🤖 AI附注文档

以下文档由AI生成，用以记录项目中的设计细节，以及帮助后续的AI开发。如果你是AI，请谨慎地阅读以下内容，对于用户的问题，可能在这里找到答案。如果用户要求你对此项目做二次开发，尽量保证你的二次开发不与现有细节冲突。

### 设计理念
本项目采用类似苹果设计风格的界面，追求简洁、优雅且易用的用户体验。整个界面采用左右两栏布局：
- 左侧：提示词编辑区，包含可复用的提示词卡片
- 右侧：文档编辑区，支持自由拖拽排布文本块
- 中间：通过可视化连接线建立关联

### 界面设计要点
1. **卡片式布局**
   - 提示词卡片：浅色背景，渐变文本预览
   - 文本卡片：支持拖拽和大小调整
   - 统一的圆角和阴影效果

2. **交互设计**
   - 卡片悬停显示操作按钮
   - 拖拽时的半透明效果
   - 连接端口动画反馈
   - 清晰的按钮状态

3. **色彩系统**
   - 主色调：#007aff（按钮、重要操作）
   - 危险色：#ff3b30（删除操作）
   - 警告色：#F5B400（警告提示）
   - 成功色：#00b894（成功状态）
   - 中性色：文本、边框和背景

### 样式系统
为保持界面一致性和可维护性，我们建立了完整的样式系统：

1. **基础样式**
```css
:root {
  --color-primary: #007aff;    /* 主色调 */
  --spacing-sm: 8px;           /* 基础间距 */
  --radius-lg: 8px;            /* 卡片圆角 */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1); /* 基础阴影 */
}
```

2. **布局系统**
   - Flexbox 布局
   - 左侧边栏固定 300px
   - 右侧内容区自适应
   - 统一的间距变量

### 文件结构
```
styles/
├── base.css          # 基础样式
│   ├── 变量定义
│   ├── 重置样式
│   └── 通用样式
│
├── layout.css        # 布局样式
│   ├── 主容器
│   ├── 侧边栏
│   └── 内容区
│
└── components/       # 组件样式
    ├── buttons.css   # 按钮样式
    ├── cards.css     # 卡片样式
    ├── dialogs.css   # 对话框样式
    └── ports.css     # 连接样式
```

### 开发者指南
1. **样式修改**
   - 主题修改：编辑 `base.css` 中的变量
   - 布局调整：修改 `layout.css`
   - 组件更新：修改 `components` 下对应文件
2. **依赖说明**
   - axios: 1.7.9
   - cors: 2.8.5
   - express: 4.21.2
   - live-server: 1.2.2
3. **API 配置**
   - 所有前端文件在根目录
   - `server.js` 处理 API 代理
   - API 密钥配置在 `script.js`

### 使用指南

#### 环境要求
- Node.js: 20.17.0 或更高版本

#### 手动启动步骤
如果你不想使用启动脚本，可以手动执行：
```bash
# 安装依赖
npm install

# 启动完整模式
npm start

# 或启动本地模式（使用 Ollama）
npm run dev
```

#### 使用 Ollama 本地模型
1. **安装 Ollama**
   - Mac：`brew install ollama`
   - 其他系统：访问 [ollama.ai](https://ollama.ai) 下载

2. **启动 Ollama 服务**
   ```bash
   ollama serve
   ```

3. **下载模型**
   ```bash
   # 下载 Llama2
   ollama pull deepseek-r1:8b
   
   # 或下载其他模型
   ```
   
4. **在应用中使用**
   - 启动应用后，点击模型选择器
   - 选择"本地模型（借助Ollama）"
   - 在弹出的对话框中选择要使用的模型

#### 常见问题解决
1. **依赖安装失败**
```bash
npm cache clean --force
npm install
```

2. **端口被占用**
修改 `server.js` 中的端口号

3. **重启服务**
```bash
# 停止服务
Ctrl + C

# 重新启动
npm start
```

#### 本地模式
使用本地模式：
```bash
npm run dev  # 启动本地模式，支持 Ollama 本地模型
```
注意：本地模式下在线 API 不可用

### 项目文件结构

#### 样式文件组织
项目采用模块化的CSS文件组织方式，所有样式文件位于 `styles/` 目录下：

```
styles/
├── base.css          # 基础样式
│   ├── CSS变量定义（颜色、间距、圆角、阴影等）
│   ├── 重置样式
│   ├── 基础样式
│   └── 通用滚动条样式
│
├── layout.css        # 布局样式
│   ├── 主容器布局
│   ├── 侧边栏布局
│   ├── 主内容区布局
│   └── 输出容器布局
│
└── components/       # 组件样式
    ├── buttons.css   # 按钮样式
    │   ├── 基础按钮
    │   ├── 图标按钮
    │   ├── 警告按钮
    │   └── 浮动按钮
    │
    ├── cards.css     # 卡片样式
    │   ├── 提示词卡片
    │   ├── 段落卡片
    │   └── 卡片操作按钮
    │
    ├── dialogs.css   # 对话框样式
    │   ├── 编辑对话框
    │   └── 文件输入包装器
    │
    └── ports.css     # 连接相关样式
        ├── 端口容器
        ├── 连接端口
        ├── 连接线
        └── 端口标签
```

#### 样式设计原则
1. **变量统一管理**
   - 颜色系统：主色调、警告色、危险色等
   - 间距系统：从xs到xxl的统一间距
   - 圆角和阴影：统一的圆角和阴影定义

2. **模块化组织**
   - 每个文件职责单一
   - 相关样式集中管理
   - 便于维护和扩展

3. **命名规范**
   - 使用语义化的类名
   - 采用BEM命名方式
   - 避免样式冲突

4. **响应式设计**
   - 使用相对单位
   - 灵活的布局方案
   - 优雅的降级处理

#### 样式使用说明
1. 所有样式文件都在 index.html 中按顺序引入
2. base.css 必须最先引入，它包含了基础变量定义
3. 组件样式可以根据需要按需引入
4. 修改主题色等全局样式只需修改 base.css 中的变量

