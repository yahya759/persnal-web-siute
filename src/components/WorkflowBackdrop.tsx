/**
 * Decorative n8n-style workflow graph for the hero background.
 * Pure SVG, no dependencies. Dots travel along the connectors.
 */
const nodes = [
  { x: 40, y: 560 }, { x: 250, y: 600 }, { x: 470, y: 530 }, { x: 700, y: 610 }, { x: 930, y: 540 }, { x: 1150, y: 600 },
];

const paths = [
  'M 62 560 C 140 560, 170 600, 228 600',
  'M 272 600 C 360 600, 380 530, 448 530',
  'M 492 530 C 590 530, 610 610, 678 610',
  'M 722 610 C 810 610, 840 540, 908 540',
  'M 952 540 C 1040 540, 1060 600, 1128 600',
];

export function WorkflowBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1280 640"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 12%, #000 88%, transparent 100%)',
      }}
    >
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke="rgba(96,165,250,0.22)" strokeWidth="1.2" strokeDasharray="4 5" />
          <circle className="wf-pulse" r="3" fill="#60a5fa">
            <animateMotion dur={`${5 + (i % 3)}s`} begin={`${i * 0.9}s`} repeatCount="indefinite" path={d} />
            <animate attributeName="opacity" values="0;1;1;0" dur={`${5 + (i % 3)}s`} begin={`${i * 0.9}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}

      {nodes.map((n, i) => (
        <g key={i} transform={`translate(${n.x - 22} ${n.y - 22})`}>
          <rect width="44" height="44" rx="12" fill="#0B0D13" stroke="rgba(96,165,250,0.28)" strokeWidth="1.2" />
          <circle cx="22" cy="22" r="4" fill="rgba(96,165,250,0.55)" />
        </g>
      ))}
    </svg>
  );
}
