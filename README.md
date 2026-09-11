# Soshie

Two pages built from the eight STL parts of the Soshie print set.

- `/` — **While You Sleep.** A full day passes every sixty seconds: an analog
  clock sweeps, the sky runs from her own pink-to-yellow gradient through dusk
  into night and back, and the same light falls on the figure. Work keeps
  landing and keeps shipping through all of it. Click a brief to push it along
  early; she gets to it either way.
- `/model/` — the figure on its own, rotatable, with the print numbers.

`mark.js` holds the chest mark as the supplied vector, drawn straight onto a
canvas with `Path2D` so it stays exact at any size.

## Where the model comes from

The STLs export in shared world coordinates, so the eight parts assemble with
no transform at all. Every colour region — studs, belt, soles, each hair strand
— is already its own loose mesh island, so the paint is assigned per island by
a script, with vertical gradients on the suit and boots. Both arms are lowered;
the raised arm in the marketing render is not in the STL set.

## Publishing

GitHub Pages serves this folder as-is — no build, no bundler. Push to `main`.
