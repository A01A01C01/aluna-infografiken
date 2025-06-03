# Schritt-für-Schritt GitHub Pages Deployment Anleitung

## Methode 1: Einfachste - GitHub Web Interface (Keine technischen Kenntnisse erforderlich)

### Schritt 1: GitHub Account & Repository erstellen
1. Gehe zu **https://github.com**
2. Melde dich für einen kostenlosen Account an (falls du noch keinen hast)
3. Klicke das **"+" Symbol** in der oberen rechten Ecke
4. Wähle **"New repository"**
5. Repository Name: `aluna-infografiken`
6. Beschreibung: `Interaktive Infografiken für ALUNA KI-Beratungssystem`
7. Wähle **"Public"** (erforderlich für kostenloses GitHub Pages)
8. **NICHT** "Add a README file" ankreuzen
9. Klicke **"Create repository"**

### Schritt 2: Dateien hochladen
1. Du siehst eine Seite mit Upload-Optionen
2. Klicke **"uploading an existing file"**
3. **Ziehe ALLE Dateien** aus deinem Projektordner per Drag & Drop:
   - `index.html`
   - `_config.yml`
   - `README.md`
   - `assets` Ordner (kompletter Ordner mit css und js Unterordnern)
   - Alle anderen Dokumentationsdateien
4. In das Commit-Nachricht Feld tippe: "Initiale ALUNA Infografiken Upload"
5. Klicke **"Commit changes"**

### Schritt 3: GitHub Pages aktivieren
1. Gehe zum **"Settings"** Tab deines Repositories (oberes Menü)
2. Scrolle runter und klicke **"Pages"** in der linken Seitenleiste
3. Unter "Source", wähle **"Deploy from a branch"**
4. Branch: Wähle **"main"**
5. Folder: Wähle **"/ (root)"**
6. Klicke **"Save"**

### Schritt 4: Konfiguration aktualisieren
1. In deinem Repository, klicke auf **`_config.yml`**
2. Klicke das **Stift-Symbol** (Edit this file)
3. Finde diese Zeile: `url: "https://your-username.github.io"`
4. Ersetze `your-username` mit deinem echten GitHub Benutzernamen
5. Finde: `repository: your-username/aluna-infografiken`
6. Ersetze `your-username` mit deinem echten GitHub Benutzernamen
7. Scrolle runter und klicke **"Commit changes"**

### Schritt 5: Auf deine Website zugreifen
Deine Website wird verfügbar sein unter:
`https://DEIN_BENUTZERNAME.github.io/aluna-infografiken/`

**Ersetze DEIN_BENUTZERNAME mit deinem echten GitHub Benutzernamen**

**Warte 5-10 Minuten** bis das Deployment abgeschlossen ist.

---

## Methode 2: Automatisches Skript (Für technische Nutzer)

### Voraussetzungen
- Git auf deinem Computer installiert
- Terminal/Eingabeaufforderung Zugang

### Schritte
1. Öffne Terminal in deinem Projektordner
2. Führe aus: `./deploy.sh`
3. Gib deinen GitHub Benutzernamen ein wenn gefragt
4. Gib Repository Namen ein (oder Enter für Standard)
5. Folge den Anweisungen zur Vervollständigung des Deployments
6. Aktiviere GitHub Pages manuell (Schritt 3 von Methode 1)

---

## Methode 3: Kommandozeile Git

### Schritt 1: Repository initialisieren
```bash
git init
git add .
git commit -m "Initiale ALUNA Infografiken"
git branch -M main
```

### Schritt 2: Mit GitHub verbinden
```bash
git remote add origin https://github.com/DEIN_BENUTZERNAME/aluna-infografiken.git
git push -u origin main
```

### Schritt 3: GitHub Pages aktivieren
Folge Schritt 3 von Methode 1

---

## Verifikationsschritte

Nach dem Deployment, prüfe diese Elemente:

### 1. Website Laden
- Besuche `https://DEIN_BENUTZERNAME.github.io/aluna-infografiken/`
- Alle Bereiche sollten korrekt laden
- Keine 404 Fehler

### 2. Interaktive Charts
- Donut Chart zeigt 15% - 70% - 15% Aufteilung
- Radar Chart zeigt Fragen-Toolkit Analyse
- Charts sind interaktiv und responsive

### 3. Design Elemente
- Professionelle SVG Icons (keine Emojis)
- Text ist justified und gut formatiert
- Hover-Effekte funktionieren auf Karten
- Website funktioniert auf mobilen Geräten

### 4. Inhalt
- Footer zeigt "@ 2025 Aluna-KairosShift KI Labs"
- Deutsche Übersetzungen erscheinen korrekt
- Alle Links und Navigation funktionieren

---

## Problembehandlung

**404 Fehler?**
- Stelle sicher Repository ist öffentlich
- Prüfe dass GitHub Pages aktiviert ist
- Warte 10 Minuten für Verbreitung

**Charts laden nicht?**
- Prüfe Browser Konsole (F12)
- Überprüfe Internetverbindung
- CDN Ressourcen sollten automatisch laden

**Styling kaputt?**
- Überprüfe dass `assets/css/styles.css` korrekt hochgeladen wurde
- Prüfe Dateistruktur entspricht Anforderungen

---

## Endergebnis

Deine professionelle ALUNA Infografiken Website wird live sein unter:
**https://DEIN_BENUTZERNAME.github.io/aluna-infografiken/**

Die Website beinhaltet interaktive Charts, professionelles Design, responsive Layout und vollständige Infografiken über das ALUNA KI-Beratungssystem.

Deployment wird typischerweise innerhalb von 10 Minuten nach Aktivierung von GitHub Pages abgeschlossen.

---

## Repository Details für GitHub

**Repository Name:** `aluna-infografiken`

**Beschreibung:** `Interaktive Infografiken für ALUNA KI-Beratungssystem`

**Tags/Topics:** `aluna`, `ki-beratung`, `infografiken`, `systemtheorie`, `künstliche-intelligenz`, `visualisierung`, `github-pages`

**Finale URL:** `https://DEIN_BENUTZERNAME.github.io/aluna-infografiken/`