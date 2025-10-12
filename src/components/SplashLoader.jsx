import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import SignatureSVG from '../assets/AP.svg?react';

// Register CSSPlugin
gsap.registerPlugin(CSSPlugin);

const SplashLoader = ({ onAnimationComplete }) => {
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const svgElement = svgRef.current;
    const container = containerRef.current;
    if (!svgElement || !container) {
      return;
    }

    // Select all stroke-based elements
    const paths = svgElement.querySelectorAll('path, line, polyline, circle, ellipse');

    if (paths.length === 0) {
      return;
    }

    // Initialize paths to be invisible
    paths.forEach((path, index) => {
      const length = path.getTotalLength?.();
      if (isNaN(length) || !length) {
        return;
      }

      // Clear all inline attributes
      path.removeAttribute('fill');
      path.removeAttribute('stroke');
      path.removeAttribute('stroke-width');
      path.removeAttribute('stroke-dasharray');
      path.removeAttribute('stroke-dashoffset');

      // Set initial styles with GSAP
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        strokeLinecap: 'round',
        fill: 'none',
        stroke: '#b8f2e6',
        strokeWidth: 0.5,
      });
    });

    // Ensure SVG and container are visible
    gsap.set([svgElement, container], {
      opacity: 1,
      visibility: 'visible',
      position: 'fixed',
      zIndex: 100000,
    });

    // Remove fill from group
    svgElement.querySelectorAll('g').forEach((g) => {
      g.removeAttribute('fill');
      g.style.fill = 'none';
    });

    // Create a GSAP timeline for stroke animation
    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        setTimeout(() => {
          setIsMounted(false);
          if (onAnimationComplete) onAnimationComplete();
        }, 3000); // Increased delay to 3 seconds
      },
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 3,
      ease: 'power2.inOut',
      stagger: 0.2,
    });

    return () => {};
  }, []);

  return (
    isMounted && (
      <div
        ref={containerRef}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#1c1c1c',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100000,
        }}
      >
        <SignatureSVG
          ref={svgRef}
          style={{
            width: '300px',
            height: 'auto',
            stroke: '#222',
            fill: 'none',
            strokeWidth: 1.5,
            opacity: 1,
            visibility: 'visible',
            position: 'fixed',
            zIndex: 100000,
          }}
        />
      </div>
    )
  );
};

export default SplashLoader;
