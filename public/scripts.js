document.addEventListener('DOMContentLoaded', () => {
  // Example of a simple hover effect for sections
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
      section.addEventListener('mouseover', () => {
          section.style.backgroundColor = '#e0e0e0';
      });

      section.addEventListener('mouseout', () => {
          section.style.backgroundColor = '#fff';
      });
  });
});
