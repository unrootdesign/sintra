# Soshie

One page, built from the eight STL parts of the Soshie print set.

A full day passes every sixty seconds. The clock behind her sweeps, the sky runs
from open daylight down through dusk into night and back, and the same values
light the figure — bright at noon, dim and blue at four in the morning with a
screen-coloured lamp on her face. Work ships throughout. She follows the pointer
and shifts her weight the way someone standing does.

Type is white at every hour. That is what lets the sky cross-fade continuously:
as soon as text has to flip from dark to light somewhere around dawn, the whole
transition reads as a step no matter how the colours are eased.

`mark.js` holds the chest mark as the supplied vector, filled straight onto a
canvas with `Path2D` so it stays exact at any size.

`soshie.glb` is exported as four nodes — `Body`, `Head`, `ArmL`, `ArmR` — each
with its origin at the joint, so the head turns and the arms drift without a
skeleton.

## Where the model comes from

The STLs export in shared world coordinates, so the eight parts assemble with
no transform at all. Every colour region — studs, belt, soles, each hair strand
— is already its own loose mesh island, so the paint is assigned per island by
a script, with vertical gradients on the suit and boots. Both arms are lowered;
the raised arm in the marketing render is not in the STL set.

## Publishing

GitHub Pages serves this folder as-is — no build, no bundler. Push to `main`.
