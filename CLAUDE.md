# Règles de gestion du site LUCIA GROUP

Ce dépôt est le site de LUCIA GROUP, géré par Claude à la demande de l'équipe. Les demandes arrivent en français.

## Toujours les deux langues

- Le site existe en français (`index.html`) et en anglais (`en/index.html`). Les deux pages ont exactement la même structure, section par section.
- Toute modification de contenu se fait dans les deux fichiers dans la même pull request. Si on donne un texte en français seulement, Claude rédige la version anglaise (anglais professionnel, vocabulaire minier et industriel) et la signale dans la description de la PR pour relecture.
- Les noms propres ne se traduisent pas : LUCIA GROUP, AGB Hub, African Funds, MTC, noms de sites miniers et de villes.

## Ajouter une réalisation

1. Mettre la photo dans `assets/img/realisations/AAAA-MM-nom-court.jpg` (largeur 1200 px maximum, JPEG compressé, moins de 300 Ko).
2. Ajouter un `<article class="realisation" data-pole="…">` en tête de `.grille-realisations` dans les deux pages. `data-pole` vaut `trading`, `logistique`, `construction` ou `design` (identique dans les deux langues, il sert au filtre).
3. Remplacer le cadre pointillé par `<div class="photo"><img src="/assets/img/realisations/…" alt="…" loading="lazy"></div>` avec un texte `alt` traduit.
4. Garder au plus six réalisations affichées ; retirer la plus ancienne au besoin.

## Photos

- Une photo remplace un `<div class="photo photo-vide">[PHOTO : …]</div>` par `<div class="photo"><img src="/assets/img/photos/…" alt="…"></div>` dans les deux pages.
- N'utiliser que des photos fournies par LUCIA GROUP ou libres de droits avec leur source notée dans la PR. Jamais de photo présentée comme un chantier LUCIA GROUP si ce n'en est pas un.

## Contenu

- Les textes reprennent le profil LUCIA GROUP 2026 (`profil/profil-lucia-group-fr.html` et `profile-lucia-group-en.html` dans les fichiers du projet). Quand le profil change, le site suit, et inversement.
- Les photos de `assets/img/photos/` viennent du profil (banque d'images sous licence Unsplash, validées par le client). Elles illustrent les offres ; elles ne doivent jamais servir de photo de réalisation. Les remplacer par de vraies photos LUCIA GROUP dès qu'il y en a.

- Ne jamais inventer de chiffres, clients, certifications, coordonnées ou références : les textes entre crochets `[…]` restent tant que l'équipe n'a pas donné l'information.
- Ton : sobre, concret, phrases courtes. Pas de superlatifs.

## Technique

- HTML et CSS statiques, sans compilation. Les styles vont dans `assets/css/style.css`, pas dans des attributs `style`.
- Vérifier chaque modification en ouvrant les deux pages à 1280 px et 390 px de large : pas de défilement horizontal, pas d'erreur dans la console.
- Une branche et une pull request par demande ; la mise en ligne se fait à la fusion dans `main`.

## Mentions légales (source : RCCM et Identification nationale)

- Dénomination : LUCIA GROUPE S.A.S. (nom commercial affiché : LUCIA GROUP). Ne pas afficher le capital social sur le site (demande du client).
- Téléphone et WhatsApp : +243 802 074 111. E-mail : info@luciagroup-rdc.com (contact et `data-email` du formulaire).
- RCCM CD/KNM/RCCM/26-B-02851 · Id. Nat. 01-S9502-N15977Q · NIF : à compléter.
- Siège : 2, avenue de la Paix, Q/Industriel, C/Limete, Kinshasa, RDC.
