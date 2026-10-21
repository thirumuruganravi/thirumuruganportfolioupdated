import { Code2 } from 'lucide-react';

interface BrandLogoProps {
  size?: number;
}

export default function BrandLogo({ size = 38 }: BrandLogoProps) {
  const iconSize = Math.round(size * 0.55);
  const borderRadius = Math.round(size * 0.28);

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${borderRadius}px`,
        background: 'linear-gradient(135deg, #FF6B00, #EA580C)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 16px rgba(234, 88, 12, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)',
        flexShrink: 0,
      }}
    >
      <Code2 size={iconSize} color="#FFFFFF" strokeWidth={2.5} />
    </div>
  );
}
