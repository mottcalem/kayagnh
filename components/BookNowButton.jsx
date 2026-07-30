'use client';

export default function BookNowButton({ className = 'btn btn-primary', children = 'Book Now', style }) {
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={() => document.getElementById('bookNowBtn')?.click()}
    >
      {children}
    </button>
  );
}
