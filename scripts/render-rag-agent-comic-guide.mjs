import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = new URL("../static/images/blog/rag-agent-comic-guide/", import.meta.url);
const outPath = fileURLToPath(outDir);
mkdirSync(outDir, { recursive: true });

const W = 1600;
const H = 900;
const panelW = 744;
const panelH = 382;
const gap = 32;
const marginX = 40;
const marginY = 36;

const pages = [
  {
    file: "01-rag-agent-roles-local.svg",
    title: "RAG 和 Agent",
    accent: "#f7d66d",
    panels: [
      {
        type: "title",
        lines: ["RAG 和 Agent", "先分工"],
        bubbles: [["RAG 找证据", 148, 306, "#d9ecff"], ["Agent 做事情", 392, 306, "#dff2e5"]],
      },
      {
        type: "dialogue",
        bubbleA: "它们一样吗？",
        bubbleB: "先分工。",
        props: ["资料堆", "工具箱"],
      },
      {
        type: "split",
        leftTitle: "RAG 找证据",
        rightTitle: "Agent 做事情",
        leftItems: ["文档", "检索", "向量库"],
        rightItems: ["规划", "工具", "完成"],
      },
      {
        type: "summary",
        title: "核心区别",
        steps: ["检索", "交接", "执行"],
        footer: "RAG 备证据，Agent 做动作",
      },
    ],
  },
  {
    file: "02-retrieve-then-act-local.svg",
    title: "先检索，再行动",
    accent: "#a9d8ff",
    panels: [
      {
        type: "title",
        lines: ["先检索", "再行动"],
        bubbles: [["用户问题", 138, 304, "#fff0b8"], ["上下文包", 390, 304, "#dff2e5"]],
      },
      {
        type: "dialogue",
        bubbleA: "先让谁上？",
        bubbleB: "先找证据。",
        props: ["runbook", "日志", "文档"],
      },
      {
        type: "flow",
        steps: ["用户问题", "RAG 检索", "上下文包", "Agent 调工具"],
      },
      {
        type: "summary",
        title: "本话总结",
        steps: ["RAG 备上下文", "Agent 做动作"],
        footer: "先把材料找对，再让工具执行",
      },
    ],
  },
  {
    file: "03-context-boundaries-local.svg",
    title: "三种上下文别混装",
    accent: "#ffd3ca",
    panels: [
      {
        type: "title",
        lines: ["三种上下文", "分盒装"],
        bubbles: [["历史", 128, 304, "#d9ecff"], ["记忆", 300, 304, "#fff0b8"], ["RAG", 472, 304, "#dff2e5"]],
      },
      {
        type: "dialogue",
        bubbleA: "都塞 prompt？",
        bubbleB: "分盒装。",
        props: ["聊天", "偏好", "资料"],
      },
      {
        type: "boxes",
        boxes: [
          ["会话历史", "刚刚发生", "#d9ecff"],
          ["长期记忆", "稳定偏好", "#fff0b8"],
          ["RAG 证据", "外部资料", "#dff2e5"],
        ],
      },
      {
        type: "summary",
        title: "别混装",
        steps: ["历史管刚刚", "记忆管长期", "RAG 管证据"],
        footer: "边界越清楚，系统越稳",
      },
    ],
  },
  {
    file: "04-rag-agent-decision-local.svg",
    title: "先判断需求",
    accent: "#c8e7cf",
    panels: [
      {
        type: "title",
        lines: ["先判断", "需求核心"],
        bubbles: [["问答", 130, 304, "#d9ecff"], ["做事", 310, 304, "#dff2e5"], ["组合", 490, 304, "#fff0b8"]],
      },
      {
        type: "dialogue",
        bubbleA: "该选哪个？",
        bubbleB: "看核心动作。",
        props: ["需求单", "路线牌"],
      },
      {
        type: "decision",
        paths: [
          ["主要在问", "RAG", "#d9ecff"],
          ["主要做事", "Agent", "#dff2e5"],
          ["先查再做", "RAG + Agent", "#fff0b8"],
        ],
      },
      {
        type: "summary",
        title: "判断口诀",
        steps: ["问：找证据", "做：调工具", "都要：组合"],
        footer: "先看目标，不先看名词",
      },
    ],
  },
  {
    file: "05-rag-production-checklist-local.svg",
    title: "别只盯数据库",
    accent: "#e5d7ff",
    panels: [
      {
        type: "title",
        lines: ["别只盯", "数据库"],
        bubbles: [["chunk", 120, 304, "#fff0b8"], ["metadata", 286, 304, "#d9ecff"], ["rerank", 500, 304, "#dff2e5"]],
      },
      {
        type: "dialogue",
        bubbleA: "先选库吗？",
        bubbleB: "先做设计。",
        props: ["数据库", "检查清单"],
      },
      {
        type: "flow",
        steps: ["清理语料", "结构分块", "metadata", "hybrid", "rerank", "扩展底座"],
      },
      {
        type: "summary",
        title: "本话总结",
        steps: ["底座决定顺不顺", "检索决定准不准"],
        footer: "先把证据链路搭稳",
      },
    ],
  },
];

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function text(lines, x, y, opts = {}) {
  const {
    size = 38,
    weight = 700,
    fill = "#241d18",
    anchor = "start",
    gap = Math.round(size * 1.22),
  } = opts;
  return lines
    .map((line, index) => {
      return `<text x="${x}" y="${y + index * gap}" text-anchor="${anchor}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`;
    })
    .join("");
}

