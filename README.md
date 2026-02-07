# 🎉 Party Perfekt — Birthday Party Service

Professionelle Geburtstagsfeier-Planung und Dekoration.

## Features

- 🎈 Deko-Artikel & Shop
- 📋 Service-Katalog
- 💌 Kontaktformular
- 📱 Responsive Design
- ⚡ Express.js Backend

## Setup

```bash
npm install
npm start
```

Server läuft auf Port 5300 (oder ENV `PORT`)

## Deployment

```bash
# Install dependencies on VM
npm install

# Start service (systemd)
sudo systemctl start birthday-party-service

# SSL mit certbot
certbot --nginx -d birthday.eulencode.de
```

## Files

```
public/          Static assets (HTML, CSS, JS)
appdata/         Dynamic data (logs, uploads) — .gitignore
server.js        Express app
package.json     Dependencies
```

## Routes

- `GET /` — Landing page
- `GET /api/services` — Service list
- `POST /api/contact` — Contact form submission

---

*Deployed @ birthday.eulencode.de*
