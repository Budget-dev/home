"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { JarIcon, ComboIcon } from './JarIcon';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  isInCart: boolean;
  onOpen: (product: Product) => void;
  onAdd: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isInCart, onOpen, onAdd }) => {
  const router = useRouter();
  
  // Ensure we have numbers to work with
  const price = Number(product.price) || 0;
  const mrpPrice = Number(product.mrpPrice) || price;

  const discount = mrpPrice > price 
    ? Math.round(((mrpPrice - price) / mrpPrice) * 100)
    : 0;

  const getIcon = () => {
    if (product.imageUrls && product.imageUrls.length > 0) {
      return (
        <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
          <Image 
            src={product.imageUrls[0]} 
            alt={product.name} 
            fill 
            className={cn(
              "object-cover transition-opacity duration-500",
              product.imageUrls.length > 1 ? "group-hover:opacity-0" : "opacity-100"
            )}
            sizes="(max-width: 768px) 150px, 220px"
          />
          
          {product.imageUrls.length > 1 && (
            <Image 
              src={product.imageUrls[1]} 
              alt={`${product.name} alternate`} 
              fill 
              className="object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              sizes="(max-width: 768px) 150px, 220px"
            />
          )}
        </div>
      );
    }
    
    if (product.cat === 'combo') return <ComboIcon className="scale-75 md:scale-90" />;
    return (
      <JarIcon 
        c1={product.pi % 2 === 0 ? '#D4EDE0' : '#EBF5EE'} 
        c2={product.pi % 2 === 0 ? '#1B5E3B' : '#0D3520'} 
        sub="" 
        idSuffix={product.id} 
        className="scale-75 md:scale-90" 
      />
    );
  };

  const handleNavigate = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div 
      onClick={handleNavigate}
      className="bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-[#E8ECE9] cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-primary/20 group relative flex flex-col h-[340px] sm:h-[380px] md:h-[410px] w-full mx-auto shadow-xs transform-gpu translate-z-0 select-none"
    >
      {/* Top Section: Square Image Area with Fixed Ratio/Height */}
      <div className="relative h-[160px] sm:h-[190px] md:h-[210px] w-full bg-[#FAF8F5] p-2 md:p-3 flex items-center justify-center overflow-hidden border-b border-[#F2ECE1] shrink-0">
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 z-20 bg-primary text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-full tracking-tight shadow-sm">
            {discount}% OFF
          </div>
        )}

        {/* Top Badge */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-2 right-2 z-20 bg-[#D4A017] text-white px-2 py-0.5 rounded-full text-[8px] md:text-[9px] font-extrabold uppercase tracking-wider shadow-sm">
            {product.badges[0]}
          </div>
        )}

        {/* Product Image / Icon */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {getIcon()}
        </div>
      </div>

      {/* Info Section - Equal Height & Compact Structure */}
      <div className="p-2.5 sm:p-3 md:p-4 bg-white flex flex-col flex-1 justify-between gap-1.5 md:gap-2 overflow-hidden">
        <div className="space-y-1 md:space-y-1.5">
          {/* Subheader: Volume & Rating */}
          <div className="flex items-center justify-between text-[10px] md:text-xs font-bold text-[#7A6848] h-5">
            <span className="uppercase tracking-wider font-extrabold text-[9px] md:text-[11px] text-primary bg-primary/5 px-2 py-0.5 rounded-md truncate max-w-[65%]">
              {product.vol || '500 ml'}
            </span>
            <div className="flex items-center gap-1 bg-[#FFF8E7] px-1.5 py-0.5 rounded-md border border-[#F5D110]/30 shrink-0">
              <Star className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#F5D110] fill-current" />
              <span className="font-black text-[#100C06] text-[10px] md:text-xs">{product.rating || '4.9'}</span>
              {product.reviewCount ? <span className="opacity-50 text-[8px] md:text-[10px]">({product.reviewCount})</span> : null}
            </div>
          </div>

          {/* Title - Fixed height line clamp for equal vertical flow */}
          <h3 className="font-headline text-xs md:text-sm font-bold text-[#100C06] leading-snug line-clamp-2 h-[2.5em] md:h-[2.6em] group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price & Action Row - Fixed to Bottom */}
        <div className="pt-2 border-t border-[#F3F0E9] flex items-center justify-between gap-1.5 mt-auto shrink-0">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-sm md:text-base font-black text-primary leading-none">
                ₹{price.toLocaleString('en-IN')}
              </span>
              {mrpPrice > price && (
                <span className="text-[10px] md:text-xs text-[#8C8275] line-through font-semibold">
                  ₹{mrpPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            {product.soldCountLabel ? (
              <span className="text-[8px] md:text-[9px] font-bold text-amber-800 mt-0.5 truncate max-w-[85px] md:max-w-[110px]">
                🔥 {product.soldCountLabel}
              </span>
            ) : (
              <span className="text-[8px] md:text-[9px] font-medium text-emerald-700 mt-0.5">
                In Stock
              </span>
            )}
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); onAdd(product); }}
            className={cn(
              "h-8 md:h-9 px-2.5 md:px-3.5 rounded-xl flex items-center justify-center gap-1 font-black text-[9px] md:text-[11px] uppercase tracking-wider transition-all active:scale-95 shrink-0 shadow-xs border-none",
              isInCart ? "bg-accent text-white" : "bg-primary text-white hover:bg-secondary"
            )}
          >
            <span>{isInCart ? 'ADDED' : 'ADD'}</span>
            <ShoppingCart className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
