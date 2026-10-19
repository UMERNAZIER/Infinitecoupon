'use client'

import { useState } from 'react';
import { Coupon } from '@/lib/data';
import { ExternalLink, Clock, Users, Package } from 'lucide-react';
import CouponModal from './CouponModal';
import BrandLogo from './BrandLogo';

interface CouponCardProps {
  coupon: Coupon;
  storeName: string;
  imageUrl?: string;
  showImage?: boolean;
  variant?: 'compact' | 'list';
}

function formatExpiryDate(value: string) {
  const [year, month, day] = value.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthIndex = Number(month) - 1;

  if (!year || !day || !monthNames[monthIndex]) return value;
  return `${monthNames[monthIndex]} ${Number(day)}, ${year}`;
}

export default function CouponCard({ coupon, storeName, imageUrl, showImage = true, variant = 'list' }: CouponCardProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const isCode = coupon.type === 'code';

  const handleAction = () => {
    if (isCode && coupon.code) {
      setModalOpen(true);
    } else {
      window.open(coupon.redirectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <article className={`coupon-card coupon-card--${variant}${showImage ? '' : ' coupon-card--no-image'}`}>
        <div className="coupon-card__body">
          <div className="coupon-card__topline">
            <div className="coupon-card__brand">
              <BrandLogo name={storeName} />
              <div className="coupon-card__brand-copy">
                <span className="coupon-card__store">{storeName}</span>
                <span className={`coupon-card__type ${isCode ? 'coupon-card__type--code' : 'coupon-card__type--deal'}`}>
                  {isCode ? 'Coupon code' : 'Deal'}
                </span>
              </div>
            </div>
            {showImage ? (
              <div className="coupon-card__visual-wrap">
              {imageUrl && !imageFailed ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="coupon-card__product-image" src={imageUrl} alt="" loading="lazy" onError={() => setImageFailed(true)} />
              ) : imageUrl && variant === 'compact' ? (
                <span className="coupon-card__image-fallback" aria-hidden="true"><Package size={20} /></span>
              ) : null}
              <span className="coupon-card__discount">{coupon.discount}</span>
              </div>
            ) : (
              <span className="coupon-card__discount">{coupon.discount}</span>
            )}
          </div>

          <h3 className="coupon-card__title">{coupon.title}</h3>
          {coupon.description && <p className="coupon-card__description">{coupon.description}</p>}

          <div className="coupon-card__meta">
            {coupon.usesCount !== undefined && (
              <span className="coupon-card__meta-item">
                <Users size={14} />
                {new Intl.NumberFormat('en-US').format(coupon.usesCount)} uses
              </span>
            )}
            {coupon.expiresAt && (
              <span className="coupon-card__meta-item">
                <Clock size={14} />
                Ends {formatExpiryDate(coupon.expiresAt)}
              </span>
            )}
          </div>
        </div>

        <div className="coupon-card__action">
          <button
            onClick={handleAction}
            className="coupon-card__button"
          >
            {isCode ? 'Show code' : 'Get deal'} <ExternalLink size={16} />
          </button>
          <span className="coupon-card__action-note">{isCode ? 'Copy at checkout' : 'Opens store offer'}</span>
        </div>
      </article>

      {isCode && coupon.code && (
        <CouponModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          code={coupon.code}
          storeName={storeName}
          redirectUrl={coupon.redirectUrl}
        />
      )}
    </>
  );
}