function panel(x, y, bg = "#fff9ef") {
  return `
    <rect x="${x}" y="${y}" width="${panelW}" height="${panelH}" rx="22" fill="${bg}" stroke="#241d18" stroke-width="5"/>
    <rect x="${x + 12}" y="${y + 12}" width="${panelW - 24}" height="${panelH - 24}" rx="16" fill="url(#dots)" opacity="0.46"/>
  `;
}

function bubble(label, x, y, fill = "#fff") {
  return `
    <rect x="${x}" y="${y}" width="176" height="56" rx="28" fill="${fill}" stroke="#241d18" stroke-width="4"/>
    ${text([label], x + 88, y + 37, { size: 24, anchor: "middle" })}
  `;
}

function mentor(x, y, scale = 1) {
  const s = scale;
  return `
    <g transform="translate(${x} ${y}) scale(${s})">
      <circle cx="82" cy="86" r="72" fill="#1e8fe4" stroke="#241d18" stroke-width="5"/>
      <circle cx="82" cy="98" r="54" fill="#fff" stroke="#241d18" stroke-width="4"/>
      <circle cx="58" cy="62" r="22" fill="#fff" stroke="#241d18" stroke-width="4"/>
      <circle cx="104" cy="62" r="22" fill="#fff" stroke="#241d18" stroke-width="4"/>
      <circle cx="65" cy="66" r="6" fill="#241d18"/>
      <circle cx="111" cy="66" r="6" fill="#241d18"/>
      <circle cx="82" cy="84" r="11" fill="#e74736" stroke="#241d18" stroke-width="3"/>
      <path d="M48 108 Q82 134 116 108" fill="none" stroke="#241d18" stroke-width="5" stroke-linecap="round"/>
      <rect x="45" y="150" width="74" height="92" rx="32" fill="#1e8fe4" stroke="#241d18" stroke-width="5"/>
      <circle cx="82" cy="168" r="12" fill="#f7d66d" stroke="#241d18" stroke-width="3"/>
      <path d="M28 166 Q-8 154 12 120" fill="none" stroke="#241d18" stroke-width="8" stroke-linecap="round"/>
      <path d="M132 166 Q178 132 202 94" fill="none" stroke="#241d18" stroke-width="8" stroke-linecap="round"/>
    </g>
  `;
}

