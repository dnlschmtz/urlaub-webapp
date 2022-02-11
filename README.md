# Travel2Gether

## Casestudy

### Urlaubsplaner Webapp
Ein Urlaubsplaner für Reisegruppen...

![Screenshot der Webseite](screenshot_webseite.jpg?raw=true "Screenshot der Webseite")

Die Webapp wurde im Fach Fallstudie zu dem Zweck entwickelt, lästige Termin und Reisezielabsprachen in einer Gruppe von mehreren Personan allen Alters zu vereinfachen. 

Auf der Seite können Benutzer ihre eigenen Gruppenräume erstellen, Mitglieder hinzufügen und ihren Kalender synchonisieren. So wird die Terminfindung vereinfacht. Anschließend werden automatisch Reiseziele von Kooperationspartnern vorgeschlagen. Allerdings können auch eigene Reseziele eingetragen werden und zur Abstimmung unter den Gruppenmitgliedern freigegeben werden. So wird die Abstimmung auf ein Reiseziel so einfach wie möglich gestaltet.

## Web-Programming

### Zielsetzung
Reisegruppenräume auf der Urlaubsplaner Webapp sollen per Telegrambot erstellt werden.

### Vorgehensweise
Zuallererst muss die Webapp mit Svelte neugeschrieben werden, da sie vorher auf html und CSS basiert war.
Anschließend wurde der Telegrambot mithilfe des Botfathers initiiert. Dann wurden dem Bot neue Befehle hinzugefügt um später Gruppenräume auf der Webapp zu erstellen.
Das Backend der Webapp wurde dann mit Mongo von Mongodb erstellt. Die Kommunikation zwischen Frontend und Backend läuft über Websockets.

## Einarbeiten in Deno
Basic Tutorials zu den Funktionen von Deno

-https://www.youtube.com/watch?v=2iLeRzHvc10

-https://www.youtube.com/watch?v=CpC5MTKAuwI

-https://www.youtube.com/watch?v=5_uf9cbtIyE

-https://www.youtube.com/watch?v=yv1Nl9N5ur4

-https://www.youtube.com/watch?v=yv1Nl9N5ur4

-https://www.youtube.com/watch?v=zkFuAZsEEUc

## Svelte Beginnings
Tutorials zum Einarbeiten in die Funktionen von Svelte

-https://www.youtube.com/watch?v=zojEMeQGGHs

-https://www.youtube.com/watch?v=lnpdn2rE2N8

-https://www.youtube.com/watch?v=TanFofZBvNI

-https://www.youtube.com/watch?v=n8Kk7uvsx9A

-https://www.youtube.com/watch?v=8VLojVFUt5U&list=PLH1gH0TmFBBhWp2pn6vRhUVVC1txQuTZE

## Zum Bauen der Svelte-App
```
novas build
```
## Mongodb Basics
Tutorials zum Einarbeiten in die Funktionen von Mongodb

-https://www.youtube.com/watch?v=pWbMrx5rVBE

-https://www.youtube.com/watch?v=P6gEnVlJPOc

## Zum Starten
```
deno run --allow-net --allow-read --allow-env app.ts
```

Die Seite kann anschließend über einen Link mit der jeweiligen ID aufgerufen werden. Beispielsweise: http://localhost:3000/?id=61f2ba3b0bd8bfe515921217


deno test --allow-net --allow-read --allow-env src/database/mongodb-connector.test.ts

deno test --allow-net --allow-read --allow-env src/bot.test.ts
