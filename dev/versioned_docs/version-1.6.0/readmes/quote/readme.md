> <kol-badge _label="untested"></kol-badge> Diese neue Komponente wird als ungetestet markiert, da der vollständige Barrierefreiheitstest noch aussteht. Der vollständige Test kann bei neuen Komponenten und Funktionalitäten auch erst nach einem abgeschlossenen Release erfolgen.

Die **Quote**-Komponente verfügt über zwei Varianten, eine kurze Fließtext-(`inline`) und eine eingerückte(`block`) Variante. Beide Varianten enthalten einen Link auf die Quelle des Zitates.

## Verwendung

Mittels **`_label`** kann eine Überschrift gesetzt werden, während **`_quote`** das eigentliche Zitat enthält. Der Ursprung wird über **`_href`** gesetzt.
Die `inline`-Variante ist Standard, sofern die Eingerückte gewünscht ist, kann **`_variant`** auf `block` gesetzt werden.

## References

- <kol-link _href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/quote" _label="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/quote" _target="_blank"></kol-link>
- <kol-link _href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" _label="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite" _target="_blank"></kol-link>
- <kol-link _href="https://www.mediaevent.de/html/quote.html" _label="https://www.mediaevent.de/html/quote.html" _target="_blank"></kol-link>
- <kol-link _href="https://www.mediaevent.de/html/cite.html" _label="https://www.mediaevent.de/html/cite.html" _target="_blank"></kol-link>
- <kol-link _href="https://accessibleweb.com/question-answer/what-is-a-block-quote-and-when-should-i-use-it/" _label="https://accessibleweb.com/question-answer/what-is-a-block-quote-and-when-should-i-use-it/" _target="_blank"></kol-link>

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute  | Description                                                                                                                            | Type                                   | Default     |
| --------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- | ----------- |
| `_caption`            | `_caption` | <span className="text-red-500">**[DEPRECATED]**</span> Use \_label.<br/><br/>Deprecated: Defines the visible caption of the component. | `string` \| `undefined`                | `undefined` |
| `_href` _(required)_  | `_href`    | Defines the link to the source of the quote.                                                                                           | `string`                               | `undefined` |
| `_label`              | `_label`   | Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).                     | `string` \| `undefined`                | `undefined` |
| `_quote` _(required)_ | `_quote`   | Defines the text of the quote.                                                                                                         | `string`                               | `undefined` |
| `_variant`            | `_variant` | Defines which variant should be used for presentation.                                                                                 | `"block"` \| `"inline"` \| `undefined` | `'inline'`  |

## Dependencies

### Depends on

- [kol-link](./link)

### Graph

```mermaid
graph TD;
  kol-quote --> kol-link
  kol-link --> kol-link-wc
  kol-link-wc --> kol-span-wc
  kol-link-wc --> kol-icon
  kol-link-wc --> kol-tooltip-wc
  kol-span-wc --> kol-icon
  kol-tooltip-wc --> kol-span-wc
  style kol-quote fill:#f9f,stroke:#333,stroke-width:4px
```

---