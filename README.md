# Soshie

Two pages built from the eight STL parts of the Soshie print set.

- `/` — **Soshie works while you sleep.** A full day passes every sixty
  seconds: the clock behind her sweeps, the sky runs from her own pink-to-yellow
  gradient through dusk into night and back, and the same values light the
  figure — warm at noon, dim and blue at four in the morning with a
  screen-coloured lamp on her face. Work ships throughout. She watches the
  pointer and shifts her weight the way someone standing does.
- `/model/` — the figure on its own, rotatable, with the print numbers.

`mark.js` holds the chest mark as the supplied vector, drawn straight onto a
canvas with `Path2D` so it stays exact at any size.

The root model is exported as four nodes — `Body`, `Head`, `ArmL`, `ArmR` —
each with its origin at the joint, so the head can turn and the arms can shift
without a skeleton.

## Where the model comes from

The STLs export in shared world coordinates, so the eight parts assemble with
no transform at all. Every colour region — studs, belt, soles, each hair strand
— is already its own loose mesh island, so the paint is assigned per island by
a script, with vertical gradients on the suit and boots. Both arms are lowered;
the raised arm in the marketing render is not in the STL set.

## Publishing

GitHub Pages serves this folder as-is — no build, no bundler. Push to `main`.
