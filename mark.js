/* The Sintra chest mark, straight from the supplied 35x31 vector —
   i stem, square tittle, the rule over the n, and the n itself. */
export const MARK_PATHS = [
  'M8.70801 30.4785H0V8.27246H8.70801V30.4785Z',
  'M26.4736 7.48926C30.0584 7.48936 32.4675 9.28935 33.7012 12.8887C33.9333 13.9769 34.0498 14.9635 34.0498 15.8486V30.4785H25.8633V18.8965C25.8632 16.7343 25.1088 15.3996 23.5996 14.8916C23.2803 14.8335 23.0186 14.8037 22.8154 14.8037H22.293C20.7547 14.8039 19.7385 15.7043 19.2451 17.5039C19.1871 17.7215 19.1582 17.9826 19.1582 18.2871V30.4785H10.8857V8.27246H19.1582V11.0596C21.132 8.67946 23.3671 7.48941 25.8633 7.48926H26.4736Z',
  'M8.70801 6.0957H0V0H8.70801V6.0957Z',
  'M33.8965 6.08105H10.8223V0.0283203H33.8965V6.08105Z',
];
export function drawMark(x, S){
  x.clearRect(0, 0, S, S);
  x.fillStyle = '#ffffff';
  x.beginPath(); x.arc(S/2, S/2, S*232/512, 0, Math.PI*2); x.fill();
  const k = 0.634 * S / 35;                 // 70% of the disc across
  x.save();
  x.translate(0.183*S, 0.2192*S);
  x.scale(k, k);
  x.fillStyle = '#000000';
  for (const d of MARK_PATHS) x.fill(new Path2D(d));
  x.restore();
}
