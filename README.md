# Static CV generator

A configurable **static CV generator** built with **Eleventy (11ty)** and **YAML content**, featuring lightweight **client-side i18n (HU/EN)**, responsive design, and **print-friendly PDF export**.  
Designed for easy customization and seamless deployment on **Netlify**.

---

## ✨ Features

- ⚡ **Static site generation** with Eleventy
- 🧾 **Single source of truth** using `cv.yaml`
- 🌍 **Bilingual (HU / EN)** support with instant language toggle
- 🎨 Modern, responsive UI (desktop & mobile)
- 🖨️ **Print-optimized layout** (PDF-friendly, no broken cards)
- 🧠 Clean separation of content (YAML), layout (Nunjucks), and logic (JS)
- ☁️ **Netlify-ready** deployment
- 🛠️ Easy to extend (projects, skills, sections, print modes)

---

## 📁 Project Structure

```
.
├── src/
│   ├── index.njk        # Main template
│   ├── assets/          # Images (profile photo, icons, etc.)
│   └── _data/
│       └── cv.yaml      # CV content (HU + EN)
├── .eleventy.js         # Eleventy config
├── netlify.toml         # Netlify build config
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start local development

```bash
npm run dev
```

Eleventy will start a local dev server (usually at `http://localhost:8080`).

### 3️⃣ Build the static site

```bash
npm run build
```

The generated site will be available in the `_site/` directory.

---

## 🧾 Editing Your CV

All CV content lives in:

```
src/_data/cv.yaml
```

You can edit:
- personal info
- experience
- education
- skills
- projects
- languages
- section labels (HU / EN)

No HTML or JS changes required for content updates.

---

## 🌍 Language Support (HU / EN)

- Language toggle is handled client-side
- Texts are defined in `cv.yaml` under `i18n.hu` and `i18n.en`
- Dynamic sections (experience, education, projects, etc.) are generated automatically

Adding another language is straightforward.

---

## 🖨️ Printing & PDF Export

This project includes dedicated **print styles**:

- Experience and skill cards are **never split across pages**
- Optimized font sizes and spacing for A4
- Optional compact modes via CSS
- Works well with browser “Print to PDF”

Recommended:
- Chrome / Edge
- Scale: 100%
- Background graphics: ON

---

## ☁️ Deploying to Netlify

### Quick setup

1. Push the repository to GitHub
2. In Netlify: **Add new site → Import from Git**
3. Use the following settings:

```
Build command: npm run build
Publish directory: _site
```

That’s it — Netlify will handle the rest (including HTTPS).

---

## 🧠 Philosophy

This project intentionally avoids:
- heavy frameworks
- server-side rendering
- CMS dependencies

Instead, it focuses on:
- clarity
- maintainability
- portability
- recruiter- and ATS-friendly output

---

## 📄 License

MIT — feel free to use, modify, and adapt this project for your own CV or as a template.

---

## 🙌 Credits

Built and maintained by **Sámuel Kovács**.  
If you find this useful, feel free to fork it or adapt it for your own needs.
