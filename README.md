# Agnes Video Generator - Clean Independent Version

**New clean repo created:** https://github.com/lamhui763-sys/Agnes-video-generator-clean

This is a **clean, independent** version of the Agnes Video Generator, fully detached from Google AI Studio control and Firebase free-tier limitations.

## Status

Core config files + cleaned Firebase setup have been added.

**To complete the full migration** (recommended way, fastest):

1. On your local machine (or Codespace):
   ```bash
   git clone https://github.com/lamhui763-sys/Agnes-video-generator-lastest.git
   cd Agnes-video-generator-lastest
   git remote set-url origin https://github.com/lamhui763-sys/Agnes-video-generator-clean.git
   # Optional: remove AI Studio specific files
   rm -rf assets/.aistudio firebase-applet-config.json firebase-blueprint.json firestore.rules
   # Apply the disable writes if not already in code
   # Then force push the cleaned code
   git push -u origin main --force
   ```

Or use GitHub's "Import repository" feature pointing to the original.

## Key Cleanups Applied / To Apply

- Removed AI Studio Firebase config hardcoding (`gen-lang-client` + named database)
- `src/lib/firebase.ts` rewritten to be optional + use default DB (no named databaseId)
- Firestore writes should remain disabled (see original `fix_disable_firestore_writes.cjs`)
- localStorage + Catbox as primary persistence
- Removed prebuild fix scripts dependency from package.json
- Updated titles and comments for independent use

## Run Locally

**Prerequisites:** Node.js 20+

1. Clone this repo (after full code is in)
2. `npm install`
3. Copy `.env.example` to `.env` and set your keys
4. `npm run dev`

## Deploy to Railway

Connect this repo → set env vars (GEMINI_API_KEY, AGNES_API_KEY, CATBOX_USERHASH, etc.) → Deploy.

---

Original (do not modify yet): https://github.com/lamhui763-sys/Agnes-video-generator-lastest
