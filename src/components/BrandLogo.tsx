type BrandLogoProps = { name: string };

export default function BrandLogo({ name }: BrandLogoProps) {
  const brand = name.toLowerCase();

  return (
    <span className={`brand-logo brand-logo--${brand.replace(/[^a-z]+/g, '-')}`} role="img" aria-label={`${name} logo`}>
      <svg className="brand-logo__mark" viewBox="0 0 64 48" aria-hidden="true">
        {brand === 'amazon' ? (
          <>
            <text x="6" y="27" fill="#18212b" fontSize="21" fontWeight="700" letterSpacing="-1.5">amazon</text>
            <path d="M14 34c13 8 28 8 39 0" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeWidth="3" />
            <path d="m49 32 5 1-3 4" fill="none" stroke="#f59e0b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </>
        ) : brand === 'nike' ? (
          <path d="M4 31 59 8 27 39c-7 7-15 5-19 0-3-3-4-6-4-8Z" fill="#111827" />
        ) : brand === 'ebay' ? (
          <text x="3" y="34" fontSize="31" fontWeight="700" letterSpacing="-2"><tspan fill="#e53238">e</tspan><tspan fill="#0064d2">b</tspan><tspan fill="#f5af02">a</tspan><tspan fill="#86b817">y</tspan></text>
        ) : brand === 'walmart' ? (
          <g fill="#f4b400" transform="translate(32 24)">
            <rect x="-2.5" y="-17" width="5" height="12" rx="2.5" />
            <rect x="-2.5" y="-17" width="5" height="12" rx="2.5" transform="rotate(60)" />
            <rect x="-2.5" y="-17" width="5" height="12" rx="2.5" transform="rotate(120)" />
            <rect x="-2.5" y="-17" width="5" height="12" rx="2.5" transform="rotate(180)" />
            <rect x="-2.5" y="-17" width="5" height="12" rx="2.5" transform="rotate(240)" />
            <rect x="-2.5" y="-17" width="5" height="12" rx="2.5" transform="rotate(300)" />
          </g>
        ) : brand === 'target' ? (
          <g fill="none" stroke="#cc0000" strokeWidth="6"><circle cx="32" cy="24" r="17" /><circle cx="32" cy="24" r="7" /></g>
        ) : brand === 'sephora' ? (
          <><path d="M8 9h48v30H8z" fill="#111" /><text x="11" y="29" fill="#fff" fontSize="13" fontWeight="700" letterSpacing="1.2">SEPHORA</text></>
        ) : brand === 'best buy' ? (
          <><path d="M8 7h48v34H8z" fill="#ffdf00" /><text x="12" y="22" fill="#111" fontSize="12" fontWeight="800">BEST</text><text x="12" y="35" fill="#111" fontSize="12" fontWeight="800">BUY</text></>
        ) : brand === 'adidas' ? (
          <g fill="#111"><path d="M8 34h16L17 21z" /><path d="M25 34h15L29 15z" /><path d="M43 34h13L41 9z" /></g>
        ) : brand === "macy's" ? (
          <><path d="m14 13 3 7 8 .6-6 5 2 7-7-4-7 4 2-7-6-5 8-.6z" fill="#d71920" /><text x="27" y="31" fill="#d71920" fontSize="18" fontWeight="700">macy&apos;s</text></>
        ) : brand === "domino's pizza" ? (
          <><g transform="translate(32 24) rotate(45)"><rect x="-12" y="-19" width="24" height="38" rx="3" fill="#0876bd" /><path d="M-12-16a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v16h-24z" fill="#e31837" /></g><g fill="#fff"><circle cx="29" cy="15" r="2" /><circle cx="35" cy="20" r="2" /><circle cx="29" cy="29" r="2" /><circle cx="35" cy="34" r="2" /></g></>
        ) : brand === 'booking.com' ? (
          <text x="32" y="36" fill="#003b95" fontSize="34" fontWeight="700" textAnchor="middle">B.</text>
        ) : brand === 'expedia' ? (
          <><circle cx="32" cy="24" r="19" fill="#f6c344" /><path d="m15 28 34-10-17 19-3-11z" fill="#173a72" /></>
        ) : brand === 'cupshe' ? (
          <text x="32" y="30" fill="#17202a" fontSize="17" fontWeight="800" letterSpacing="-0.7" textAnchor="middle">cupshe</text>
        ) : (
          <text x="32" y="34" fill="#334155" fontSize="24" fontWeight="700" textAnchor="middle">{name.charAt(0)}</text>
        )}
      </svg>
    </span>
  );
}
