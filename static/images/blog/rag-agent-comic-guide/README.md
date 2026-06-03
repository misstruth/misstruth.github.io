# RAG Agent Comic Guide

This directory contains the `comic-guide` generation plan for:

`content/blog/rag-agent-practical-guide.md`

## Current status

- `01-rag-agent-roles.png` exists and matches the intended direction.
- `analysis.md`, `characters.md`, `storyboard.md`, and `prompts/*.md` are ready.
- Images `02` through `05` still need a reliable image generation backend.

The current Codex session does not expose the built-in `image_gen` tool, and `OPENAI_API_KEY` is not set in the shell environment.

## Target image set

- `01-rag-agent-roles.png`
- `02-retrieve-then-act.png`
- `03-context-boundaries.png`
- `04-rag-agent-decision.png`
- `05-rag-production-checklist.png`

## Generate with the bundled imagegen CLI

Set the key first:

```bash
export OPENAI_API_KEY="..."
```

Then run from the blog repository root:

```bash
export CODEX_HOME="${CODEX_HOME:-$HOME/.codex}"
export IMAGE_GEN="$CODEX_HOME/skills/.system/imagegen/scripts/image_gen.py"
export OUT="static/images/blog/rag-agent-comic-guide"

python "$IMAGE_GEN" generate \
  --prompt "$(cat "$OUT/prompts/02-retrieve-then-act.md")" \
  --size 2048x1152 \
  --quality high \
  --out "$OUT/02-retrieve-then-act.png"

python "$IMAGE_GEN" generate \
  --prompt "$(cat "$OUT/prompts/03-context-boundaries.md")" \
  --size 2048x1152 \
  --quality high \
  --out "$OUT/03-context-boundaries.png"

python "$IMAGE_GEN" generate \
  --prompt "$(cat "$OUT/prompts/04-rag-agent-decision.md")" \
  --size 2048x1152 \
  --quality high \
  --out "$OUT/04-rag-agent-decision.png"

python "$IMAGE_GEN" generate \
  --prompt "$(cat "$OUT/prompts/05-rag-production-checklist.md")" \
  --size 2048x1152 \
  --quality high \
  --out "$OUT/05-rag-production-checklist.png"
```

After generating all five images, update the article figure references from the old SVG set to these PNGs.
