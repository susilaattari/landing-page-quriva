type OrnamentProps = {
  className?: string;
  color?: string;
  opacity?: number;
  patternId?: string;
};

/**
 * Pola geometri islami sederhana (bintang delapan).
 * Dekoratif: selalu aria-hidden, tidak membawa teks.
 */
export default function Ornament({
  className = '',
  color = '#A67C1A',
  opacity = 0.16,
  patternId = 'khatam',
}: OrnamentProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id={patternId} width="88" height="88" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1">
            <rect x="22" y="22" width="44" height="44" />
            <rect x="22" y="22" width="44" height="44" transform="rotate(45 44 44)" />
            <circle cx="44" cy="44" r="9" />
            <circle cx="0" cy="0" r="5" />
            <circle cx="88" cy="0" r="5" />
            <circle cx="0" cy="88" r="5" />
            <circle cx="88" cy="88" r="5" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} opacity={opacity} />
    </svg>
  );
}
