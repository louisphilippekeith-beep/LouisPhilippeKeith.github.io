LOUIS-PHILIPPE KEITH — ENGINEERING PORTFOLIO

HOW TO VIEW
Open index.html in Chrome, Firefox, Edge, or Safari. All site functionality works without a server, except the optional Google Fonts load (which requires internet). The website is responsive on phones and desktops.

HOW TO PUBLISH
Upload the entire folder (index.html, styles.css, script.js, assets/) to Netlify, GitHub Pages, or another static web host. You can also drag-and-drop the folder contents to Netlify Drop.

HOW TO ADD YOUR TABLE PHOTOS
The square-tube table currently has a custom illustration. To replace it with an actual table photo:
1. Save your chosen table photo as assets/steel-table.jpg.
2. Open index.html in a text editor.
3. Find the project section beginning with "05 / PERSONAL PROJECT".
4. Find <div class="image-button table-visual"...> and replace that entire parent div (through its matching closing div) with:
<button class="image-button" data-image="assets/steel-table.jpg" data-caption="Square-tube steel table for a custom reptile enclosure"><img src="assets/steel-table.jpg" alt="Fabricated square-tube steel table" loading="lazy"><span class="view-image">VIEW PHOTO ↗</span></button>
5. Save the file. You can add more images to the gallery using the existing gallery buttons as examples.

EDIT CONTENT
Edit index.html to change text, project descriptions, and contact info. Edit styles.css to change colours or layout. No accounts, software setup, or paid libraries required.

NOTES
The $2 figure describes material cost only and should not be presented as full manufacturing cost. The website contains intentionally conservative descriptions of fabrication processes where exact operations are not documented.
