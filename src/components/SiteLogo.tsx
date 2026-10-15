type SiteLogoProps = {
  variant?: 'default' | 'inverse';
  size?: 'header' | 'footer';
};

export default function SiteLogo({ variant = 'default', size = 'header' }: SiteLogoProps) {
  return (
    <span className={`site-logo site-logo--${variant} site-logo--${size}`}>
      <svg className="site-logo__mark" viewBox="0 0 64 42" aria-hidden="true" focusable="false">
        <path
          d="M32 21c-6 0-8-11-15-11C5 10 5 32 17 32c7 0 9-11 15-11s8-11 15-11c12 0 12 22 0 22-7 0-9-11-15-11Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6.5"
        />
        <path d="M43 3h17v12l-4 3-4-3-4 3-5-3V3Z" fill="#009b68" />
        <path d="M53 5v8" stroke="#fff" strokeDasharray="2 2" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
      <span className="site-logo__wordmark"><span>Infinite</span> <strong>Coupons</strong></span>
    </span>
  );
}
