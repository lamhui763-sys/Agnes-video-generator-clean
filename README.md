# Agnes Video Generator – Clean Independent Version

**Repo:** https://github.com/lamhui763-sys/Agnes-video-generator-clean

這是完全脫離 Google AI Studio 控制、避免 Firebase free-tier `RESOURCE_EXHAUSTED` 的獨立乾淨版本。

## 已完成的清理

- 新建乾淨 repo
- `src/lib/firebase.ts` 已重寫：移除 `gen-lang-client` + named database，改為可選（無 config 時自動用 localStorage + Catbox）
- `src/lib/logger.ts` 已預設停用 Firestore 寫入（GUARD）
- `package.json` 已移除一堆臨時 `fix_*.cjs` prebuild
- 標題、註解、`.env.example` 已更新為獨立版本
- 核心 lib、components 部分已搬入

## 一次性完成全部程式碼搬遷（推薦，30 秒）

因為原 repo 有超大檔案（`App.tsx` 500KB+、`server.ts` 270KB+）和大量臨時 fix 腳本，最乾淨可靠的方式是本地一次 force push：

```bash
# 1. 克隆原 repo
git clone https://github.com/lamhui763-sys/Agnes-video-generator-lastest.git
cd Agnes-video-generator-lastest

# 2. 換成新 repo 的 remote
git remote set-url origin https://github.com/lamhui763-sys/Agnes-video-generator-clean.git

# 3. （建議）刪除 AI Studio 專屬檔案
rm -rf assets/.aistudio
rm -f firebase-applet-config.json firebase-blueprint.json firestore.rules

# 4. 推上去（覆蓋現有 clean base）
git push -u origin main --force
```

完成後這個 repo 就會有完整程式碼 + 我們已經做好的清理。

之後你就可以直接去 **Railway** 連接這個新 repo 重新部署。

## 本地運行

```bash
npm install
cp .env.example .env   # 填入 GEMINI_API_KEY / AGNES_API_KEY / CATBOX_USERHASH 等
npm run dev
```

## 原 repo

`lamhui763-sys/Agnes-video-generator-lastest` 完全沒有被修改。
