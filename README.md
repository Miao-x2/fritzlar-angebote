# Fritzlar Angebote

Ein statischer, browserbasierter Angebotsplaner für Lidl, ALDI Nord und tegut in Fritzlar.

## Funktionen

- Lidl-Prospektlinks direkt auslesen
- tegut-PDFs importieren
- gespeicherte ALDI-HTML-Seiten importieren
- Angebote nach Supermarkt und Kategorie filtern
- Preis sortieren und Ergebnisse mit 20 Einträgen pro Seite anzeigen
- Daten je Supermarkt getrennt löschen
- Importverlauf lokal im Browser speichern
- alle gesammelten Angebote als CSV exportieren
- ausgewählte Angebote als PDF-Einkaufsliste drucken

Neue Importe werden standardmäßig zu den vorhandenen Einträgen hinzugefügt. Über die Schaltfläche **Löschen** kann jeder Supermarkt einzeln geleert werden.

## Lokal öffnen

Zuerst die PDF-Abhängigkeit installieren und vorbereiten:

```bash
npm install
npm run prepare:pdf
```

Das Vorbereitungsskript kopiert PDF.js und stellt das Titelbild aus der gespeicherten Quelldatei wieder her. Die Website liegt im Ordner `dist`. Anschließend genügt ein einfacher lokaler Webserver:

```bash
python3 -m http.server 8000 -d dist
```

Danach `http://localhost:8000` öffnen.

## Veröffentlichung

Live-Version: https://fritzlar-angebote.miaomiao-2013ygmail.chatgpt.site

Die gespeicherten Angebote und der Importverlauf liegen ausschließlich im lokalen Browser-Speicher.
