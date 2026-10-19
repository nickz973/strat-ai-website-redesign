document.querySelectorAll('.team-about-trigger').forEach((trigger) => {
  const bubble = document.getElementById(trigger.getAttribute('popovertarget'));
  const card = trigger.closest('.team-card');
  const positionBubble = () => {
    const bounds = card.getBoundingClientRect();
    const gap = 16;
    const width = Math.min(420, window.innerWidth - gap * 2);
    const right = bounds.right + gap;
    const left = right + width <= window.innerWidth - gap
      ? right
      : Math.max(gap, bounds.left - width - gap);
    bubble.style.left = `${left}px`;
    bubble.style.top = `${Math.max(gap, Math.min(bounds.top, window.innerHeight - bubble.offsetHeight - gap))}px`;
  };

  bubble.addEventListener('beforetoggle', (event) => {
    if (event.newState === 'open') positionBubble();
  });
  bubble.addEventListener('toggle', (event) => {
    const open = event.newState === 'open';
    trigger.setAttribute('aria-expanded', String(open));
    if (open) positionBubble();
  });
  window.addEventListener('resize', () => {
    if (bubble.matches(':popover-open')) positionBubble();
  });
  // Keep the bubble beside its profile as the visitor scrolls.
  window.addEventListener('scroll', () => {
    if (bubble.matches(':popover-open')) positionBubble();
  }, { passive: true });
});
