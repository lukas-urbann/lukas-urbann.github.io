// Expands / collapses a project description (the whole card is clickable, the title button makes it keyboard-friendly).
// The height is animated to the exact size of the text, so the panel never stretches past it and the text never re-wraps.
function toggleDescription(card) {
    const open = card.classList.toggle('c-project-description-full');
    // Room inside the card: its height minus the card's own margins (8px top and bottom).
    const room = card.parentElement.clientHeight - 16;
    card.style.maxHeight = open ? Math.min(card.scrollHeight + 2, room) + 'px' : '';
    card.querySelector('button').setAttribute('aria-expanded', open);
}
