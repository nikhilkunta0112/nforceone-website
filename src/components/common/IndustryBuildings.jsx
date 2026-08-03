import React from 'react';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// 1. FinTech: Mumbai BKC Financial glass skyscrapers facade
export function FintechBuilding({ className }) {
  return (
    <div className={cn("bg-[#050D18] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 260 H480 M40 0 V300 M80 0 V300 M120 0 V300 M160 0 V300 M200 0 V300 M240 0 V300 M280 0 V300 M320 0 V300 M360 0 V300 M400 0 V300 M440 0 V300" stroke="rgba(230,0,0,0.03)" strokeWidth="1" />
        {/* BKC Curved Financial Building */}
        <path d="M90 260 V120 Q130 90 170 120 V260 Z" fill="#0A182F" stroke="#E60000" strokeWidth="1.5" />
        <path d="M105 260 V140 Q130 115 155 140 V260 Z" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {/* BKC Block Glass Building */}
        <rect x="190" y="80" width="100" height="180" fill="#0B1C35" stroke="#E60000" strokeWidth="1.5" />
        <path d="M210 100 H270 M210 120 H270 M210 140 H270 M210 160 H270 M210 180 H270 M210 200 H270 M210 220 H270 M210 240 H270" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        {/* Mumbai BSE Iconic Tower */}
        <path d="M310 260 V60 H350 V260 Z M300 80 H360 M300 130 H360 M300 180 H360 M300 230 H360" stroke="#E60000" strokeWidth="1.5" fill="#0A182F" />
        {/* Glowing trend line */}
        <path d="M30 220 L80 180 L160 200 L240 135 L330 155 L420 85" stroke="#E60000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="420" cy="85" r="4" fill="#E60000" />
      </svg>
    </div>
  );
}

// 2. Healthcare: Bangalore Apollo Digital Hospital building facade
export function HealthcareBuilding({ className }) {
  return (
    <div className={cn("bg-[#081210] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="90" width="180" height="170" fill="#0B1A17" stroke="#E60000" strokeWidth="1.5" />
        <rect x="100" y="40" width="80" height="50" fill="#0D241F" stroke="#E60000" strokeWidth="1.5" />
        <path d="M130 55 H150 M140 45 V65" stroke="#E60000" strokeWidth="2.5" strokeLinecap="round" />
        {/* Windows */}
        <rect x="70" y="110" width="30" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="125" y="110" width="30" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="180" y="110" width="30" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="70" y="160" width="30" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="125" y="160" width="30" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="180" y="160" width="30" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Diagnostics block */}
        <rect x="260" y="120" width="160" height="140" fill="#0B1A17" stroke="#E60000" strokeWidth="1.5" />
        <path d="M240 210 H270 L280 185 L290 235 L300 195 L310 215 L320 210 H400" stroke="#E60000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// 3. ISV/SaaS: Bangalore Manyata Tech Park Block building
export function SaasBuilding({ className }) {
  return (
    <div className={cn("bg-[#0C0F12] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="70" width="360" height="190" fill="#0E1318" stroke="#E60000" strokeWidth="1.5" />
        <path d="M100 70 V260 M140 70 V260 M180 70 V260 M220 70 V260 M260 70 V260 M300 70 V260 M340 70 V260 M380 70 V260" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        <path d="M60 110 H420 M60 160 H420 M60 210 H420" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" />
        {/* SaaS Cloud datacenter block */}
        <rect x="170" y="120" width="140" height="70" rx="4" fill="#0B1A24" stroke="#E60000" strokeWidth="1.5" />
        <circle cx="200" cy="155" r="8" fill="#E60000" />
        <circle cx="240" cy="155" r="8" fill="rgba(255,255,255,0.2)" />
        <circle cx="280" cy="155" r="8" fill="rgba(255,255,255,0.2)" />
      </svg>
    </div>
  );
}

// 4. Retail: Automated Ecommerce Fulfillment Center Warehouse Facade
export function RetailBuilding({ className }) {
  return (
    <div className={cn("bg-[#120B0B] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="80" width="400" height="180" fill="#1C1010" stroke="#E60000" strokeWidth="1.5" />
        {/* Loading Docks */}
        <rect x="80" y="210" width="40" height="50" stroke="#E60000" strokeWidth="1.5" fill="black" />
        <rect x="150" y="210" width="40" height="50" stroke="#E60000" strokeWidth="1.5" fill="black" />
        <rect x="220" y="210" width="40" height="50" stroke="#E60000" strokeWidth="1.5" fill="black" />
        <rect x="290" y="210" width="40" height="50" stroke="#E60000" strokeWidth="1.5" fill="black" />
        <rect x="360" y="210" width="40" height="50" stroke="#E60000" strokeWidth="1.5" fill="black" />
        {/* Paths */}
        <path d="M40 130 H440 M40 170 H440" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
        <line x1="360" y1="80" x2="360" y2="260" stroke="#E60000" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// 5. Telecom: Telecom Tower & NOC operations building
export function TelecomBuilding({ className }) {
  return (
    <div className={cn("bg-[#080812] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="220" y="110" width="210" height="150" fill="#0C0C1C" stroke="#E60000" strokeWidth="1.5" />
        <rect x="245" y="145" width="50" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="315" y="145" width="50" height="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Dish */}
        <path d="M370 110 Q370 70 340 70 Q310 70 310 110" stroke="#E60000" strokeWidth="2" fill="none" />
        <line x1="340" y1="70" x2="340" y2="110" stroke="#E60000" strokeWidth="1.5" />
        {/* Trellis telecom tower */}
        <path d="M120 260 L95 50 H85 L60 260 Z" stroke="#E60000" strokeWidth="1.5" fill="#080815" />
        <path d="M60 260 L85 50 M120 260 L85 50" stroke="#E60000" strokeWidth="1" />
        <path d="M65 220 H115 M70 180 H110 M75 140 H105 M80 100 H100" stroke="#E60000" strokeWidth="1" />
        <circle cx="90" cy="50" r="15" stroke="rgba(230,0,0,0.3)" strokeWidth="1" fill="none" />
        <circle cx="90" cy="50" r="30" stroke="rgba(230,0,0,0.15)" strokeWidth="1" fill="none" />
      </svg>
    </div>
  );
}

// 6. Automotive: Chennai Automobile Smart Factory assembly plant
export function AutomotiveBuilding({ className }) {
  return (
    <div className={cn("bg-[#120D08] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 260 V100 L150 60 L250 100 L350 60 L430 100 V260 Z" fill="#1C140D" stroke="#E60000" strokeWidth="1.5" />
        <rect x="80" y="130" width="45" height="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="180" y="130" width="45" height="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <rect x="280" y="130" width="45" height="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        {/* Car Silhouette outline */}
        <path d="M120 215 H180 L195 195 H285 L300 215 H360 V240 H120 Z" fill="none" stroke="#E60000" strokeWidth="2" />
        <circle cx="160" cy="240" r="12" stroke="#E60000" strokeWidth="2" fill="black" />
        <circle cx="320" cy="240" r="12" stroke="#E60000" strokeWidth="2" fill="black" />
      </svg>
    </div>
  );
}

// 7. Manufacturing: Heavy Industry Factory outline & exhaust stacks
export function ManufacturingBuilding({ className }) {
  return (
    <div className={cn("bg-[#08120F] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 260 V120 L120 80 V120 L200 80 V120 L280 80 V120 L360 80 L440 110 V260 Z" fill="#0C1F19" stroke="#E60000" strokeWidth="1.5" />
        <rect x="380" y="40" width="22" height="70" fill="#0B1A15" stroke="#E60000" strokeWidth="1.5" />
        <rect x="410" y="55" width="14" height="55" fill="#050F0D" stroke="#E60000" strokeWidth="1.5" />
        <circle cx="140" cy="180" r="22" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <circle cx="185" cy="210" r="18" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
        <path d="M40 230 H440" stroke="#E60000" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>
    </div>
  );
}

// 8. Energy & Utilities: Solar power station, Wind Turbine and Control Facade
export function EnergyBuilding({ className }) {
  return (
    <div className={cn("bg-[#121208] overflow-hidden w-full h-full", className)}>
      <svg className="w-full h-full select-none" viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="70" y="140" width="180" height="120" fill="#1C1C0D" stroke="#E60000" strokeWidth="1.5" />
        <rect x="100" y="170" width="120" height="40" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="none" />
        <line x1="350" y1="260" x2="350" y2="90" stroke="#E60000" strokeWidth="2.5" />
        <circle cx="350" cy="90" r="4" fill="#E60000" />
        {/* Wind Turbine Blades */}
        <path d="M350 90 L310 60 M350 90 L380 50 M350 90 L360 140" stroke="#E60000" strokeWidth="2" strokeLinecap="round" />
        {/* Solar Panel */}
        <rect x="270" y="190" width="50" height="35" rx="2" fill="black" stroke="#E60000" strokeWidth="1" transform="skewX(-15)" />
        <path d="M270 200 H320 M270 210 H320 M285 190 V225 M300 190 V225" stroke="rgba(255,255,255,0.12)" strokeWidth="1" transform="skewX(-15)" />
      </svg>
    </div>
  );
}
