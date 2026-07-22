---
description: 为国际电子发票配置 PEPPOL。
tags:
- user-guide
title: PEPPOL 配置指南
weight: 20
---

为国际电子发票配置 PEPPOL。

## 什么是 PEPPOL？

泛欧公共采购在线（PEPPOL）实现跨境电子单据交换。

## PEPPOL ID 设置

### 第 1 步：获取 PEPPOL ID

您的 PEPPOL ID 格式：
```
0195:MYREGISTRATIONNUMBER
```
- 0195 = 马来西亚国家代码
- 后接您的商业注册号

### 第 2 步：在 BigLedger 中配置

1. 前往 **E-Invoice** → **PEPPOL Settings**
2. 输入 PEPPOL ID
3. 选择单据类型：
   - 发票
   - 贷记单
   - 订单
   - 订单回执
4. 配置端点

### 第 3 步：贸易伙伴设置

添加贸易伙伴：
- 伙伴 PEPPOL ID
- 单据类型
- 验证规则
- 路由偏好

## 单据标准

### UBL 2.1 格式
- 基于 XML 的标准
- 结构化数据
- 机器可读
- 已验证的格式

### 合规要求
- 数字签名
- 时间戳
- 审计追踪
- 归档（7 年）

## 测试流程

1. 连接到 PEPPOL 测试网络
2. 交换测试单据
3. 验证回执
4. 核实送达
5. 检查合规性

---

*PEPPOL 支持：peppol@bigledger.com*
