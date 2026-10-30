import { useEffect, type RefObject } from 'react';

/** Click-and-drag scrolling for a horizontal overflow track (mouse only; touch and trackpad already scroll natively). A drag never counts as a click on the cards inside. */
export function useDragScroll(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let down = false;
    let dragging = false;
    let startX = 0;
    let startLeft = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true;
      dragging = false;
      startX = e.clientX;
      startLeft = el.scrollLeft;
    };
    const onMove = (e: PointerEvent) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!dragging) {
        if (Math.abs(dx) < 6) return;
        dragging = true;
        el.setPointerCapture(e.pointerId);
        el.style.scrollSnapType = 'none'; // snapping would fight the drag; restored on release
        el.style.scrollBehavior = 'auto';
        el.style.cursor = 'grabbing';
        el.style.userSelect = 'none';
      }
      el.scrollLeft = startLeft - dx;
    };
    const onUp = () => {
      if (!down) return;
      down = false;
      if (!dragging) return;
      el.style.scrollSnapType = '';
      el.style.scrollBehavior = '';
      el.style.cursor = '';
      el.style.userSelect = '';
      setTimeout(() => {
        dragging = false;
      }, 0); // let the click that follows the release be swallowed first
    };
    const onClick = (e: MouseEvent) => {
      if (!dragging) return;
      e.preventDefault();
      e.stopPropagation();
    };
    const onDragStart = (e: Event) => e.preventDefault(); // no native image / link ghost-drag

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('click', onClick, true);
    el.addEventListener('dragstart', onDragStart);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('click', onClick, true);
      el.removeEventListener('dragstart', onDragStart);
    };
  }, [ref]);
}
