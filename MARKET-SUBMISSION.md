# DSH Market 提交文案

收录方式二选一（两种都会进入每日 06:00 的自动收录管道）：

- **打 topic（最快）**：在 GitHub 仓库 Settings → Topics 添加 `dsh-plugin`
- **提交 issue**：https://github.com/2BingLing/dsh-market/issues/new?template=submit_plugin.md

---

## Issue 正文（可直接粘贴）

标题：`[提交插件] dsh-seasonal-theme`

```markdown
## 插件信息

- **GitHub 仓库地址**：https://github.com/<owner>/dsh-seasonal-theme
- **插件类型**：cordis-plugin
- **一句话简介**：给 DeepSeek Harness 换一套四季渐变主题，春樱粉、夏青蓝、秋琥珀、冬霜蓝，可跟随月份自动换季。
- **作者自述简介**：[这是一个纯前端的主题插件。左侧栏点「四季主题」就能选色，打开「跟随四季」会按月份自动切换；
  浅色和深色外观都做了完整适配，切换后对话区、左侧栏、标题栏、气泡、菜单会一起变色。
  它只覆盖主题 token 和背景渐变，不联网、不上传数据、不注册工具，底部「恢复 DSH 原色」可随时还原。欢迎试用后给我反馈。]
- **是否已打 dsh-plugin 相关 topic**：是

## 补充说明（可选）

- **独特功能**：四季配色不是简单换个强调色，而是把主对话区、左侧栏、用户气泡、选中态整体染色；
  主题页和对话区共用同一层背景渐变，所以看到什么颜色就是什么颜色。自动换季按月份走，不用手动切。
- **是否需要额外配置**：不需要，装上即用，没有 API Key 或配置文件。
- **截图/演示**：仓库 `docs/preview.svg` 是四套配色的对照预览图。
```

---

## 插件标记自检（市场会检测）

- [x] `cordis.patch.yml` 存在，insert 一行 `seasonal-theme`
- [x] `package.json` 有 `dsh.bundle.patch` 与 `dsh.client`
- [x] 有 `engines.dsh` 声明兼容范围
- [x] 有 `README.md`（安装 / 使用 / 说明三节）
- [x] 有 `LICENSE`（MIT）
- [x] 有 `locale/en.json`、`locale/zh.json`（含 `meta.title` / `meta.description`）
- [x] 有 `icon.svg`、`docs/DETAIL.md` 与 `docs/preview.svg`
