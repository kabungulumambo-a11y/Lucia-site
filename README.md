# LUCIA GROUP · site web

Site vitrine bilingue (français / anglais) de LUCIA GROUP : trading et fourniture, logistique, construction et design pour la zone minière de la RDC.

## Structure

- `index.html` : la page en français (langue par défaut, adresse `/`).
- `en/index.html` : la même page en anglais (adresse `/en/`).
- `assets/css/style.css` : couleurs, polices et mise en page, communes aux deux langues.
- `assets/js/main.js` : menu mobile, filtre des réalisations, formulaire de devis.
- `assets/img/` : logos (couleur, négatif, monochrome), favicon et photos (`photos/` pour les offres, `realisations/` pour les réalisations).
- `CLAUDE.md` : les règles que Claude suit pour gérer le site.

Le site est en HTML statique : aucune compilation, il suffit de publier les fichiers tels quels.

## Gérer le site avec Claude

Toute modification se demande à Claude dans le projet « Société LUCIA » : ajouter une réalisation, changer un texte, mettre une photo, compléter les coordonnées. Claude modifie les deux langues ensemble, ouvre une demande de modification (pull request) sur GitHub, et la mise en ligne se fait dès qu'elle est fusionnée dans `main`.

## Voir le site en local

```sh
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000 (français) et http://localhost:8000/en/ (anglais).

## Mise en ligne

Comme pour MAMBO GROUP : GitHub Pages publie la branche `main` (dossier racine) sur https://luciagroup-rdc.com (fichier `CNAME`). Le domaine et les adresses mail (Hostinger Mail, info@luciagroup-rdc.com) sont chez Hostinger. Les liens commencent par `/` : le site doit être servi à la racine du domaine. `_config.yml` empêche la publication de CLAUDE.md, README.md et des aperçus.

## Charte graphique

Couleurs reprises du logo validé (fichiers dans `assets/img/`, identiques à ceux du papier en-tête) :

| Couleur | HEX | Usage |
| --- | --- | --- |
| Vert LUCIA | `#0E4D45` | En-tête, hero, contact, logo |
| Orange LUCIA | `#F2A541` | Boutons (texte foncé), accents sur fond vert |
| Orange foncé | `#A35C0C` | Liens et surtitres sur fond clair |
| Vert pâle | `#CFE3DD` | Texte secondaire sur fond vert |
| Fond | `#F5F3EE` | Fond de page |
| Charbon | `#16211F` | Texte courant |

Polices : Archivo (titres) et Source Sans 3 (textes), chargées depuis Google Fonts.

## À compléter

- NIF : retiré du site en attendant le numéro (à ajouter dans le pied de page des deux pages).
- Liens des réseaux sociaux (`data-reseau` dans les deux pages).
- Réalisations (photos et textes réels).
- Remplacer à terme les photos d'illustration par de vraies photos LUCIA GROUP.
