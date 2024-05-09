# State of React 2024

Dieses Repository (https://github.com/nilshartmann/state-of-react-2024) enthält den Source-Code für die Beispiel-Anwendung sowie den Workspace für meinen "State of React 2024"-Talk

Im folgenden findest du beschrieben, wie du die Beispiele installieren und starten kannst.

![Screenshot of example application](screenshot.png)

## Voraussetzungen

Das Repository besteht aus drei **Anwendungen**:
1. Wir haben ein Backend, das unsere Daten und unsere Geschäftslogik enthält. Die Daten werden mit einer einfachen HTTP API zur Verfügung gestellt. Dieses Backend bezeichne ich im folgenden einfach nur als das **Backend**. Das Backend ist "fertig" und wird als "Black Box" (wie ein externer Service) behandelt.

2. Die zweite Anwendung ist ein **React Single-Page-Anwendung**. Dabei handelt es sich um eine klassische, client-seitig ausgeführte React-Anwendung, die im folgenden als **SPA** bezeichnet wird. Sie kommuniziert mit dem Backend via HTTP Calls. 

3. Die dritte Anwendung ist eine **Node.js-Anwendung**. Diese fungiert hier als eine Art "Backend for frontend". Die Anwendung kommuniziert mit dem Backend und stellt das Frontend für den Browser zur Verfügung. Diese Anwendung bezeichne ich im folgenden als **Node.js**-Anwendung. 

> Die beiden Anwendungen **React Single-Page-Anwendung** und **Node.js-Anwendung** haben in etwa dieselben Features. Damit du sie gut miteinander vergleichen kannst, sind ihre Ordner- und Komponentenstrukturen auch ähnlich.
> 
> Die Ordner- und Komponentenstrukturen entsprechen **nicht best-practices** sondern sind optimiert für unsere Übungen und zum Vergleichen der beiden Anwendungen. In einem echten Projekt würdest du eine einfachere Ordner- und Komponentenstruktur wählen. Dabei würdest du - wie aus React gewohnt - nach dem **Co-Location-Prinzip** vorgehen, also Dinge beieinander lassen, die zusammengehören. Das wären in den beiden Beispiel-Anwendungen insbesondere die Komponenten, die Routen-spezifisch sind. Diese Komponenten wären in einer echten Anwendung sicherlich in den entsprechenden Routen-Ordnern.

### Voraussetzungen für das Backend

Das Backend ist in Java (21) und Spring Boot 3.2 geschrieben. Außerdem benötigt es eine Postgres 16 Datenbank. Es gibt mehrere Möglichkeiten, wie du das Backend starten und verwenden kannst. Im folgenden sind die einzelnen Varianten beschrieben. Weiter unten findest du jeweils beschrieben, wie du sie verwenden kannst.

**Variante 1**: Starten des Java-Prozesses aus deiner IDE bzw. über die Kommandozeile.

Dieses ist der aufwändigste Weg und macht aus meiner Sicht nur Sinn, wenn du ohnehin Java entwickelst. Du brauchst dann ein JDK21 und Docker auf deinem Laptop. Dein Laptop muss in der Lage sein über Gradle und Docker Pakete bzw. Images zu installieren.

In dieser Variante müssen die Ports `8080` und `8432` verfügbar sein.

**Variante 2**: Starten per docker-compose

Das Backend gibt es als fertig gebautes Docker Image. Wenn du Docker auf deinem Laptop installiert hast, ist die einfachste Möglichkeit, das Backend zu verwenden, über das hier enthaltene docker-compose-File den Backend-Prozess samt Datenbank zu starten. Das [Image der Backend-Anwendung liegt in der GitHub Container Registry](https://github.com/nilshartmann/state-of-react-2024/pkgs/container/state-of-react-2024). Das bedeutet, dein Laptop bzw. Docker muss in der Lage sein, Images aus der Docker und der GitHub Registry zu installieren.

In dieser Variante muss der Port `8080` verfügbar sein.

> Wenn du normalerweise kein Java entwickelst und Docker installiert hast, ist dieses die einfachste Variante.

**Variante 3**: GitPod

[GitPod](https://gitpod.io) ist eine vollständige Online Entwicklungsumgebung. Voraussetzung hierfür ist ein GitHub und ein GitPod-Account, die beide kostenlos sind. du kannst das komplette Repository über GitHub in GitPod starten. Dann kannst du entweder vollständig in GitPod arbeiten (Web, VS Code oder IntelliJ) oder du verwendest du nur das Backend, das in GitPod läuft, wenn du den Workspace in GitPod gestartet hast.

- Diese Variante ist am besten, wenn du auf deinem Laptop nichts installieren möchtest (auch keine npm-Packages)
- du benötigst nur Internet-Zugriff (Web) und einen GitHub- und GitPod-Account, die beide kostenlos sind.

### Voraussetzungen für die React SPA- und Next.js-Anwendung

Die beiden React-Anwendungen benötigen Node.JS (mindestens Version 18). Die Pakete werden mit [pnpm](https://pnpm.io/installation) installiert. Dabei handelt es sich um einen alternativen Package-Manager zur npm, den du über Node.js selbst aktivieren kannst. Wenn das bei dir nicht funktioniert, sollte auch npm oder yarn funktionieren. Ich habe die Installation aber nur mit pnpm getestet.

Dein Laptop muss mit dem Package Manager in der Lage sein, npm Packages runterzuladen und zu installieren.

- Die **React SPA** läuft auf Port `8090`.
- Die **Next.js-Anwendung** läuft auf Port `8100`. 
- Diese beiden Ports müssen also bei dir frei sein.


## Installation und Starten des Backends

- Zu den **Voraussetzungen** der einzelnen Varianten, s.o.
- Sofern du normalerweise kein Java entwickelst, ist es am **einfachsten**, wenn du **Variante 2 (Docker)** verwendest.

### Variante 1: Starten des Java-Prozesses in deiner IDE

Das Java-Projekt wird mit Gradle gebaut. Wenn du das Projekt in deiner IDE öffnest, sollte diese also in der Lage sein, Gradle-Projekte zu importieren. Das geht bei IntelliJ z.B. automatisch. Nach dem Importieren und compilieren startest du die Spring Boot `main`-Klasse `nh.recipify.BackendApplication`.

> **Arbeitsverzeichnis setzen**
> 
> In IntelliJ musst du in der Run Configuration darauf achten, dass das `Working directory` auf `$MODULE_DIR$` gesetzt ist.
> Am besten, du verwendest einfach die fertige Run Configuration `01 - Run BackendApplication (with DB)`

Diese Klasse sorgt auch automatisch dafür, dass ein Docker-Container mit einer Postgres Datenbank gestartet wird. Voraussetzung dafür ist, dass du docker-compose auf einem Computer installiert hast.

Wenn das Backend gestartet ist, kannst du einmal `http://localhost:8080/api/recipes` im Browser öffnen. Dort sollte eine JSON-Liste mit Rezepten zurückgeliefert werden.

### Variante 2: Starten des Backends per docker-compose

Du kannst das fertige Backend samt Datenbank starten, in dem du das `docker-compose-backend.yaml`-File im Root-Verzeichnis des Workspaces startest:

```
docker-compose -f docker-compose-backend.yaml up -d
```

In dem Compose-File sind der Backend-Prozess und die Datenbank beschrieben, so dass du nichts weiter starten musst.

Wenn das Backend gestartet ist, kannst du einmal `http://localhost:8080/api/recipes` im Browser öffnen. Dort sollte eine JSON-Liste mit Rezepten zurückgeliefert werden.

### Variante 3: GitPod

Um den kompletten Workspace in GitPod zu starten, gibt es zwei Möglichkeiten.

- du kannst einfach [mit diesem Link GitPod mit dem Workspace starten](https://gitpod.io/#https://github.com/nilshartmann/state-of-react-2024)
- du öffnest die Seite https://github.com/nilshartmann/state-of-react-2024 im Browser und klickst dort auf `Open`.
- Hinweis: grundsätzlich kannst du den Workspace über Gitpod auch in einer lokalen IDE öffnen. Dazu wirst du beim Starten von GitPod befragt. Dafür müssen aber bestimmte Voraussetzungen erfüllt sein. Weitere Informationen findest du [hier in der GitPod Dokumentation](https://www.gitpod.io/docs/references/ides-and-editors)

## Installation der beiden Frontend-Anwendungen (React SPA und Next.js)

Die beiden Anwendungen existiert jeweils zweimal:

1. Jeweils in einer "Workspace-Version" (Verzeichnisse: `1_spa/spa_workspace` bzw. `2_nextjs/nextjs_workspace`). **In diesen Verzeichnisse mache ich während des Vortrags Live-Coding**. Du kannst Du Verzeichnisse verwenden, wenn du meine Beispiele nach dem Vortrag selbst nachvollziehen willst.
2. Jeweils in einer "fertigen" Version (Verzeichnisse `1_spa/spa_frontend` `2_nextjs/nextjs_frontend`), die du dir bei Interesse ansehen kannst. Diese Versionen sind weitgehend identisch mit der jeweils fertigen "Workspace-Version", enthalten aber noch ein paar Features, die über den Vortrag hinausgehen. Wenn du diesen Stand zum ausprobieren starten möchtest, sind dieselben Schritte wie für die "Workspace-Version" erforderlich. Du führst die Schritte dann aber jeweils im Verzeichnis `1_spa/spa_frontend` bzw `2_nextjs/nextjs_frontend` aus. Du kannst immer nur jeweils die "fertige" _oder_ die "Workspace-Version" starten, da es sonst zu Port-Kollisionen kommt. 

### (Optional) Schritt 1: Installation von pnpm

Grundsätzlich sollte die Installation der npm-Packages mit npm und yarn funktionieren.

Ich habe aber mit [pnpm](https://pnpm.io/) getestet. Falls du noch kein pnpm installiert hast, solltest du das jetzt tun. Dazu gibt es [mehrere Wege](https://pnpm.io/installation). Am einfachsten geht es über [Node.js corepacks](https://nodejs.org/docs/latest-v20.x/api/corepack.html).

Dazu führst du einfach auf der Kommandozeile folgenden Befehl aus (`corepacks` ist Bestandteil von Node.js):

```
corepacks enable
```


### Schritt 2: Installation der npm-Packages für die SPA-Anwendung

Wir arbeiten im Verzeichnis `2_spa/spa_workspace`. In diesem Verzeichnis auf der Kommandozeile bitte folgenden Befehl ausführen:

```
pnpm install
```

(Alternative npm oder yarn verwenden)


### Schritt 3: Starten der SPA-Anwendung

Die SPA-Anwendung startest du ebenfalls im `1_spa/spa_workspace`-Verzeichnis. Dort musst du das `dev`-Script ausführen:

```
pnpm dev
```

Die Anwendung (Vite Devserver) startet nun und sollte nach kurzer Zeit auf http://localhost:8090 laufen.


### Schritt 4: Installation der npm-Packages für die Next.js-Anwendung

Wir arbeiten im Verzeichnis `2_nextjs/nextjs_workspace`. In diesem Verzeichnis auf der Kommandozeile bitte folgenden Befehl ausführen:

```
pnpm install
```

(Alternative npm oder yarn verwenden)

### Schritt 4: Starten der Next.js-Anwendung

Die Next.js-Anwendung wird im Verzeichnis `2_nextjs/nextjs_workspace` gestartet. Dort bitte das `dev`-Script ausführen:

```bash
pnpm dev
```

(In **IntelliJ** kannst du Next.js im Workspace auch über die Run Configuration `[NEXTJS WORKSPACE] - 01 dev` starten)

Die Anwendung startet nun und sollte nach kurzer Zeit auf http://localhost:8100 laufen.

#### Hinweise zum Next.js Cache

Next.js hat ein sehr aggressives Caching eingebaut. Deswegen kann es manchmal sein, dass du Änderungen nicht sofort siehst. Deswegen hilft es manchmal:

- Im Browser "hard refresh" machen (Cmd+Shift+R bzw. Ctrl+Shift+R bei Firefox z.B.). Dann verwirft Firefox Dateien im Cache.
- Das Verzeichnis `2_nextjs/nextjs_workspace/.next` löschen und Next.js neustarten

## Fragen, Kommentare, Feedback

Wenn du Fragen oder Probleme hast, sprich mich gerne an.

Wenn du mit mir in Kontakt bleiben möchtest, findest du hier meine [Kontaktdaten](https://nilshartmann.net/kontakt).

