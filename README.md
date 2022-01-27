# Travel2Gether

## Casestudy

### Urlaubsplaner Webapp
Ein Urlaubsplaner für Reisegruppen...

Die Webapp wurde im Fach Fallstudie zu dem Zweck entwickelt, lästige Termin und Reisezielabsprachen in einer Gruppe von mehreren Personan allen Alters zu vereinfachen. 

Auf der Seite können Benutzer ihre eigenen Gruppenräume erstellen, Mitglieder hinzufügen und ihren Kalender synchonisieren. So wird die Terminfindung vereinfacht. Anschließend werden automatisch Reiseziele von Kooperationspartnern vorgeschlagen. Allerdings können auch eigene Reseziele eingetragen werden und zur Abstimmung unter den Gruppenmitgliedern freigegeben werden. So wird die Abstimmung auf ein Reiseziel so einfach wie möglich gestaltet.

## Web-Programming

### Zielsetzung
Reisegruppenräume auf der Urlaubsplaner Webapp sollen per Telegrambot erstellt werden.

### Vorgehensweise
Zuallererst muss die Webapp mit Svelte neugeschrieben werden, da sie vorher auf html und CSS basiert war.
Anschließend wurde der Telegrambot mithilfe des Botfathers initiiert. Dann wurden dem Bot neue Befehle hinzugefügt um später Gruppenräume auf der Webapp zu erstellen.

## Einarbeiten in Deno
Tutorials zum Einarbeiten in die Funktionen von Deno

-https://www.youtube.com/watch?v=2iLeRzHvc10

-https://www.youtube.com/watch?v=CpC5MTKAuwI

-https://www.youtube.com/watch?v=5_uf9cbtIyE

-https://www.youtube.com/watch?v=yv1Nl9N5ur4

-https://www.youtube.com/watch?v=yv1Nl9N5ur4

-https://www.youtube.com/watch?v=zkFuAZsEEUc

## Einarbeiten in Svelte



## Zum Bauen der Svelte-App
```
novas build
```

## Zum Starten
```
deno run --allow-net --allow-read --allow-env src/main.ts
```

