/**
 * Weslley Neri - Portfolio
 * Main JavaScript
 */

(function () {
  'use strict';

  /**
   * Prevent default on placeholder corner links (# hrefs)
   * so the page doesn't scroll to top when clicked.
   */
  function initPlaceholderLinks() {
    var placeholderLinks = document.querySelectorAll('.cell-corner[href="#"]');
    placeholderLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
      });
    });
  }

  /**
   * Add a subtle entrance animation to grid cells on load.
   * Cells fade in with a slight upward shift, staggered by index.
   */
  function initEntranceAnimation() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function (cell, index) {
      cell.style.opacity = '0';
      cell.style.transform = 'translateY(8px)';
      cell.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      cell.style.transitionDelay = (index * 60) + 'ms';
    });

    // Trigger animation after a brief delay to ensure styles are applied
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        cells.forEach(function (cell) {
          cell.style.opacity = '1';
          cell.style.transform = 'translateY(0)';
        });

        // Clean up inline styles after animations complete
        setTimeout(function () {
          cells.forEach(function (cell) {
            cell.style.opacity = '';
            cell.style.transform = '';
            cell.style.transition = '';
            cell.style.transitionDelay = '';
          });
        }, 1000);
      });
    });
  }

  /**
   * Initialize on DOM ready
   */
  document.addEventListener('DOMContentLoaded', function () {
    initPlaceholderLinks();
    initEntranceAnimation();
  });
})();
