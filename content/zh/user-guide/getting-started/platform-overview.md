---
title: 平台概览
description: 了解 BigLedger 革命性的基于 applet 的 Business Operating System（业务操作系统），它能够适应您独特的业务需求
layout: article
weight: 10
tags: [platform, overview, architecture, bos, applets]
audience: [business-users, administrators, developers, all]
complexity: beginner
readingTime: 12 分钟
lastUpdated: 2024-08-18
---

## TLDR（太长不看）
- **BigLedger 是一套 Business Operating System（BOS，业务操作系统）** —— 可以把它看作您业务运营的 Android
- **基于 applet 的架构** —— 只在需要时安装您所需要的功能
- **AI 驱动的自动化** —— 内置 AI 使手动数据录入减少 40%
- **马来西亚本地化就绪** —— 内置 SST、e-Invoice 及 LHDN 合规能力
- **灵活的部署方式** —— 提供云端、本地部署或混合部署选项

## 概览

BigLedger 通过提供一套 Business Operating System（BOS）来彻底革新企业管理，其运作方式犹如您业务运营的 Android。BigLedger 不像传统 ERP 那样将您束缚在僵化的结构中，而是提供一套灵活的、基于 applet 的架构，能够适应您独特的业务需求。

{{< callout type="info" >}}
**马来西亚场景**：BigLedger 专为马来西亚企业设计，内置针对 SST、e-Invoice（MyInvois）、PEPPOL 及 LHDN 要求的合规能力。越来越多的马来西亚企业信赖 BigLedger 来支撑其运营。
{{< /callout >}}

## 目标受众

本指南面向：
- **企业主与高管**：了解 BigLedger 如何变革您的运营
- **IT 经理**：了解部署与集成能力
- **部门主管**：发现适用于您职能的 applet
- **系统管理员**：熟悉平台架构
- **开发者**：了解 applet 生态系统与 API

## 前提条件

在探索 BigLedger 之前，您应当了解：
- [ ] 基本的 ERP／业务软件概念
- [ ] 您当前的业务流程与痛点
- [ ] 您的合规与监管要求
- [ ] 您与现有系统的集成需求

## 您将学到什么

学完本指南后，您将了解：
1. BigLedger 的 applet 架构与传统 ERP 有何不同
2. 核心平台组件与服务
3. 可用的 applet 类别及其功能
4. AI 驱动的自动化特性
5. 部署选项与入门步骤

---

## 业务操作系统概念

### BigLedger 的独特之处

与将您束缚在僵化结构中的传统单体式 ERP 不同，BigLedger 提供了一种革命性的方法：

#### 平台基础
把 BigLedger 想象成您业务的操作系统：
- **核心操作系统**：像 Windows 管理您的电脑一样，管理数据、安全与基础设施
- **统一数据中枢**：所有业务数据集中于一处，所有 applet 均可访问
- **企业级性能**：以 99.9% 的正常运行时间处理数以百万计的交易
- **合规框架**：内置马来西亚监管合规能力

#### Applet 架构
就像智能手机上的应用：
- **模块化应用**：今天安装会计功能，明天再添加库存功能
- **随增长付费**：从 2 个 applet 起步，按需扩展至 200 个
- **无缝集成**：所有 applet 自动协同工作
- **定制开发**：为独特需求构建您自己的 applet

#### Applet Store 生态系统
您的业务应用市场：
- **500+ 预构建 applet**：覆盖每一项业务职能的解决方案
- **行业模板**：为汽车、餐饮、零售等行业预配置
- **第三方集成**：连接银行、电商、物流
- **社区扩展**：由其他企业构建的解决方案

{{< callout type="tip" >}}
**💡 专业提示**：从核心 applet（会计、销售、库存）起步，随着业务增长逐步添加专业化 applet。大多数中小企业仅用 5-7 个 applet 便可在 3 个月内实现 ROI。
{{< /callout >}}

## 核心平台组件

### 1. 运营数据中枢

BigLedger 的核心 —— 您企业的中枢神经系统：

**主数据管理**
- 所有业务实体的单一可信来源
- 跨所有 applet 的实时同步
- 对所有变更进行版本控制与审计追踪
- 数据校验与质量保证

**智能层**
- 内置分析仪表板
- 用于预测的机器学习
- 自定义报表生成器
- 实时 KPI 监控

**API 网关**
- 面向所有操作的 RESTful API
- 用于灵活查询的 GraphQL
- 支持实时事件的 webhook
- 速率限制与安全防护

### 2. Applet 框架

每个 applet 都是一个完整的业务应用：

| 组件 | 描述 | 示例 |
|-----------|-------------|---------|
| **UI 层** | 用户界面与体验 | 现代化、响应式设计 |
| **业务逻辑** | 规则与工作流 | 审批链、计算 |
| **数据模型** | 信息结构 | 客户记录、交易 |
| **集成** | 与其他 applet 的连接 | 发票 → 会计 → 库存 |

