import { useEffect, useState } from 'react';

export function useRemoteNavigation() {
  const [focusedId, setFocusedId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) return;
      
      const activeEl = document.activeElement as HTMLElement;
      if (!activeEl) return;

      if (e.key === 'Enter') {
        activeEl.click();
        return;
      }

      const focusableElements = Array.from(
        document.querySelectorAll<HTMLElement>('[tabindex]:not([tabindex="-1"])')
      );
      
      const index = focusableElements.indexOf(activeEl);
      if (index === -1) return;

      let nextIndex = index;
      if (e.key === 'ArrowRight') nextIndex = index + 1;
      if (e.key === 'ArrowLeft') nextIndex = index - 1;
      
      if (e.key === 'ArrowDown') {
          const rect = activeEl.getBoundingClientRect();
          const itemsBelow = focusableElements.filter(el => {
            const elRect = el.getBoundingClientRect();
            return elRect.top > rect.bottom;
          });
          if(itemsBelow.length > 0) {
            itemsBelow[0].focus();
            itemsBelow[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            e.preventDefault();
            return;
          }
      }
      
      if (e.key === 'ArrowUp') {
           const rect = activeEl.getBoundingClientRect();
           const itemsAbove = focusableElements.filter(el => {
             const elRect = el.getBoundingClientRect();
             return elRect.bottom < rect.top;
           }).reverse();
           if(itemsAbove.length > 0) {
             itemsAbove[0].focus();
             itemsAbove[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
             e.preventDefault();
             return;
           }
      }

      if (nextIndex >= 0 && nextIndex < focusableElements.length) {
        focusableElements[nextIndex].focus();
        focusableElements[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { focusedId, setFocusedId };
}
