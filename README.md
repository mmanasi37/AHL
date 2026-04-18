# Andro Holdings Limited (AHL) — Corporate Website

Official website for **Andro Holdings Limited (AHL)**, a civil engineering and security services company based in Wewak, East Sepik Province, Papua New Guinea.

---

## Overview

AHL is a leading local company delivering infrastructure development and professional security solutions across East Sepik Province and PNG. This repository contains the full source code for the AHL corporate website.

### Key Sections
- **Hero** — Company introduction with key statistics and call-to-action
- **Trusted Partners** — PNG government and institutional partners
- **About AHL** — Company background, mission, and vision
- **Services** — Civil engineering and security division offerings
- **Why AHL** — Value pillars and capabilities statement
- **Projects** — Featured infrastructure and security projects
- **Machinery Fleet** — Heavy equipment inventory
- **Community** — Education sponsorships, employment, and future leaders programme
- **Contact** — Lead generation form

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (single-page) |
| Styling | Tailwind CSS v3 (locally compiled) |
| Icons | Font Awesome 6.5 |
| Fonts | Google Fonts — Inter & Montserrat |
| Server | nginx 1.27 (Alpine) |
| Container | Docker (multi-stage build) |
| Orchestration | Docker Compose |

---

## Getting Started

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/) & Docker Compose

### Run Locally

```bash
git clone https://github.com/mmanasi37/AHL.git
cd AHL
docker compose up --build -d
```

Open **http://localhost:8081** in your browser.

To stop:
```bash
docker compose down
```

---

## Project Structure

```
.
├── index.html          # Main single-page website
├── src/
│   └── input.css       # Tailwind CSS entry point
├── Dockerfile          # Multi-stage build (Node → nginx)
├── docker-compose.yml  # Container configuration (port 8081)
├── nginx.conf          # nginx with gzip, security headers, caching
├── tailwind.config.js  # Custom colour palette (navy/leaf/flame/gold)
└── package.json        # Tailwind CSS build dependency
```

---

## Security

- nginx runs as a non-root user
- Read-only container filesystem with tmpfs mounts
- HTTP security headers: CSP, X-Frame-Options, X-XSS-Protection
- `no-new-privileges` enforced
- Server version tokens hidden

---

## Contact

**Andro Holdings Limited**  
Wewak, East Sepik Province, Papua New Guinea  
Website: [androholdings.com.pg](http://androholdings.com.pg)

