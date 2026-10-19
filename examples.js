const industryTabs = Array.from(document.querySelectorAll('.industry-tabs [role="tab"]'));

function selectIndustry(tab, moveFocus = false) {
  industryTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (moveFocus) tab.focus();
}

industryTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectIndustry(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % industryTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + industryTabs.length) % industryTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = industryTabs.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    selectIndustry(industryTabs[next], true);
  });
});
