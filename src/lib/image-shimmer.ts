/**
 * Utility untuk menghasilkan SVG shimmer base64 placeholder untuk Next.js Image.
 * Menyediakan efek loading shimmer instan (0ms) sebelum gambar asli terunduh dari server.
 */

const shimmerSvg = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#F1EDE3" offset="20%" />
      <stop stop-color="#E3DED2" offset="50%" />
      <stop stop-color="#F1EDE3" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#F1EDE3" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

export const shimmerBlurDataUrl = (w: number = 720, h: number = 500): string =>
  `data:image/svg+xml;base64,${toBase64(shimmerSvg(w, h))}`;