### 3. 平台服务

面向所有 applet 的共享服务：

**安全与身份**
- 跨所有 applet 的 Single Sign-On（SSO，单点登录）
- 基于角色的访问控制（RBAC）
- 双重身份验证（2FA）
- IP 白名单与会话管理

**工作流引擎**
- 可视化拖放设计器
- 多级审批链
- 条件路由
- 电子邮件／短信通知

**文档管理**
- 集中式文件存储
- 版本控制
- 数字签名
- 用于数据提取的 OCR

{{< callout type="success" >}}
**✅ 成功案例**：Syarikat Maju Jaya 借助带 OCR 的文档管理服务将文档处理时间缩短了 75%，每天处理超过 1,000 张发票，准确率达 99%。
{{< /callout >}}

## Applet 分类

### 核心业务 Applet

支撑日常运营的必备 applet：

#### 财务套件
- **General Ledger**：完整的复式记账
- **Accounts Payable/Receivable**：管理现金流
- **马来西亚税务合规**：SST、e-Invoice 就绪
- **财务报表**：损益表、资产负债表、现金流量表
- **银行对账**：与马来西亚银行自动匹配

#### 销售与营销套件
- **CRM**：360° 客户视图
- **销售订单**：从报价到收款的工作流
- **营销自动化**：电子邮件、短信活动
- **客户门户**：面向客户的自助服务
- **佣金管理**：复杂的佣金结构

#### 供应链套件
- **库存管理**：多地点、批次追踪
- **采购订单**：供应商管理
- **仓库管理**：拣货、包装、发货
- **制造**：BOM、生产计划
- **质量控制**：检验、测试、认证

#### 人力资本套件
- **员工数据库**：完整的人力资源记录
- **薪资处理**：EPF、SOCSO、EIS、PCB
- **考勤**：生物识别集成
- **休假管理**：符合马来西亚劳动法
- **绩效管理**：KPI、评估、360 度反馈

### 行业专属 Applet

为不同行业量身定制的解决方案：

{{< callout type="info" >}}
**📊 行业采用情况**：BigLedger 服务于制造、零售、服务及医疗健康等多个行业的马来西亚企业。
{{< /callout >}}

#### 制造业垂直领域
- 生产计划与排程
- 物料清单（多级 BOM）
- 结合 IoT 的车间控制
- 质量保证（符合 ISO）
- 预测性维护

#### 零售业垂直领域
- POS（支持离线）
- 多门店管理
- 忠诚度计划（积分、等级、奖励）
- 商品陈列与货架规划图
- 电商集成（Shopee、Lazada）

#### 服务业垂直领域
- 项目管理（甘特图、资源）
- 工时与费用追踪
- 服务合同与 SLA
- 专业服务自动化
- 周期性计费

## AI 驱动的自动化

### 内置的专用 AI 能力

BigLedger 利用专用 AI 处理特定任务：

#### 文档智能
- **OCR 准确率**：打印文本 99.5%，手写文本 95%
- **支持的文档**：发票、收据、采购订单、送货单
- **自动分类**：费用类型、税务代码、账户
- **多语言**：英语、马来语、中文、泰米尔语

#### 财务 AI
- **银行对账**：95% 自动匹配率
- **欺诈检测**：实时异常告警
- **现金流预测**：30、60、90 天预测
- **信用风险评估**：客户付款行为分析

{{< callout type="warning" >}}
**⚠️ 重要提示**：AI 预测仅为建议。对于关键财务决策，请务必与您的会计师或财务顾问一同审阅。
{{< /callout >}}

#### 运营 AI
- **需求预测**：库存优化
- **路线优化**：配送计划
- **预测性维护**：预防设备故障
- **质量预测**：缺陷检测

### AIMatrix 集成

通过与 AIMatrix 的合作提供高级 AI 能力：

**可用服务**
- 用于自然语言处理的 GPT-4 与 Claude
- 用于质量控制的计算机视觉
- 用于免手动操作的语音助手
- 高级预测分析

**业务影响指标**
| 指标 | 改善幅度 | 见效时间 |
|--------|------------|---------------|
| 手动数据录入 | -40% | 1 周 |
| 文档处理 | -60% | 2 周 |
| 对账准确率 | +80% | 1 个月 |
| 响应时间 | -50% | 立即 |

## 部署选项

### 云端部署（推荐）

#### 公有云
- **由 BigLedger 托管**：零 IT 运维负担
- **自动更新**：始终使用最新功能
- **全球 CDN**：随时随地快速访问
- **定价**：RM299/月起
- **最适合**：中小企业、初创公司、成长型企业

#### 私有云
- **专属资源**：您自己的服务器
- **增强安全性**：隔离环境
- **自定义 SLA**：性能保障
- **定价**：RM2,999/月起
- **最适合**：大型企业、银行、政府机构

### 本地部署

