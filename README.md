# Agnes Video Generator - Clean Independent Version

This is a **clean, independent** version of the Agnes Video Generator, fully detached from Google AI Studio control and Firebase free-tier limitations.

## Key Changes from Original (Agnes-video-generator-lastest)

- Removed / neutralized AI Studio specific Firebase config (`gen-lang-client-*` project + named database `ai-studio-remixagnesvideog-...`)
- **All Firestore writes are disabled by default** to prevent `RESOURCE_EXHAUSTED` errors on free tier
- Primary persistence: **localStorage** + **Catbox** (for permanent media hosting)
- No dependency on AI Studio applet config or remix features
- Cleaner structure ready for Railway / self-hosted deployment

## Features

- AI video generation pipeline (Agnes / Gemini based)
- Scene management, keyframe control, image-to-video
- Experience library & failure records (local only)
- Catbox permanent upload for generated assets
- Auth optional (can run without Firebase Auth)

## Run Locally

**Prerequisites:** Node.js 20+

1. Clone this repo
2. `npm install`
3. Copy `.env.example` to `.env` / `.env.local` and set:
   - `GEMINI_API_KEY=your_key`
   - Other keys as needed (Catbox, etc.)
4. `npm run dev`

## Deploy to Railway

1. Connect this repo to Railway
2. Set environment variables
3. Deploy (uses Dockerfile or `npm start` after build)

## Notes

- Original source: `lamhui763-sys/Agnes-video-generator-lastest`
- This repo is intentionally cleaned for production independence.
- Temporary fix scripts from the original development process are excluded.

---

Made for independent deployment outside AI Studio.