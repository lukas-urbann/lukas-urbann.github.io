# Lukáš Website
This is my website that I use as a portfolio. I wrote it from scratch and I am very proud of myself I must admit.

### Used packages
1. Tailwind CSS
2. Font Awesome
3. Eleventy (static site generator)

### Used images
Are either mine or free images downloaded from https://unsplash.com/

## Jak web upravovat

```
npm install      # jednou, po stažení repozitáře
npm run dev      # lokální náhled na http://localhost:8080 (obnovuje se sám)
npm run build    # vygeneruje hotový web do složky _site/
```

| Co chci změnit | Kde |
| --- | --- |
| Přidat / upravit / seřadit projekt | `src/_data/projects.yaml` (+ obrázek do `page/img/projects/`) |
| Texty webu (úvod, o mně, kontakt, formulář…) | `src/_data/strings.yaml` |
| E-mail, odkazy na sociální sítě, jazyky | `src/_data/site.yaml` |
| Rozložení hlavní stránky | `src/index.njk` |
| Navigace, patička, kartička projektu | `src/_includes/partials/` |
| Obrázky, fonty, CSS, JS, PHP, CV | `page/` (kopíruje se beze změny) |

Hlavní stránka se generuje ve dvou jazycích: anglicky na `/` a česky na `/cz/`.
Složka `_site/` se negeneruje do gitu – web sestaví a nasadí GitHub Actions po pushi do `main`.
