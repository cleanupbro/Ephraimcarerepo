# LSP Setup - Ephraim Care
## TypeScript Language Server Configuration
**Status:** Configured - Restart Required
**Updated:** December 31, 2025

---

## Current Status

| Component | Status |
|-----------|--------|
| typescript-language-server | Installed (v5.1.3) |
| typescript | Installed (v5.9.3) |
| Claude Code Plugin | Enabled |
| Settings Configured | Yes |
| **Restart Required** | **YES** |

---

## What's Installed

### Global Tools
```bash
typescript-language-server  # /Users/shamalkrishna/.npm-global/bin/
tsserver                    # /Users/shamalkrishna/.npm-global/bin/
tsc                         # /Users/shamalkrishna/.npm-global/bin/
```

### Claude Code Settings

**Global:** `~/.claude/settings.json`
```json
{
  "enabledPlugins": {
    "typescript-lsp@claude-plugins-official": true
  },
  "lsp": {
    "servers": {
      "typescript": {
        "command": "typescript-language-server",
        "args": ["--stdio"],
        "filetypes": ["typescript", "typescriptreact", "javascript", "javascriptreact"]
      }
    }
  }
}
```

**Project:** `.claude/settings.json`
```json
{
  "enabledPlugins": {
    "typescript-lsp@claude-plugins-official": true
  }
}
```

---

## To Activate LSP

**Step 1: Restart Claude Code**
```bash
# Quit Claude Code completely (Cmd+Q or close terminal)
# Reopen Claude Code
claude
```

**Step 2: Verify LSP**
After restart, LSP should work for:
- `.ts` files
- `.tsx` files
- `.js` files
- `.jsx` files

**Step 3: Test**
```
# In Claude Code, LSP operations should work:
- goToDefinition
- findReferences
- hover
- documentSymbol
- workspaceSymbol
```

---

## LSP Operations Available

| Operation | Description |
|-----------|-------------|
| `goToDefinition` | Jump to where symbol is defined |
| `findReferences` | Find all uses of symbol |
| `hover` | Get type info / documentation |
| `documentSymbol` | List all symbols in file |
| `workspaceSymbol` | Search symbols across project |
| `goToImplementation` | Find implementations |
| `prepareCallHierarchy` | Get call hierarchy |
| `incomingCalls` | What calls this function |
| `outgoingCalls` | What this function calls |

---

## Fallback (If LSP Fails)

Use grep patterns instead:

```bash
# Find component definition
grep -r "export.*ComponentName" src/components/

# Find where something is used
grep -rn "ComponentName" src/app/

# Find type definition
grep -r "interface\|type TypeName" src/types/

# Find all exports
grep "^export" src/**/index.ts
```

---

## Troubleshooting

### "No LSP server available"
1. Restart Claude Code
2. Check plugin is enabled: `cat ~/.claude/settings.json`
3. Verify tsserver: `which typescript-language-server`

### LSP Slow/Timeout
1. Check tsconfig.json is valid
2. Reduce node_modules size
3. Add exclude patterns to tsconfig

### Plugin Not Found
```bash
# Reinstall plugin
/plugin install typescript-lsp@claude-plugins-official
```

---

*After restart, type "hi" to reload workspace context.*