function student(x, y, scale = 1) {
  const s = scale;
  return `
    <g transform="translate(${x} ${y}) scale(${s})">
      <circle cx="78" cy="80" r="58" fill="#ffd7b6" stroke="#241d18" stroke-width="5"/>
      <path d="M30 58 Q70 8 128 50 Q102 28 78 38 Q54 28 30 58" fill="#2c241f" stroke="#241d18" stroke-width="4"/>
      <circle cx="54" cy="82" r="20" fill="none" stroke="#241d18" stroke-width="5"/>
      <circle cx="102" cy="82" r="20" fill="none" stroke="#241d18" stroke-width="5"/>
      <path d="M74 82 H82" stroke="#241d18" stroke-width="5"/>
      <circle cx="55" cy="82" r="5" fill="#241d18"/>
      <circle cx="103" cy="82" r="5" fill="#241d18"/>
      <path d="M62 112 Q78 124 96 112" fill="none" stroke="#241d18" stroke-width="4" stroke-linecap="round"/>
      <rect x="28" y="134" width="108" height="120" rx="30" fill="#ffc84f" stroke="#241d18" stroke-width="5"/>
      <path d="M48 150 L82 188 L116 150" fill="none" stroke="#241d18" stroke-width="4"/>
      <path d="M28 168 Q0 142 16 120" fill="none" stroke="#241d18" stroke-width="8" stroke-linecap="round"/>
    </g>
  `;
}

function iconCard(label, x, y, fill) {
  return `
    <rect x="${x}" y="${y}" width="160" height="96" rx="18" fill="${fill}" stroke="#241d18" stroke-width="4"/>
    <circle cx="${x + 42}" cy="${y + 40}" r="18" fill="#fff" stroke="#241d18" stroke-width="4"/>
    ${text([label], x + 92, y + 58, { size: 24, anchor: "middle" })}
  `;
}