#### 自托管
- **完全掌控**：您自己的基础设施
- **物理隔离选项**：无需互联网
- **定制化**：无限修改
- **定价**：一次性许可费 + 维护费
- **最适合**：高安全性、军事、离岸场景

{{< callout type="tip" >}}
**💡 建议**：先从 Public Cloud 起步以实现最快部署（2 天），随后按需迁移至 Private Cloud 或 On-Premise。80% 的客户会一直使用 Public Cloud。
{{< /callout >}}

## 入门清单

### 第 1 周：规划
- [ ] 明确业务需求与痛点
- [ ] 选择部署选项（推荐云端）
- [ ] 选择初始 applet（从 5-7 个起步）
- [ ] 指定项目团队与推动者
- [ ] 安排实施启动会

### 第 2 周：搭建
- [ ] 创建 BigLedger 账户
- [ ] 配置组织架构
- [ ] 设置用户账户与权限
- [ ] 安装所选 applet
- [ ] 配置安全设置

### 第 3 周：配置
- [ ] 导入主数据（客户、产品、供应商）
- [ ] 配置 applet 设置
- [ ] 设置工作流与审批
- [ ] 与银行及各项服务集成
- [ ] 测试关键流程

### 第 4 周：上线
- [ ] 完成用户培训
- [ ] 运行并行测试
- [ ] 执行数据校验
- [ ] 编写操作文档
- [ ] 以试点小组启动上线

{{< callout type="success" >}}
**✅ 成功提示**：大多数成功的实施都遵循 20-80 法则：先让 20% 的功能（核心功能）完美运行，再添加其余 80%（高级功能）。
{{< /callout >}}

## 关键要点

- **Business Operating System**：BigLedger 不仅仅是软件，而是运营您企业的完整平台
- **Applet 的灵活性**：从小处起步，无限扩展 —— 只为您所使用的功能付费
- **AI 驱动**：内置 AI 将手动工作减少 40-60%
- **马来西亚本地化就绪**：内置本地法规合规能力
- **快速实施**：大多数中小企业在 2-4 周内即可上线

## 另请参阅

### 入门
- [实施指南](/user-guide/implementation) —— 分步部署指南
- [Applet Store 概览](/applets/applet-store) —— 浏览可用的 applet
- [快速入门教程](/tutorials/quick-start) —— 30 分钟内上手运行

### 核心模块
- [Financial Accounting](/modules/financial-accounting) —— 完整的会计解决方案
- [CRM & Sales](/modules/crm) —— 客户关系管理
- [Inventory Management](/modules/inventory) —— 库存与仓库管理

### 高级主题
- [API 文档](/developers/api-reference) —— 集成指南
- [自定义 Applet 开发](/developers/applet-sdk) —— 构建您自己的 applet
- [AI 与自动化](/ai-intelligence) —— 善用 AI 能力

## 常见问题

<details>
<summary>BigLedger 与 SAP 或 Oracle 有何不同？</summary>

BigLedger 基于 applet 的架构意味着您只需为所用功能付费，部署以天计而非以月计，且无需昂贵的顾问即可完成定制。SAP／Oracle 则需要大笔前期投入与漫长的实施周期。
</details>

<details>
<summary>BigLedger 能否处理多公司运营？</summary>

可以，BigLedger 在单一平台内支持无限数量的公司、分支机构与货币。公司间交易与合并报表均为内置功能。
</details>

<details>
<summary>我的数据在云端是否安全？</summary>

BigLedger 采用银行级加密（AES-256）、通过 ISO 27001 认证的数据中心，并符合 PDPA。您的数据每小时备份一次，并享有 99.9% 正常运行时间的 SLA。
</details>

<details>
<summary>我能否与现有系统集成？</summary>

可以，BigLedger 提供 REST API、webhook 以及面向主流系统的预构建连接器。我们的集成团队可协助进行定制集成。
</details>

<details>
<summary>如果我需要一项尚不存在的功能怎么办？</summary>

您可以提出功能请求（我们每月发布更新）、构建自定义 applet，或聘请我们的专业服务团队为您构建。
</details>

## 延伸阅读

- [BigLedger 对比传统 ERP 白皮书](https://bigledger.com/whitepaper) —— 详细对比
- [客户成功案例](https://bigledger.com/case-studies) —— 真实实施案例
- [ROI 计算器](https://bigledger.com/roi) —— 计算您的成本节约

## 需要帮助？

- **销售咨询**：[sales@bigledger.com](mailto:sales@bigledger.com) —— 获取演示
- **支持门户**：[support.bigledger.com](https://support.bigledger.com) —— 全天候帮助
- **培训学院**：[academy.bigledger.com](https://academy.bigledger.com) —— 免费课程
- **社区论坛**：[forum.bigledger.com](https://forum.bigledger.com) —— 用户社区
- **Telegram 支持**：@leehongfay —— 快速提问
