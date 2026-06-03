# 分镜脚本

## 01 RAG 和 Agent 先分工

文件：`01-rag-agent-roles.png`

布局：4 格，2x2。

Panel 1 title：蓝白技术导师站在白板前，白板写“RAG 和 Agent”。左侧蓝色 RAG 路线，右侧绿色 Agent 路线。

Panel 2 dialogue：黄衣学习者坐在资料堆和工具箱中间，困惑地问“它们一样吗？”。导师举手回答“先分工。”。

Panel 3 diagram：左侧 RAG：文档、搜索、向量库、找证据。右侧 Agent：计划、调用工具、完成任务。

Panel 4 summary：白板总结“检索 -> 交接 -> 执行”，导师和学习者一起看懂。

## 02 先检索，再行动

文件：`02-retrieve-then-act.png`

布局：4 格，2x2。

Panel 1 title：标题“先检索，再行动”。用户问题像纸飞机飞进系统入口。

Panel 2 dialogue：学习者问“先让谁上？”。导师指向资料柜说“先找证据。”。

Panel 3 diagram：流程图：用户问题 -> RAG 检索 runbook / 日志 / 文档 -> 上下文包 -> Agent 调工具。

Panel 4 summary：公告板写“RAG 备上下文，Agent 做动作”。学习者恍然大悟。

## 03 三种上下文别混装

文件：`03-context-boundaries.png`

布局：4 格，2x2。

Panel 1 title：标题“三种上下文”。桌上有三个彩色收纳盒。

Panel 2 dialogue：学习者抱着一大堆纸问“都塞 prompt？”。导师摇头说“分盒装。”。

Panel 3 diagram：三个盒子：会话历史、长期记忆、RAG 证据。每个盒子放不同图标。

Panel 4 summary：总结牌写“历史管刚刚，记忆管长期，RAG 管证据”。

## 04 先看是在问，还是在做事

文件：`04-rag-agent-decision.png`

布局：4 格，2x2。

Panel 1 title：标题“先判断需求”。画面是一个三岔路口。

Panel 2 dialogue：学习者拿着需求单问“该选哪个？”。导师回答“看核心动作。”。

Panel 3 diagram：三条路：问答 -> RAG，做事 -> Agent，查资料再行动 -> RAG + Agent。

Panel 4 summary：总结牌写“问就找证据，做就调工具，两者都要就组合”。

## 05 RAG 底座和分块顺序

文件：`05-rag-production-checklist.png`

布局：4 格，2x2。

Panel 1 title：标题“别只盯数据库”。背景是数据库货架和文档切块台。

Panel 2 dialogue：学习者问“先选库吗？”。导师拿出清单说“先做检索设计。”。

Panel 3 diagram：生产顺序：清理语料 -> 结构分块 -> metadata -> hybrid -> rerank -> 数据库扩展。

Panel 4 summary：总结牌写“底座决定顺不顺，检索设计决定准不准”。