function renderPanelContent(page, p, x, y, index) {
  if (p.type === "title") {
    return `
      ${mentor(x + 28, y + 136, 0.88)}
      ${student(x + 560, y + 154, 0.72)}
      <rect x="${x + 178}" y="${y + 48}" width="390" height="112" rx="18" fill="${page.accent}" stroke="#241d18" stroke-width="5"/>
      ${text(p.lines, x + 373, y + 94, { size: 42, anchor: "middle", gap: 48 })}
      ${p.bubbles.map(([label, bx, by, fill]) => bubble(label, x + bx, y + by, fill)).join("")}
    `;
  }

  if (p.type === "dialogue") {
    return `
      ${student(x + 64, y + 130, 0.9)}
      ${mentor(x + 520, y + 128, 0.82)}
      ${bubble(p.bubbleA, x + 164, y + 40, "#fff4c8")}
      ${bubble(p.bubbleB, x + 452, y + 42, "#d9ecff")}
      ${p.props.map((label, i) => iconCard(label, x + 190 + i * 132, y + 254, i % 2 ? "#dff2e5" : "#fff0b8")).join("")}
    `;
  }

  if (p.type === "split") {
    return `
      <rect x="${x + 44}" y="${y + 48}" width="316" height="282" rx="22" fill="#e2f1ff" stroke="#2671b9" stroke-width="5"/>
      <rect x="${x + 384}" y="${y + 48}" width="316" height="282" rx="22" fill="#e4f3e7" stroke="#3b8a4f" stroke-width="5"/>
      ${text([p.leftTitle], x + 202, y + 92, { size: 34, anchor: "middle", fill: "#1d5f9e" })}
      ${text([p.rightTitle], x + 542, y + 92, { size: 34, anchor: "middle", fill: "#2f7a3e" })}
      ${p.leftItems.map((label, i) => iconCard(label, x + 78 + i * 98, y + 140, "#fff")).join("")}
      ${p.rightItems.map((label, i) => iconCard(label, x + 418 + i * 98, y + 140, "#fff")).join("")}
      ${text(["找到相关证据", "交给模型回答"], x + 202, y + 292, { size: 28, anchor: "middle", gap: 34 })}
      ${text(["制定计划", "调用工具执行"], x + 542, y + 292, { size: 28, anchor: "middle", gap: 34 })}
    `;
  }

  if (p.type === "flow") {
    const stepW = p.steps.length > 4 ? 112 : 142;
    const start = x + 52;
    return `
      ${p.steps.map((label, i) => `
        <rect x="${start + i * (stepW + 18)}" y="${y + 132}" width="${stepW}" height="92" rx="18" fill="${i % 2 ? "#dff2e5" : "#d9ecff"}" stroke="#241d18" stroke-width="4"/>
        ${text([label], start + i * (stepW + 18) + stepW / 2, y + 186, { size: p.steps.length > 4 ? 20 : 22, anchor: "middle" })}
        ${i < p.steps.length - 1 ? `<path d="M${start + i * (stepW + 18) + stepW + 6} ${y + 178} H${start + (i + 1) * (stepW + 18) - 8}" stroke="#241d18" stroke-width="5" marker-end="url(#arrow)"/>` : ""}
      `).join("")}
      ${mentor(x + 32, y + 232, 0.5)}
      ${student(x + 594, y + 236, 0.44)}
    `;
  }

  if (p.type === "boxes") {
    return `
      ${p.boxes.map(([title, sub, fill], i) => `
        <rect x="${x + 52 + i * 232}" y="${y + 92}" width="198" height="190" rx="22" fill="${fill}" stroke="#241d18" stroke-width="5"/>
        ${text([title], x + 151 + i * 232, y + 145, { size: 30, anchor: "middle" })}
        <circle cx="${x + 151 + i * 232}" cy="${y + 198}" r="28" fill="#fff" stroke="#241d18" stroke-width="4"/>
        ${text([sub], x + 151 + i * 232, y + 260, { size: 24, anchor: "middle" })}
      `).join("")}
    `;
  }

  if (p.type === "decision") {
    return `
      ${p.paths.map(([from, to, fill], i) => `
        <rect x="${x + 74}" y="${y + 68 + i * 92}" width="232" height="62" rx="18" fill="${fill}" stroke="#241d18" stroke-width="4"/>
        <rect x="${x + 430}" y="${y + 68 + i * 92}" width="176" height="62" rx="18" fill="#fff" stroke="#241d18" stroke-width="4"/>
        ${text([from], x + 190, y + 108 + i * 92, { size: 24, anchor: "middle" })}
        ${text([to], x + 518, y + 108 + i * 92, { size: 24, anchor: "middle" })}
        <path d="M${x + 318} ${y + 99 + i * 92} H${x + 420}" stroke="#241d18" stroke-width="5" marker-end="url(#arrow)"/>
      `).join("")}
    `;
  }

  if (p.type === "summary") {
    return `
      <rect x="${x + 74}" y="${y + 54}" width="592" height="236" rx="20" fill="#fffdf4" stroke="#241d18" stroke-width="5"/>
      ${text([p.title], x + 370, y + 104, { size: 36, anchor: "middle" })}
      ${p.steps.map((step, i) => text([step], x + 370, y + 156 + i * 46, { size: 28, anchor: "middle" })).join("")}
      <rect x="${x + 158}" y="${y + 302}" width="424" height="44" rx="22" fill="${page.accent}" stroke="#241d18" stroke-width="4"/>
      ${text([p.footer], x + 370, y + 332, { size: 22, anchor: "middle" })}
      ${mentor(x + 32, y + 236, 0.48)}
      ${student(x + 604, y + 240, 0.42)}
    `;
  }

  return "";
}

function renderPage(page) {
  const positions = [
    [marginX, marginY],
    [marginX + panelW + gap, marginY],
    [marginX, marginY + panelH + gap],
    [marginX + panelW + gap, marginY + panelH + gap],
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1.3" fill="#9b7a58"/>
    </pattern>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#241d18"/>
    </marker>
  </defs>
  <rect width="${W}" height="${H}" fill="#f8efe3"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#dots)" opacity="0.2"/>
  ${positions.map(([x, y], i) => `
    <g>
      ${panel(x, y, i % 2 ? "#fff6e8" : "#fffaf0")}
      ${renderPanelContent(page, page.panels[i], x, y, i)}
    </g>
  `).join("")}
</svg>`;
}

for (const page of pages) {
  writeFileSync(join(outPath, page.file), renderPage(page), "utf8");
}

console.log(`Rendered ${pages.length} SVG comic pages to ${outPath}`);
