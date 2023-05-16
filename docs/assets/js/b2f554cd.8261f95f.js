"use strict";(self.webpackChunkroot=self.webpackChunkroot||[]).push([[1477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"change-icons-via-theming","metadata":{"permalink":"/blog/change-icons-via-theming","source":"@site/blog/2023-05-12.mdx","title":"Wie kann ich Icons im Theme \xe4ndern?","description":"Heute wollen wir in einem kurzen Blog-Post zeigen, wie Ihr die standardm\xe4\xdfig hinterlegten Icons \xfcber das Theming (Theme-Designer) \xe4ndern k\xf6nnt.","date":"2023-05-12T00:00:00.000Z","formattedDate":"12. Mai 2023","tags":[{"label":"theming","permalink":"/blog/tags/theming"},{"label":"icon","permalink":"/blog/tags/icon"},{"label":"font","permalink":"/blog/tags/font"}],"readingTime":1.915,"hasTruncateMarker":false,"authors":[{"name":"Martin Oppitz","title":"Architekt@ITZBund & Creator of KoliBri","url":"https://github.com/deleonio","imageURL":"https://avatars.githubusercontent.com/u/6279703","key":"deleonio"}],"frontMatter":{"slug":"change-icons-via-theming","authors":"deleonio","tags":["theming","icon","font"]},"nextItem":{"title":"Ank\xfcndigung Release 1.5","permalink":"/blog/release-1.5"}},"content":"import { KolLink } from \'@public-ui/react\';\\n\\n\\nHeute wollen wir in einem kurzen Blog-Post zeigen, wie Ihr die standardm\xe4\xdfig hinterlegten Icons \xfcber das Theming (Theme-Designer) \xe4ndern k\xf6nnt.\\n\\n## 1. Icon-Font integrieren\\n\\nDamit Icons angezeigt werden k\xf6nnen, muss zun\xe4chst die gew\xfcnschte Icon-Font (z.B. Font Awesome Free) in der Webseite (HTML) eingebunden werden. Dies geschieht in der Regel mittels folgendem HTML:\\n\\n```html\\n<head>\\n\\t<link rel=\\"stylesheet\\" href=\\"assets/fontawesome-free/css/all.min.css\\" />\\n</head>\\n```\\n\\n## Icon-Font im Theme hinterlegen\\n\\nDie Icon-Komponente von KoliBri kapselt die Icon-Font und muss daher die CSS-Definitionen von den im Design System ausgew\xe4hlten Icon-Identifier kennen.\\nDazu muss das CSS aus der gleichen CSS-Datei, wie aus 1., in das Theme kopiert und damit hinterlegt werden.\\n\\n1. Theme-Designer \xf6ffnen\\n2. Theme ausw\xe4hlen\\n3. Icon-Komponente ausw\xe4hlen\\n4. Schalter auf Komponent-Styling umstellen\\n5. CSS aus der Icon-Font einf\xfcgen und speichern\\n6. Theme in Projekt \xfcbernehmen\\n\\n## Standard-Icons im Theme \xe4ndern\\n\\nDas \xc4ndern eines Icons ist ganz einfach, wenn folgendes Prinzip klar ist. Alle Icons werden durch die Web Component `kol-icon` abgebildet. Diese Komponente\\nexportiert immer den Part `icon`. \xdcber einen Part kann man auf festgelegte CSS-Eigenschaften innerhalb einer Web Component zugreifen. Exemplarisch sieht das\\nso aus:\\n\\n```css\\nkol-icon::part(icon) {\\n\\tfont-family: \'Font Awesome 6 Free\';\\n\\tfont-weight: 900;\\n}\\nkol-icon::part(icon):before {\\n\\tcontent: \'\ud83d\ude03\';\\n}\\n```\\n\\nUm ein Icon \xfcber den Designer zu \xe4ndern, sind folgende Schritte zu durchlaufen:\\n\\n1. Theme-Designer \xf6ffnen\\n2. Theme ausw\xe4hlen\\n3. Komponente ausw\xe4hlen, wo ein Icon ge\xe4ndert werden soll\\n4. Schalter auf Komponent-Styling umstellen\\n5. Spezifischen Selektor auf ein Icon ermitteln\\n6. Spezifischen Selektor verwenden, um Schriftart und Content anzupassen\\n7. Komponent-CSS speichern\\n8. Theme in Projekt \xfcbernehmen\\n\\nHier mal ein komplexeres Beispiel f\xfcr die Pagination:\\n\\n```css\\nkol-button::part(icon) {\\n\\tfont-family: \'Font Awesome 6 Free\';\\n\\tfont-weight: 900;\\n}\\nkol-button.first::part(icon):before,\\nkol-button.previous::part(icon):before,\\nkol-button.next::part(icon):before,\\nkol-button.last::part(icon):before {\\n\\tcontent: \'\ud83d\ude03\';\\n}\\n```\\n\\n## FAQ\\n\\n### Warum kann ich die Schriftgr\xf6\xdfe nicht \xe4ndern?\\n\\n```css\\nkol-icon::part(icon) {\\n\\tfont-family: \'Font Awesome 6 Free\';\\n\\tfont-size: 2rem !important;\\n\\tfont-weight: 900;\\n}\\n```\\n\\nDer Grund liegt in der `font` CSS-Definition in der Icon-Font selbst und in der Notwendigkeit, die Schriftgr\xf6\xdfe\\nbei Icons von Au\xdfen setzen \xfcbernehmen (erben).\\n\\n```css\\n.codicon[class*=\'codicon-\'] {\\n\\tfont: 16px / 1 codicon;\\n}\\n:host > i,\\n:host > i::before {\\n\\tfont-size: inherit !important;\\n}\\n```\\n\\nM\xf6chte man ein Icon in seiner Gr\xf6\xdfe anpassen, so kann man das einfach von Au\xdfen tun.\\n\\n```css\\nkol-icon {\\n\\tfont-size: 2rem;\\n}\\n```"},{"id":"release-1.5","metadata":{"permalink":"/blog/release-1.5","source":"@site/blog/2023-05-03.mdx","title":"Ank\xfcndigung Release 1.5","description":"Das Release 1.5 wird bald ver\xf6ffentlicht und bringt zahlreiche neue Komponenten, Verbesserungen und ein vereinfachtes Theming mit.","date":"2023-05-03T00:00:00.000Z","formattedDate":"3. Mai 2023","tags":[{"label":"release","permalink":"/blog/tags/release"},{"label":"neuerungen","permalink":"/blog/tags/neuerungen"}],"readingTime":3.725,"hasTruncateMarker":false,"authors":[{"name":"Martin Oppitz","title":"Architekt@ITZBund & Creator of KoliBri","url":"https://github.com/deleonio","imageURL":"https://avatars.githubusercontent.com/u/6279703","key":"deleonio"}],"frontMatter":{"slug":"release-1.5","title":"Ank\xfcndigung Release 1.5","authors":"deleonio","tags":["release","neuerungen"]},"prevItem":{"title":"Wie kann ich Icons im Theme \xe4ndern?","permalink":"/blog/change-icons-via-theming"},"nextItem":{"title":"Wie style ich eine Komponente?","permalink":"/blog/wie-style-ich-eine-komponente"}},"content":"import { KolLink } from \'@public-ui/react\';\\n\\n\\nDas Release 1.5 wird bald ver\xf6ffentlicht und bringt zahlreiche neue Komponenten, Verbesserungen und ein vereinfachtes Theming mit.\\n\\nDie wichtigsten \xc4nderungen sind:\\n\\n- Neue Komponenten\\n  - Image\\n  - Popover\\n  - SplitButton\\n  - ToggleButton (s. InputCheckbox)\\n  - Quote\\n- Verbesserungen\\n\\n  - Performance\\n    - Die Performance wurde durch die \xfcberdimensionierten CSS-Definitionen in der Icon-Komponente beeintr\xe4chtigt. Hintergrund sind die vielen Icon-Selectoren in den Icon-Fonts. F\xfcr ein Design System wird jedoch nur ein Bruchteil dieser CSS-Definitionen wirklich ben\xf6tigt. F\xfcr die Komponenten haben wir uns f\xfcr die schlanke Icon-Font von Visual Studio Code (Codicon) entschieden und Icofont und Font-Awesome standardm\xe4\xdfig entfernt (kann wieder nachger\xfcstet werden). Somit bringt dieses Release eine erhebliche Performance-Verbesserung beim Rendern der Komponenten mit sich.\\n  - Assets (Fonts und Icons)\\n\\n    - Versionen der Icon-Fonts wurden aktualisiert\\n    - Assets wurden auf die Themes aufgeteilt, wo sie relevant sind. Dadurch k\xf6nnen die KoliBri-Artefakt (NPM-Paket) verkleinert und somit schneller heruntergeladen und installiert werden.\\n    - Durch das Hinterlegen eines Postinstall-Scripts k\xf6nnen die Assets nach jeder Installation der KoliBri-Pakete automatisch in den `public/assets`-Ordner kopiert werden.\\n      ```json\\n      \\t// package.json\\n      \\t\\"scripts\\": {\\n      \\t\\t\u2026\\n      \\t\\t\\"postinstall\\": \\"npm-run-all postinstall:*\\",\\n      \\t\\t\\"postinstall:components-assets\\": \\"cpy \\\\\\"node_modules/@public-ui/components/assets/**/*\\\\\\" public/assets --dot\\",\\n      \\t\\t\\"postinstall:themes-assets\\": \\"cpy \\\\\\"node_modules/@public-ui/themes/assets/**/*\\\\\\" public/assets --dot\\",\\n      \\t},\\n      \\t\\"devDependencies\\": {\\n      \\t\\t\\"cpy-cli\\": \\"^4.2.0\\",\\n      \\t\\t\\"npm-run-all\\": \\"^4.1.5\\",\\n      \\t\\t\u2026\\n      \\t}\\n      ```\\n    - Weitere Icon-Fonts wurden in Themes verwendet:\\n      - Microsoft Codicons\\n      - Google Material Icons\\n      - Google Material Symbols\\n      - Tabler Icons\\n\\n- Refactorings\\n\\n  - Ein paar Komponenten haben wir refactored, um die Funktionalit\xe4ten zu erweitern und die Wartbarkeit zu verbessern.\\n  - Accordion\\n    - Der Header des Accordions wird jetzt mittels KoliBri-Heading, -Button und -Span umgesetzt.\\n    - Accordions lassen sich jetzt auch animiert auf- und zuklappen.\\n  - Alert\\n    - Die Konstruktion der Alerts wurde \xfcberarbeitet, um die volle Flexibilit\xe4t f\xfcr die Gestaltung zu erm\xf6glichen.\\n  - Heading\\n    - Die Heading-Komponente wurde mit einem Expert-Slot versehen.\\n  - Inputs, Select und Textarea\\n    - Die Konstruktion aller Eingabefelder wurde \xfcberarbeitet, um die Gestaltbarkeit und Wartbarkeit zu verbessern.\\n  - Nav\\n    - Aufklappbare Untermen\xfcs haben jetzt einen separaten Expand-Button. So kann der eigentliche Men\xfcpunkt unabh\xe4ngig vom Auf- und Zuklappen verwendet werden.\\n    - Men\xfcpunkte k\xf6nnen jetzt Links, Buttons oder auch reiner Text sein.\\n  - Table\\n    Die Pagination befindet sich jetzt im DOM immer oben, um den blinden Nutzenden eine schnellere Navigation zu erm\xf6glichen. F\xfcr sehende Nutzende kann die Pagination \xfcber das Theming entweder \xfcber oder unter der Tabelle angezeigt werden.\\n  - Tabs\\n    - Die Tabs verwenden jetzt die KoliBri-Button-Komponente.\\n  - Alle relevante Themes wurden bzgl. der Refactorings \xfcberarbeitet\\n\\n- Adapter\\n  - Neuer Adapter f\xfcr Angular 16 hinzugef\xfcgt\\n- KoliBri-CLI\\n  - Templates\\n    - Die Templates wurden \xfcberarbeitet und aktualisiert.\\n    - Angular-Template auf Version 16 aktualisiert\\n- Expert-Slot\\n  - Der Expert-Slot kann verwendet werden, um beliebiges HTML anstatt des Text-Labels auf eigene Verantwortung einf\xfcgen zu k\xf6nnen.\\n  - Bei der Einf\xfchrung eines Expert-Slots, wird in der Regel das Property `_label` Pflicht. Entweder enth\xe4lt das Label einen Text, der dann ohne Slot angezeigt wird. Oder es ist leer und der Expert-Slot wird aktiviert.\\n    ```html\\n    <kol-heading _label=\\"Inhalt einer H4-\xdcberschrift\\" _level=\\"4\\"></kol-heading>\\n    <kol-heading _label=\\"\\" _level=\\"4\\">\\n    \\t<span slot=\\"expert\\"> Inhalt einer H4-\xdcberschrift \u2026 </span>\\n    </kol-heading>\\n    ```\\n  - Heading: Die Heading erm\xf6glicht jetzt das Einf\xfcgen beliebiger Inhalte im Expert-Modus. Hierzu wurde das erforderliche Property `_label` eingef\xfchrt. L\xe4sst man das Property leer (`_label=\\"\\"`), wird er Expert-Slot aktiviert.\\n- Theming\\n  - Basis-Styling: Wir haben das CSS auf den Komponenten auf das Wesentliche reduziert. Das Styling beinhaltet prim\xe4r nur noch Layout-Definitionen ohne Farben, Abst\xe4nde und Tokens. Somit kann das Erstellen von eigenen Themes deutlich vereinfacht werden.\\n  - Alle unsere Themes wurden bez\xfcglich der neuen Basis-Styling-Definitionen angepasst und konnten dadurch deutlich vereinfacht werden.\\n  - Neue Themes\\n    - Theme der Europ\xe4ischen Kommission\\n    - Theme der Europ\xe4ischen Union\\n    - Theme f\xfcr die neue Version des Design System Zoll (v2)\\n    - Theme des Bundes Styleguides (Bundesregierung)\\n    - Theme des Bundeszentralamt f\xfcr Steuern (WIP)\\n    - Theme des Freistaats Th\xfcringen (f\xfcr Demozwecke)\\n- Dokumentation\\n  - Code-Beispiele\\n    - Es gibt eine Beispiel-Anwendung (<KolLink _href=\\"/sample-react/#/handout\\" _label=\\"Sample-App\\" _target=\\"samples\\" />) mit zahlreichen Code-Beispielen.\\n    - Code-Beispiele wurden erweitert und aktualisiert\\n    - Beispiel-Anwendung kann ausgecheckt und lokal gestartet werden (ist im KoliBri-Repository).\\n    - Code-Bespiele werden jetzt in der Dokumentation angezeigt.\\n    - Code-Beispiele beinhaltet eine Handout-Sicht f\xfcr Pr\xe4sentationen von Themes.\\n  - Texte\\n    - Die Texte wurde \xfcberarbeitet und aktualisiert.\\n    - Die Texte wurde auf Englisch \xfcbersetzt.\\n  - Live-Editor (beta): Alle Komponenten k\xf6nnen jetzt live umkonfiguriert werden. Die \xc4nderungen werden daneben im Viewer direkt auf der Komponente angezeigt.\\n- Funktionalit\xe4ten\\n  - Der Link erm\xf6glicht jetzt die Angabe eines Dateinames f\xfcr den Download-Link.\\n  - Der Progress kann jetzt auch den Fortschritt als lesbaren Text anzeigen und eine Bezeichnung haben."},{"id":"wie-style-ich-eine-komponente","metadata":{"permalink":"/blog/wie-style-ich-eine-komponente","source":"@site/blog/2023-02-23.mdx","title":"Wie style ich eine Komponente?","description":"Am Beispiel der Badge-Komponente wollen wir einmal schauen, wie das Stylen funktioniert.","date":"2023-02-23T00:00:00.000Z","formattedDate":"23. Februar 2023","tags":[{"label":"theme","permalink":"/blog/tags/theme"},{"label":"tutorial","permalink":"/blog/tags/tutorial"}],"readingTime":1.74,"hasTruncateMarker":false,"authors":[{"name":"Martin Oppitz","title":"Architekt@ITZBund & Creator of KoliBri","url":"https://github.com/deleonio","imageURL":"https://avatars.githubusercontent.com/u/6279703","key":"deleonio"}],"frontMatter":{"slug":"wie-style-ich-eine-komponente","title":"Wie style ich eine Komponente?","authors":"deleonio","tags":["theme","tutorial"]},"prevItem":{"title":"Ank\xfcndigung Release 1.5","permalink":"/blog/release-1.5"},"nextItem":{"title":"Eigene Themes unabh\xe4ngig umsetzen","permalink":"/blog/eigene-themes-unabhaengig-umsetzen"}},"content":"import { KolLink, KolTable } from \'@public-ui/react\';\\n\\n\\nAm Beispiel der Badge-Komponente wollen wir einmal schauen, wie das Stylen funktioniert.\\n\\n## Herausforderung\\n\\nDie Badge-Komponente hat einen Smart-Button und der soll optisch kleiner aussehen, wie ein Button, der immer mindestens\\n44px hoch und breit ist.\\n\\n- [ ] Bild einf\xfcgen vorher\\n\\nWir sehen im nachfolgenden HTML-Snippet, dass der umschlie\xdfende Span die Badge-Hintergrundfarbe bestimmt. Da\\nder Button innerhalb des Span ist, wird die Hintergrundfarbe auch auf den Button gesetzt. Der Button muss\\nmindestens 44px hoch und breit sein, also wird auch der \xe4u\xdfere Span mindestens 44px hoch und breit.\\n**Das wollen wir nicht.**\\n\\n```html\\n<span class=\\"smart-button\\" style=\\"background-color: rgb(204, 222, 218); color: rgb(0, 78, 55);\\">\\n\\t<kol-span-wc class=\\"hydrated\\">\\n\\t\\t<span>\\n\\t\\t\\t<span>Badge mit Schalter</span>\\n\\t\\t</span>\\n\\t</kol-span-wc>\\n\\t<kol-button-wc _icon-only=\\"\\" class=\\"hydrated\\">\\n\\t\\t<button aria-labelledby=\\"cf22bf\\" class=\\"normal icon-only\\" type=\\"button\\">\\n\\t\\t\\t<kol-span-wc class=\\"icon-only hydrated\\" _icon-only=\\"\\">\\n\\t\\t\\t\\t<span>\\n\\t\\t\\t\\t\\t<kol-icon class=\\"icon left hydrated\\" style=\\"\\"></kol-icon>\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t</kol-span-wc>\\n\\t\\t</button>\\n\\t\\t<kol-tooltip aria-hidden=\\"true\\" class=\\"hydrated\\">\\n\\t\\t\\t<div id=\\"floating\\" style=\\"left: 1233.91px; top: 312.5px; display: none; visibility: hidden;\\">\\n\\t\\t\\t\\t<div id=\\"arrow\\" style=\\"left: 19px; bottom: -5px;\\"></div>\\n\\t\\t\\t\\t<kol-badge id=\\"cf22bf\\" class=\\"hydrated\\" style=\\"\\"></kol-badge>\\n\\t\\t\\t</div>\\n\\t\\t</kol-tooltip>\\n\\t</kol-button-wc>\\n</span>\\n```\\n\\n## L\xf6sung\\n\\n### Idee 1\\n\\nWir optimieren die Komponente, indem wir die Hintergrundfarbe vom umschlie\xdfenden Span entfernen und auf die beiden\\ninneren Span-Elemente \xfcbertragen.\\n\\n```html\\n<span class=\\"smart-button\\" style=\\"color: rgb(0, 78, 55);\\">\\n\\t<kol-span-wc class=\\"hydrated\\" style=\\"background-color: rgb(204, 222, 218);\\">\\n\\t\\t<span>\\n\\t\\t\\t<span>Badge mit Schalter</span>\\n\\t\\t</span>\\n\\t</kol-span-wc>\\n\\t<kol-button-wc _icon-only=\\"\\" class=\\"hydrated\\">\\n\\t\\t<button aria-labelledby=\\"cf22bf\\" class=\\"normal icon-only\\" type=\\"button\\">\\n\\t\\t\\t<kol-span-wc class=\\"icon-only hydrated\\" _icon-only=\\"\\" style=\\"background-color: rgb(204, 222, 218);\\">\\n\\t\\t\\t\\t<span>\\n\\t\\t\\t\\t\\t<kol-icon class=\\"icon left hydrated\\" style=\\"\\"></kol-icon>\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t</kol-span-wc>\\n\\t\\t</button>\\n\\t\\t<kol-tooltip aria-hidden=\\"true\\" class=\\"hydrated\\">\\n\\t\\t\\t<div id=\\"floating\\" style=\\"left: 1233.91px; top: 312.5px; display: none; visibility: hidden;\\">\\n\\t\\t\\t\\t<div id=\\"arrow\\" style=\\"left: 19px; bottom: -5px;\\"></div>\\n\\t\\t\\t\\t<kol-badge id=\\"cf22bf\\" class=\\"hydrated\\" style=\\"\\"></kol-badge>\\n\\t\\t\\t</div>\\n\\t\\t</kol-tooltip>\\n\\t</kol-button-wc>\\n</span>\\n```\\n\\n**Das geht aber nicht**, weil wir an den 2. Span nicht rankommen. Wir m\xfcssen also eine andere L\xf6sung finden.\\n\\n### Idee 2\\n\\nEs bleibt beim der initialen Komponenten-Konstruktion. Wir versuchen es mit CSS und erzwingen eine Zeilenh\xf6he f\xfcr\\nden umschlie\xdfenden Span.\\n\\n- [ ] Bild Heihgt 1.75rem einf\xfcgen\\n\\nWir sehen im Bild, dass der linke Rand des Button oben rausragt. Das k\xf6nnen wir aber leicht l\xf6sen, indem wir\\nden linken Rand des Buttons auf 0 setzen und stattdessen einen rechten Rand am Text-Span setzen."},{"id":"eigene-themes-unabhaengig-umsetzen","metadata":{"permalink":"/blog/eigene-themes-unabhaengig-umsetzen","source":"@site/blog/2023-02-02.mdx","title":"Eigene Themes unabh\xe4ngig umsetzen","description":"Ein gro\xdfer Vorteil von KoliBri liegt in seiner besonders guten Wiederverwendbarkeit und hohen Flexiblit\xe4t. Denn auf","date":"2023-02-02T00:00:00.000Z","formattedDate":"2. Februar 2023","tags":[{"label":"theme","permalink":"/blog/tags/theme"},{"label":"style","permalink":"/blog/tags/style"},{"label":"styleguide","permalink":"/blog/tags/styleguide"},{"label":"corporate design","permalink":"/blog/tags/corporate-design"},{"label":"design system","permalink":"/blog/tags/design-system"}],"readingTime":3.67,"hasTruncateMarker":false,"authors":[{"name":"Martin Oppitz","title":"Architekt@ITZBund & Creator of KoliBri","url":"https://github.com/deleonio","imageURL":"https://avatars.githubusercontent.com/u/6279703","key":"deleonio"}],"frontMatter":{"slug":"eigene-themes-unabhaengig-umsetzen","title":"Eigene Themes unabh\xe4ngig umsetzen","authors":"deleonio","tags":["theme","style","styleguide","corporate design","design system"]},"prevItem":{"title":"Wie style ich eine Komponente?","permalink":"/blog/wie-style-ich-eine-komponente"},"nextItem":{"title":"Button- und Link-Komponenten","permalink":"/blog/button-und-link-komponenten"}},"content":"import { KolLink, KolTable } from \'@public-ui/react\';\\n\\n\\nEin gro\xdfer Vorteil von KoliBri liegt in seiner besonders guten Wiederverwendbarkeit und hohen Flexiblit\xe4t. Denn auf\\nBasis der semantisch barrierefreien Komponenten, in denen alle technische und gesetzliche Anforderungen umgesetzt\\nsind, k\xf6nnen eigene Themes unabh\xe4ngig erstellt werden.\\n\\n## R\xfcckblick\\n\\nKoliBri wurde als internes Projekt des ITZBund realisiert und hat sich nat\xfcrlich dabei anfangs vor allem auf die Bed\xfcrfnisse interner\\nProjekte fokussiert. Hierbei sind in erster Linie zahlreiche Themes umgesetzt worden, die nur intern Anwendung finden.\\n\\n<KolTable\\n\\t_caption=\\"Liste ausgew\xe4hlter internen Themes\\"\\n\\t_headers={{\\n\\t\\thorizontal: [\\n\\t\\t\\t[\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tlabel: \'Name\',\\n\\t\\t\\t\\t\\twidth: \'5em\',\\n\\t\\t\\t\\t\\tkey: \'name\',\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tlabel: \'Verwendung\',\\n\\t\\t\\t\\t\\tkey: \'usage\',\\n\\t\\t\\t\\t},\\n\\t\\t\\t],\\n\\t\\t],\\n\\t}}\\n\\t_data={[\\n\\t\\t{\\n\\t\\t\\tname: \'BMF\',\\n\\t\\t\\tusage: \'Verwendung im BMF f\xfcr die Modernisierung der Haushaltsverfahren\',\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: \'DESY\',\\n\\t\\t\\tusage: \'Verwendung f\xfcr das Portal im Umfeld der Generalzolldirektion\',\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: \'MAPZoll\',\\n\\t\\t\\tusage: \'Verwendung f\xfcr das Mitarbeiterportal im Umfeld der Generalzolldirektion\',\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: \'Zoll\',\\n\\t\\t\\tusage: \'Verwendung f\xfcr das neue Mitarbeiterportal im Umfeld der Generalzolldirektion\',\\n\\t\\t},\\n\\t]}\\n/>\\n\\n<br />\\n\\nDar\xfcber hinaus wurden auch einige Themes zum Zwecke der Verbesserung umgesetzt, die als Proof-of-Concepts (PoC) dienten.\\n\\n<KolTable\\n\\t_caption=\\"Liste ausgew\xe4hlter PoC-Themes\\"\\n\\t_headers={{\\n\\t\\thorizontal: [\\n\\t\\t\\t[\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tlabel: \'Name\',\\n\\t\\t\\t\\t\\twidth: \'5em\',\\n\\t\\t\\t\\t\\tkey: \'name\',\\n\\t\\t\\t\\t},\\n\\t\\t\\t\\t{\\n\\t\\t\\t\\t\\tlabel: \'Verwendung\',\\n\\t\\t\\t\\t\\tkey: \'usage\',\\n\\t\\t\\t\\t},\\n\\t\\t\\t],\\n\\t\\t],\\n\\t}}\\n\\t_data={[\\n\\t\\t{\\n\\t\\t\\tname: \'BY\',\\n\\t\\t\\tusage: \'Umsetzung des Online-Styleguides der Bayerischen Staatsregierung als Proof-of-Concept zur Verifizierung und Verbesserung der KoliBri-Komponenten\',\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: \'HH\',\\n\\t\\t\\tusage: \'Umsetzung des Styleguides der Hansestadt Hamburg als Proof-of-Concept zur Verifizierung und Verbesserung der KoliBri-Komponenten\',\\n\\t\\t},\\n\\t\\t{\\n\\t\\t\\tname: \'TH\',\\n\\t\\t\\tusage: \'Umsetzung des Styleguides des Freistaates Th\xfcringens als Proof-of-Concept zur Verifizierung und Verbesserung der KoliBri-Komponenten\',\\n\\t\\t},\\n\\t]}\\n/>\\n\\n## Migration\\n\\nWir beschreiben jetzt hier in der Migration einfach mal, wie wir das im ITZBund exemplarisch umgesetzt haben, weil dass sicher\\nein interessanter Aspekt f\xfcr andere Beh\xf6rden, Organisationen und Unternehmen ist, wie sie eigene Themes intern bereitstellen\\nk\xf6nnen.\\n\\nIm Grunde haben wir ein neues Repository angelegt und ein Theme-Projekt erstellt (siehe n\xe4chsten Abschnitt), in dem wir alle\\ninternen Themes pflegen. Wir haben erstmal alle Themes in einem Repository, weil wir das f\xfcr die Entwicklung aktuell einfacher\\nfinden. Es ist aber auch m\xf6glich, die Themes in unterschiedlichen Repositories jeweils einzeln zu pflegen.\\n\\nMittels des TypeScript-Compilers wird das Theme-Projekt in ein JavaScript-Projekt kompiliert und als NPM-Paket <code>@itzbund/interne-kolibri-themes</code>\\nin unsere interne NPM-Registry versioniert gepublished.\\n\\nDamit die entwickelnden Projekte jetzt das neue Theme-Paket installieren und verwenden k\xf6nnen, muss zun\xe4chst die NPM-Konfiguration <code>.npmrc</code>\\nim Projekt-Verzeichnis erweitert und die neue Abh\xe4ngigkeit in die <code>package.json</code> hinzugef\xfcgt werden.\\n\\n**`.npmrc`** (kann mit im Projekt-Verzeichnis liegen oder im Home-Verzeichnis des Benutzers)\\n\\n```bash\\n@itzbund:registry=https://<URL-zur-internen-registry>\\n```\\n\\n**`package.json`** (im Projekt-Verzeichnis)\\n\\n```json\\n{\\n\\t\\"dependencies\\": {\\n\\t\\t\\"@itzbund/interne-kolibri-themes\\": \\"1.0.0\\"\\n\\t}\\n}\\n```\\n\\n## Eigenes Theme erstellen\\n\\nIn diesem Abschnitt wollen wir einen kurzen Einblick geben, wie einfach es ist, ein eigenes Theme zu erstellen.\\n\\n### Rationale\\n\\nEiner der wichtigsten Punkte, die man verstehen muss, liegt darin, dass KoliBri sich auf kleinteilige\\nh\xe4ufig wiederverwendete Komponenten konzentriert (mehr hierzu im <KolLink _href=\\"/docs/manifest\\" _label=\\"Manifest\\" />).\\nDas f\xfchrt dazu, dass wir uns vorallem auf standardisierbare Komponenten fokussieren. Deutlicher wird dies,\\nwenn wir uns vorstellen, eine redundante Umsetzung einer Basis-Komponente unter Beachtung der technischen und\\ngesetzlichen Anforderungen zu entwickeln und am Ende feststellen - die verh\xe4lt sich ja genauso, wie eine KoliBri-\\nKomponente und ist nahezu gleich semantisch aufgebaut. Insbesondere die technisch semantischen Vorgaben des W3C\\nf\xfcr die assistive Unterst\xfctzung (Barrierefreiheit) f\xf6rdern das Standardisierungspotenzial.\\n\\nWir k\xf6nnen somit von einer hohen \xdcberdeckung von Komponenten ausgehen, die allgemein jedes Design System oder\\nKomponenten-Bibliothek beinhalten und sich in der KoliBri-Sammlung verwendbar wiederfinden. Durch das Kompositionsprinzip\\nkann einfach die passende Teilmenge aus KoliBri ausgew\xe4hlt und wiederverwendet werden. Alle nicht vereinbarten Komponenten\\nk\xf6nnen unabh\xe4ngig von KoliBri und unternehmensspezifisch umgesetzt werden.\\n\\n> **Hinweis:** Es ist immer m\xf6glich eine Konstellation gegen die Wiederverwendung einer KoliBri-Komponenten aufzustellen,\\n> die auf die Abweichung von der Referenzimplementierung abzielt. Es ist nicht unsere Entscheidung ob die aufgezeigte\\n> Abweichung eine vollst\xe4ndige Eigenentwicklung wirtschaftlich und \xf6konomisch rechtfertigt. Wir bieten eine L\xf6sung an, die\\n> von alle frei und gepr\xfcft genutzt werden kann.\\n\\n### Umsetzung\\n\\nMit Hilfe der KoliBri-CLI (<code>npm init kolibri my-theme</code>) kann ein neues Theme-Projekt generiert werden. Das Theme-Projekt\\nist ein TypeScript-Projekt und beinhalten schon ein Dummy-Theme. Mit Hilfe des KoliBri-Designers kann dann ein Theme\\ninteraktiv auf den Basis-Komponenten erstellt, gespeichert, geladen und weiter gepflegt werden. Der vom Designer generierte Code wird\\neinfach in das Theme-Projekt kopiert und kann dann mit dem TypeScript-Compiler kompiliert werden. Anschlie\xdfend kann es mittels NPM\\neine interne oder in die \xf6ffentliche NPM-Registry gepublished werden."},{"id":"button-und-link-komponenten","metadata":{"permalink":"/blog/button-und-link-komponenten","source":"@site/blog/2023-01-09.mdx","title":"Button- und Link-Komponenten","description":"Wir bieten heute die Varianten von Button, ButtonLink, Link und LinkButton an. Zuk\xfcnftig werden wir zus\xe4tzlich den ButtonToggle (Toogle-Button) anbieten. Alle semantischen Links unterst\xfctzen dabei nur noch href und alle Buttons nur noch on als semantischen \\"Klick\\". Optisch gibt es Buttons die genau wie Links aussehen und Links die genauso wie Buttons aussehen.","date":"2023-01-09T00:00:00.000Z","formattedDate":"9. Januar 2023","tags":[{"label":"button","permalink":"/blog/tags/button"},{"label":"link","permalink":"/blog/tags/link"}],"readingTime":2.95,"hasTruncateMarker":false,"authors":[{"name":"Martin Oppitz","title":"Architekt@ITZBund & Creator of KoliBri","url":"https://github.com/deleonio","imageURL":"https://avatars.githubusercontent.com/u/6279703","key":"deleonio"}],"frontMatter":{"slug":"button-und-link-komponenten","title":"Button- und Link-Komponenten","authors":"deleonio","tags":["button","link"]},"prevItem":{"title":"Eigene Themes unabh\xe4ngig umsetzen","permalink":"/blog/eigene-themes-unabhaengig-umsetzen"},"nextItem":{"title":"\xdcbersetzungen","permalink":"/blog/ubersetzungen"}},"content":"Wir bieten heute die Varianten von Button, ButtonLink, Link und LinkButton an. Zuk\xfcnftig werden wir zus\xe4tzlich den ButtonToggle (Toogle-Button) anbieten. Alle semantischen Links unterst\xfctzen dabei nur noch `_href` und alle Buttons nur noch `_on` als semantischen \\"Klick\\". Optisch gibt es Buttons die genau wie Links aussehen und Links die genauso wie Buttons aussehen.\\n\\nIn der folgenden Tabelle wir eine \xdcbersicht \xfcber die Unterschiede dargestellt:\\n\\n|  Merkmal  | Link | LinkButton |  Button  | ButtonLink | ButtonToggle<sup>\\\\*</sup> |\\n| :-------: | :--: | :--------: | :------: | :--------: | :-----------------------: |\\n|  Design   | Link |   Button   |  Button  |    Link    |          Button           |\\n| Semantik  | `a`  |    `a`     | `button` |  `button`  |         `button`          |\\n|  `_href`  |  \u2795  |     \u2795     |    \u2796    |     \u2796     |            \u2796             |\\n|   `_on`   |  \u2796  |     \u2796     |    \u2795    |     \u2795     |            \u2795             |\\n| `focus()` |  \u2795  |     \u2795     |    \u2795    |     \u2795     |            \u2795             |\\n|   Wert    |  \u2796  |     \u2796     |    \u2796    |     \u2796     |         `boolean`         |\\n\\n<small>\\n\\t<sup>*</sup> Die Komponente ButtonToogle ist aktuell noch nicht umgesetzt. Sie ist aber spezifiziert und im Backlog.\\n</small>\\n\\n## Motivation\\n\\nKoliBri strebt neben einer hohe Standardkonformit\xe4t auch eine sehr gute Wiederverwendbarkeit (Developer Experience DX) an.\\nDiese wird durch die Einheitlichkeit zu den HTML-Attributen und dem sparsamen Umgang mit zus\xe4tlichen Properties adressiert.\\n\\n> **Rationale:** Wenn wir bei einer Link-Komponente, die zum Navigieren gedacht ist, die beiden Verhalten **Navigieren** und **Klick ohne Navigieren**\\n> anbieten w\xfcrden, dann h\xe4\xe4ten wir einen Widerspruch im Verhalten. Auch bei der Verwendung in der Entwicklung m\xfcssten wir die Properties `_href` und `_on`\\n> optional machen und wir k\xf6nnten nicht mehr vor der Falschverwendung warnen (Statische Codepr\xfcfung).\\n\\n## Herausforderungen\\n\\nDiese strenge Auslegung kann dazu f\xfchren, dass es bei der Entwicklung mit anderen Bibliotheken und Frameworks zu Problemen kommt.\\nVorallem dann, wenn diese bei einem Link einen Klick erwarten.\\n\\n### React-Router\\n\\nDer React-Router bildet das Navigieren \xfcber Klicks ab. Bei der Verwendung mit der Link-Komponente gibt es unterschiedliche M\xf6glichkeiten der Implementierung.\\n\\n**Wrapping:**\\n\\n```tsx\\n<Link to=\\"/\\">\\n\\t<KolLink _href=\\"\\">Home</KolLink>\\n</Link>\\n<Link to=\\"/test\\">\\n\\t<KolLink _href=\\"\\">Test</KolLink>\\n</Link>\\n```\\n\\n**Per Klick:**\\n\\n```tsx\\n<KolButtonLink\\n\\t_label=\\"Home\\"\\n\\t_on={{\\n\\t\\tonClick: () => navigate(\\"/\\")\\n\\t}}\\n>\\n\\tHome\\n</KolButtonLink>\\n<KolButtonLink\\n\\t_label=\\"Test\\"\\n\\t_on={{\\n\\t\\tonClick: () => navigate(\\"/test\\")\\n\\t}}\\n>\\n\\tTest\\n</KolButtonLink>\\n```\\n\\n**React-Link:**\\n\\n```tsx\\n<KolLink\\n\\t_href=\\"\\"\\n\\t_label=\\"Home\\"\\n\\tonClick={() => navigate(\\"/\\")}\\n>\\n\\tHome\\n</KolLink>\\n<KolLink\\n\\t_href=\\"\\"\\n\\t_label=\\"Test\\"\\n\\tonClick={() => navigate(\\"/test\\")}\\n>\\n\\tTest\\n</KolLink>\\n```\\n\\n> **Hinweis:** `_href=\\"\\"` ist eigentlich nicht erlaubt.\\n\\nHier gibt es auch ein kleines Code-Beispiel zum <kol-link _href=\\"https://codesandbox.io/s/kolibri-sample-react-link-sample-1jgz8v?file=/src/Navigation.tsx:0-112\\" _label=\\"\\" _target=\\"sandbox\\">Navigieren mit React-Router</kol-link>.\\n\\nDie angegebenen Beispiele zeigen, dass die Link- und ButtonLink-Komponente f\xfcr die direkte Nutzung mit React-Router geeignet sind. Allerdings wird die Link-Komponente auch innerhalb anderer KoliBri-Komponenten verwendet. **Wo das so nicht funktionieren w\xfcrde!**\\n\\n### Server-Side-Rendering\\n\\nDas Server-Side-Rendering ist sehr \xe4hnlich zum React-Router, weil dieser technisch sehr stark durch das Framework Remix getrieben ist.\\nRemix ist ein Framework zum Erstellen von hybriden Client- und Server-Side-Webapplications. Das hei\xdft die Implementierung unterscheiden sich nicht, ob ich die Anwendung sp\xe4ter als Client- oder Server-seitige Anwendung bauen m\xf6chte.\\nF\xfcr Server-Side-Anwendungen m\xfcssen die navigierenden Links mit einem Klick funktionieren, weil diese Anwendungen auf dem Server und nicht im Browser ausgef\xfchrt werden.\\n\\nUm die Wiederverwendbarkeit von KoliBri auch f\xfcr Server-Side-Webapplications zu gew\xe4hrleisten, muss der Seitenwechsel auch durch **Klick ohne Navigieren** m\xf6glich sein.\\n\\n## L\xf6sung\\n\\nUm die Herausforderungen zu l\xf6sen, werden alle Komponenten, denen Link-Definitionen \xfcbergeben werden, erweitert. Wenn diesen Komponenten wahlweise auch ButtonLink-Definitionen \xfcbergeben werden k\xf6nnen, dann k\xf6nnen diese auch Klicks abbilden ohne zu Navigieren, sehen aber optisch weiterhin wie Links aus.\\n\\nFolgende Komponenten m\xfcssen dazu noch erweitert werden:\\n\\n- Breadcrumb\\n- LinkGroup\\n- Nav\\n- SkipNav"},{"id":"ubersetzungen","metadata":{"permalink":"/blog/ubersetzungen","source":"@site/blog/2023-01-04.mdx","title":"\xdcbersetzungen","description":"Als Open Source-Projekt ist es f\xfcr KoliBri wichtig eine Community rund","date":"2023-01-04T00:00:00.000Z","formattedDate":"4. Januar 2023","tags":[{"label":"website","permalink":"/blog/tags/website"},{"label":"seo","permalink":"/blog/tags/seo"},{"label":"spec","permalink":"/blog/tags/spec"}],"readingTime":0.675,"hasTruncateMarker":false,"authors":[{"name":"Martin Oppitz","title":"Architekt@ITZBund & Creator of KoliBri","url":"https://github.com/deleonio","imageURL":"https://avatars.githubusercontent.com/u/6279703","key":"deleonio"}],"frontMatter":{"slug":"ubersetzungen","title":"\xdcbersetzungen","authors":"deleonio","tags":["website","seo","spec"]},"prevItem":{"title":"Button- und Link-Komponenten","permalink":"/blog/button-und-link-komponenten"}},"content":"Als Open Source-Projekt ist es f\xfcr KoliBri wichtig eine Community rund\\num das Thema barrierefreie Basis-Komponenten aufzubauen. Damit auch hierf\xfcr\\neine optimiale Zug\xe4nglichkeit gegeben ist, sollten alle technischen\\nSpezifikationen mindestens in **English** verf\xfcgbar sein. Wie auch in der\\nWissenschaft erm\xf6glicht das Feedback und Mitwirkung aus allen potenziellen\\nBereichen.\\n\\n## Ma\xdfnahmen\\n\\n### Englische Spezifikation\\n\\nDie technische Spezifikation wird automatisiert aus dem Quellcode generiert\\nund synchronisiert. Alle Informationen die wir aus dem Quellcode in die\\nSpezifikation \xfcberf\xfchren, wird in Zukunft ausschlie\xdflich in **English**\\nbereitgestellt.\\n\\nDas betrifft beispielsweise:\\n\\n- API-Spezifikation auf der Website\\n- Details in der IDE-Autovervollst\xe4ndigung\\n- Darstellungen die aus den Meta-Daten des Quellcodes generiert werden\\n\\n### Multilinguale Dokumentation\\n\\nDie Dokumentation wird in Zukunft (mittelfristig) alle Inhalte jeweils prim\xe4r in\\n**Deutsch** und sekund\xe4r in **English** bereitgestellt.\\n\\nDas betrifft beispielsweise:\\n\\n- Anleitungen, Konzepte, Beispiele uvm.\\n- Blog-Beitr\xe4ge"}]}')}}]);