export default function PlaceholderLabel({
  position = 'top-right',
  tone = 'light',
}: {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  tone?: 'light' | 'dark';
}) {
  const pos = {
    'top-right': 'top-3 right-3',
    'top-left': 'top-3 left-3',
    'bottom-right': 'bottom-3 right-3',
    'bottom-left': 'bottom-3 left-3',
  }[position];
  const color = tone === 'dark' ? 'text-black/40' : 'text-white/40';
  return (
    <span
      className={`pointer-events-none absolute ${pos} z-20 text-[10px] uppercase tracking-[0.3em] ${color}`}
    >
      Platzhalter
    </span>
  );
}
