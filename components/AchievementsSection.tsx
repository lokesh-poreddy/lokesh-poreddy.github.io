'use client';

import { useEffect, useState } from 'react';

export default function AchievementsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="achievements" className="relative py-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:via-primary/10 -z-10" />

      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Recognition of expertise and dedication to continuous learning in cloud computing and machine learning
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start justify-items-center">
          {/* AWS MLE Badge */}
          <div className="w-full max-w-sm flex flex-col items-center">
            <div className="mb-6">
              <style>{`
                .badge-scene {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  perspective: 900px;
                  perspective-origin: 50% 50%;
                  width: 100%;
                  height: 400px;
                }

                .dark .badge-scene {
                  background: radial-gradient(ellipse at center, #1a2230 0%, #0d1117 70%);
                }

                .light .badge-scene {
                  background: radial-gradient(ellipse at center, #f5f5f5 0%, #e8e8e8 70%);
                }

                .badge-stage {
                  width: 200px;
                  height: 232px;
                  position: relative;
                  transform-style: preserve-3d;
                  transform: rotateX(-6deg);
                }

                .badge-wrapper {
                  width: 100%;
                  height: 100%;
                  position: relative;
                  transform-style: preserve-3d;
                  animation: spin 6s linear infinite;
                  will-change: transform;
                }

                @keyframes spin {
                  0%   { transform: rotateY(0deg); }
                  100% { transform: rotateY(360deg); }
                }

                .badge-face {
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;
                  backface-visibility: hidden;
                  -webkit-backface-visibility: hidden;
                }

                .badge-front { transform: translateZ(12px); }
                .badge-back  { transform: rotateY(180deg) translateZ(12px); }

                .rim-slice {
                  position: absolute;
                  inset: 0;
                  width: 80%;
                  height: 100%;
                  backface-visibility: visible;
                }

                .rim-shine {
                  position: absolute;
                  inset: 0;
                  pointer-events: none;
                  transform: translateZ(12.5px);
                  background: linear-gradient(
                    105deg,
                    transparent 35%,
                    rgba(255,255,255,0.45) 48%,
                    rgba(255,255,255,0.85) 50%,
                    rgba(255,255,255,0.45) 52%,
                    transparent 65%
                  );
                  mix-blend-mode: screen;
                  opacity: 0.0;
                  animation: shineSweep 6s linear infinite;
                  clip-path: path('M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z');
                }

                @keyframes shineSweep {
                  0%, 20%   { opacity: 0; transform: translateZ(12.5px) translateX(-60%); }
                  25%       { opacity: 0.9; }
                  35%       { opacity: 0; transform: translateZ(12.5px) translateX(60%); }
                  100%      { opacity: 0; transform: translateZ(12.5px) translateX(60%); }
                }

                .badge-stage::after {
                  content: "";
                  position: absolute;
                  left: 50%;
                  bottom: -40px;
                  width: 180px;
                  height: 30px;
                  transform: translateX(-50%);
                  background: radial-gradient(ellipse, rgba(120,160,220,0.25) 0%, transparent 70%);
                  filter: blur(8px);
                  z-index: -1;
                }
              `}</style>

              <div className="badge-scene">
                <div className="badge-stage">
                  <div className="badge-wrapper">
                    {/* Rim Stack - 25 slices */}
                    {[-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((z, idx) => {
                      const scale = 1 + (idx - 12) * 0.001;
                      const grayShade = 0.3 + (Math.abs(z) / 12) * 0.4;
                      const fill = `rgb(${Math.round(grayShade * 255)}, ${Math.round(grayShade * 255)}, ${Math.round(grayShade * 255)})`;

                      return (
                        <div key={z} className="rim-slice" style={{ transform: `translateZ(${z}px) scale(${scale})` }}>
                          <svg viewBox="0 0 200 232" width="200" height="232" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z" fill={fill} />
                          </svg>
                        </div>
                      );
                    })}

                    {/* Front Face */}
                    <div className="badge-face badge-front">
                      <svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" width="200" height="232">
                        <defs>
                          <linearGradient id="hexGradFront" x1="0.15" y1="0" x2="0.85" y2="1">
                            <stop offset="0%"   stopColor="#6B9EFF"/>
                            <stop offset="45%"  stopColor="#3A3DB8"/>
                            <stop offset="100%" stopColor="#1A1A7A"/>
                          </linearGradient>
                          <linearGradient id="borderGradFront" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%"   stopColor="#cfd4dc"/>
                            <stop offset="50%"  stopColor="#8a8f96"/>
                            <stop offset="100%" stopColor="#3f4248"/>
                          </linearGradient>
                          <linearGradient id="shineFront" x1="0.1" y1="0" x2="0.55" y2="0.65">
                            <stop offset="0%"   stopColor="rgba(255,255,255,0.28)"/>
                            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                          </linearGradient>
                          <clipPath id="faceClipF">
                            <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z"/>
                          </clipPath>
                        </defs>

                        <path d="M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z" fill="url(#borderGradFront)"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#hexGradFront)"/>
                        <path d="M100 20 C100 20 176 61 180 67 Q187 75 187 116 Q187 157 180 165 C176 171 100 212 100 212 C100 212 24 171 20 165 Q13 157 13 116 Q13 75 20 67 C24 61 100 20 100 20 Z" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.2"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 L100 116 L16 76 Q8 72 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#shineFront)" clipPath="url(#faceClipF)"/>

                        <text x="98" y="66" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="1">aws</text>
                        <rect x="119" y="52" width="18" height="18" rx="4" fill="#E8941A"/>
                        <text x="128" y="65" fontFamily="Arial,sans-serif" fontSize="8" fontWeight="400" fill="white" textAnchor="middle">✓</text>
                        <text x="100" y="83" fontFamily="Arial,sans-serif" fontSize="12" fill="#B8CFFF" textAnchor="middle" letterSpacing="1.5">certified</text>
                        <line x1="46" y1="95" x2="154" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9"/>
                        <text x="100" y="120" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle">Machine</text>
                        <text x="100" y="138" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle">Learning</text>
                        <text x="100" y="158" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle">Engineer</text>
                        <line x1="46" y1="170" x2="154" y2="170" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9"/>
                        <text x="100" y="188" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#B8CFFF" textAnchor="middle" letterSpacing="4">ASSOCIATE</text>
                      </svg>
                    </div>

                    {/* Back Face */}
                    <div className="badge-face badge-back">
                      <svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" width="200" height="232">
                        <defs>
                          <linearGradient id="hexGradBack" x1="0.85" y1="0" x2="0.15" y2="1">
                            <stop offset="0%"   stopColor="#1A1A7A"/>
                            <stop offset="55%"  stopColor="#3A3DB8"/>
                            <stop offset="100%" stopColor="#6B9EFF"/>
                          </linearGradient>
                          <linearGradient id="borderGradBack" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%"   stopColor="#3f4248"/>
                            <stop offset="50%"  stopColor="#8a8f96"/>
                            <stop offset="100%" stopColor="#cfd4dc"/>
                          </linearGradient>
                          <linearGradient id="shineBack" x1="0.9" y1="0" x2="0.45" y2="0.65">
                            <stop offset="0%"   stopColor="rgba(255,255,255,0.22)"/>
                            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                          </linearGradient>
                          <clipPath id="faceClipB">
                            <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z"/>
                          </clipPath>
                        </defs>

                        <path d="M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z" fill="url(#borderGradBack)"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#hexGradBack)"/>
                        <path d="M100 20 C100 20 176 61 180 67 Q187 75 187 116 Q187 157 180 165 C176 171 100 212 100 212 C100 212 24 171 20 165 Q13 157 13 116 Q13 75 20 67 C24 61 100 20 100 20 Z" fill="none" stroke="rgba(255,255,255,0.13)" strokeWidth="1.2"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 L100 116 L16 76 Q8 72 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#shineBack)" clipPath="url(#faceClipB)"/>

                        <text x="98" y="66" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="1">aws</text>
                        <text x="100" y="83" fontFamily="Arial,sans-serif" fontSize="12" fill="#B8CFFF" textAnchor="middle" letterSpacing="1.5">verify</text>
                        <line x1="46" y1="95" x2="154" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9"/>
                        <text x="100" y="120" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle">Amazon Web</text>
                        <text x="100" y="138" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="800" fill="white" textAnchor="middle">Services</text>
                        <line x1="46" y1="155" x2="154" y2="155" stroke="rgba(255,255,255,0.3)" strokeWidth="0.9"/>
                        <text x="100" y="188" fontFamily="Arial,sans-serif" fontSize="11" fontWeight="700" fill="#B8CFFF" textAnchor="middle" letterSpacing="2">aws.amazon.com</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground">AWS Certified MLE</h3>
            <p className="text-sm text-foreground/70 text-center mt-2">Machine Learning Engineer - Associate</p>
          </div>

          {/* AWS AI Practitioner Badge */}
          <div className="w-full max-w-sm flex flex-col items-center">
            <div className="mb-6">
              <style>{`
                .ai-badge-scene {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  perspective: 900px;
                  perspective-origin: 50% 50%;
                  width: 100%;
                  height: 400px;
                }

                .dark .ai-badge-scene {
                  background: radial-gradient(ellipse at center, #1a2230 0%, #0d1117 70%);
                }

                .light .ai-badge-scene {
                  background: radial-gradient(ellipse at center, #f5f5f5 0%, #e8e8e8 70%);
                }

                .ai-badge-stage {
                  width: 200px;
                  height: 232px;
                  position: relative;
                  transform-style: preserve-3d;
                  transform: rotateX(-6deg);
                }

                .ai-badge-wrapper {
                  width: 100%;
                  height: 100%;
                  position: relative;
                  transform-style: preserve-3d;
                  animation: ai-spin 6s linear infinite;
                  will-change: transform;
                }

                @keyframes ai-spin {
                  0%   { transform: rotateY(0deg); }
                  100% { transform: rotateY(360deg); }
                }

                .ai-badge-face {
                  position: absolute;
                  inset: 0;
                  width: 100%;
                  height: 100%;
                  backface-visibility: hidden;
                  -webkit-backface-visibility: hidden;
                }

                .ai-badge-front { transform: translateZ(12px); }
                .ai-badge-back  { transform: rotateY(180deg) translateZ(12px); }

                .ai-rim-slice {
                  position: absolute;
                  inset: 0;
                  width: 80%;
                  height: 100%;
                  backface-visibility: visible;
                }

                .ai-badge-stage::after {
                  content: "";
                  position: absolute;
                  left: 50%;
                  bottom: -40px;
                  width: 180px;
                  height: 30px;
                  transform: translateX(-50%);
                  background: radial-gradient(ellipse, rgba(120,160,220,0.25) 0%, transparent 70%);
                  filter: blur(8px);
                  z-index: -1;
                }
              `}</style>

              <div className="ai-badge-scene">
                <div className="ai-badge-stage">
                  <div className="ai-badge-wrapper">
                    {/* Rim Stack */}
                    {[-12, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((z, idx) => {
                      const scale = 1 + (idx - 12) * 0.001;
                      const grayShade = 0.3 + (Math.abs(z) / 12) * 0.4;
                      const fill = `rgb(${Math.round(grayShade * 255)}, ${Math.round(grayShade * 255)}, ${Math.round(grayShade * 255)})`;

                      return (
                        <div key={z} className="ai-rim-slice" style={{ transform: `translateZ(${z}px) scale(${scale})` }}>
                          <svg viewBox="0 0 200 232" width="200" height="232" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z" fill={fill} />
                          </svg>
                        </div>
                      );
                    })}

                    {/* Front Face */}
                    <div className="ai-badge-face ai-badge-front">
                      <svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" width="200" height="232">
                        <defs>
                          <linearGradient id="hexGradAIFront" x1="0.15" y1="0" x2="0.85" y2="1">
                            <stop offset="0%"   stopColor="#4d5966"/>
                            <stop offset="45%"  stopColor="#2a333d"/>
                            <stop offset="100%" stopColor="#1b2128"/>
                          </linearGradient>
                          <linearGradient id="borderGradAIFront" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%"   stopColor="#cfd4dc"/>
                            <stop offset="50%"  stopColor="#8a8f96"/>
                            <stop offset="100%" stopColor="#3f4248"/>
                          </linearGradient>
                          <linearGradient id="shineAIFront" x1="0.1" y1="0" x2="0.55" y2="0.65">
                            <stop offset="0%"   stopColor="rgba(255,255,255,0.18)"/>
                            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                          </linearGradient>
                          <clipPath id="faceClipAIF">
                            <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z"/>
                          </clipPath>
                        </defs>

                        <path d="M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z" fill="url(#borderGradAIFront)"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#hexGradAIFront)"/>
                        <path d="M100 20 C100 20 176 61 180 67 Q187 75 187 116 Q187 157 180 165 C176 171 100 212 100 212 C100 212 24 171 20 165 Q13 157 13 116 Q13 75 20 67 C24 61 100 20 100 20 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 L100 116 L16 76 Q8 72 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#shineAIFront)" clipPath="url(#faceClipAIF)"/>

                        <text x="86" y="58" fontFamily="Arial,sans-serif" fontSize="22" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="0.5">aws</text>
                        <rect x="114" y="44" width="16" height="16" rx="2" fill="#F99B15" transform="rotate(45 122 52)"/>
                        <text x="122" y="56" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="900" fill="white" textAnchor="middle">✓</text>
                        <text x="100" y="78" fontFamily="Arial,sans-serif" fontSize="16" fill="white" textAnchor="middle" letterSpacing="0.5">certified</text>
                        <line x1="56" y1="92" x2="144" y2="92" stroke="white" strokeWidth="1"/>
                        <text x="100" y="130" fontFamily="Arial,sans-serif" fontSize="32" fontWeight="900" fill="white" textAnchor="middle">AI</text>
                        <text x="100" y="158" fontFamily="Arial,sans-serif" fontSize="24" fontWeight="900" fill="white" textAnchor="middle">Practitioner</text>
                        <line x1="56" y1="174" x2="144" y2="174" stroke="white" strokeWidth="1"/>
                        <text x="100" y="196" fontFamily="Arial,sans-serif" fontSize="12" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="3.5">FOUNDATIONAL</text>
                      </svg>
                    </div>

                    {/* Back Face */}
                    <div className="ai-badge-face ai-badge-back">
                      <svg viewBox="0 0 200 232" xmlns="http://www.w3.org/2000/svg" width="200" height="232">
                        <defs>
                          <linearGradient id="hexGradAIBack" x1="0.85" y1="0" x2="0.15" y2="1">
                            <stop offset="0%"   stopColor="#1b2128"/>
                            <stop offset="55%"  stopColor="#2a333d"/>
                            <stop offset="100%" stopColor="#4d5966"/>
                          </linearGradient>
                          <linearGradient id="borderGradAIBack" x1="1" y1="0" x2="0" y2="1">
                            <stop offset="0%"   stopColor="#3f4248"/>
                            <stop offset="50%"  stopColor="#8a8f96"/>
                            <stop offset="100%" stopColor="#cfd4dc"/>
                          </linearGradient>
                          <linearGradient id="shineAIBack" x1="0.9" y1="0" x2="0.45" y2="0.65">
                            <stop offset="0%"   stopColor="rgba(255,255,255,0.15)"/>
                            <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                          </linearGradient>
                          <clipPath id="faceClipAIB">
                            <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z"/>
                          </clipPath>
                        </defs>

                        <path d="M100 2 C100 2 186 48 191 55 Q200 65 200 116 Q200 167 191 177 C186 184 100 230 100 230 C100 230 14 184 9 177 Q0 167 0 116 Q0 65 9 55 C14 48 100 2 100 2 Z" fill="url(#borderGradAIBack)"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 Q192 160 184 169 C180 175 100 218 100 218 C100 218 20 175 16 169 Q8 160 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#hexGradAIBack)"/>
                        <path d="M100 20 C100 20 176 61 180 67 Q187 75 187 116 Q187 157 180 165 C176 171 100 212 100 212 C100 212 24 171 20 165 Q13 157 13 116 Q13 75 20 67 C24 61 100 20 100 20 Z" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.2"/>
                        <path d="M100 14 C100 14 180 57 184 63 Q192 72 192 116 L100 116 L16 76 Q8 72 8 116 Q8 72 16 63 C20 57 100 14 100 14 Z" fill="url(#shineAIBack)" clipPath="url(#faceClipAIB)"/>

                        <text x="100" y="122" fontFamily="Arial,sans-serif" fontSize="50" fontWeight="900" fill="white" textAnchor="middle" dominantBaseline="middle" letterSpacing="4">PLR</text>
                        <line x1="50" y1="150" x2="150" y2="150" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                        <text x="100" y="172" fontFamily="Arial,sans-serif" fontSize="10" fill="rgba(255,255,255,0.8)" textAnchor="middle" letterSpacing="2.5">AWS CERTIFIED</text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground">AWS AI Practitioner</h3>
            <p className="text-sm text-foreground/70 text-center mt-2">Foundational AI Certification</p>
          </div>

          {/* Additional Achievement Cards */}
          <div className="w-full max-w-sm">
            <div className="p-8 bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI & ML Expertise</h3>
              <p className="text-sm text-foreground/80">
                Advanced knowledge in machine learning, deep learning, and AI-driven system design
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <div className="p-8 bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">IoT Integration</h3>
              <p className="text-sm text-foreground/80">
                Specialized in hardware-software integration and real-time IoT systems development
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <div className="p-8 bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Cloud Computing</h3>
              <p className="text-sm text-foreground/80">
                Proficient in deploying and managing scalable cloud-based applications
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm">
            <div className="p-8 bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold text-foreground mb-2">Security Focus</h3>
              <p className="text-sm text-foreground/80">
                Committed to building secure and reliable systems with industry best practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
