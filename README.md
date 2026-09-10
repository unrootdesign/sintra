# Soshie — 3D figure viewer

An in-browser viewer for the Soshie astronaut figure: the eight STL parts of the
print set, assembled, coloured, and served as a single glTF binary.

- `index.html` — the viewer (three.js from jsDelivr, no build step)
- `soshie.glb` — the model, 210k triangles, colour baked into vertex colours

## Where the model comes from

The STLs export in shared world coordinates, so the eight parts assemble with no
transform at all. Every colour region of the figure — studs, belt, soles, each
hair strand — is already its own loose mesh island, so the paint job is assigned
per island by a script rather than hand-painted, with vertical gradients on the
suit and the boots.

Both arms are lowered. The raised arm seen in the marketing render is not in the
STL set.

## Publishing

GitHub Pages serves this folder as-is — no build, no bundler. Push to `main`,
then in **Settings → Pages** choose *Deploy from a branch*, branch `main`, folder
`/ (root)`.
