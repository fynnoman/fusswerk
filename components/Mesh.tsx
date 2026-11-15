export function HeroMesh() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <div
        className="absolute -top-[18vw] -left-[14vw] w-[62vw] h-[62vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(236, 201, 182, 0.65), transparent 62%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-[5vw] -right-[16vw] w-[64vw] h-[64vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 60% 40%, rgba(215, 229, 219, 0.9), transparent 60%)',
          filter: 'blur(72px)',
        }}
      />
      <div
        className="absolute bottom-[-18vw] left-[20vw] w-[46vw] h-[46vw] rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(232, 221, 198, 0.5), transparent 65%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}

export function SoftBlob({
  className = '',
  color = 'rgba(215, 229, 219, 0.9)',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at 50% 50%, ${color}, transparent 60%)`,
        filter: 'blur(60px)',
      }}
      aria-hidden
    />
  );
}
