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
   * Theme Manager
   * Priority: localStorage > OS preference > time-of-day
   */
  var ThemeManager = {
    STORAGE_KEY: 'theme',

    resolve: function() {
      var stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
      if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';

      var hour = new Date().getHours();
      return (hour >= 6 && hour < 18) ? 'light' : 'dark';
    },

    apply: function(theme) {
      document.documentElement.dataset.theme = theme;
    },

    toggle: function() {
      var current = document.documentElement.dataset.theme;
      var next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(this.STORAGE_KEY, next);
      this.apply(next);
    },

    listenForOSChanges: function() {
      var self = this;
      var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkQuery.addEventListener('change', function() {
        // Only react if user hasn't set a manual preference
        if (!localStorage.getItem(self.STORAGE_KEY)) {
          self.apply(self.resolve());
        }
      });
    },

    startTimeCheck: function() {
      var self = this;
      // Re-evaluate every 30 minutes if using time-based fallback
      setInterval(function() {
        if (!localStorage.getItem(self.STORAGE_KEY)) {
          self.apply(self.resolve());
        }
      }, 30 * 60 * 1000);
    },

    init: function() {
      // Theme already set by inline <head> script; ensure consistency
      this.apply(this.resolve());
      this.listenForOSChanges();
      this.startTimeCheck();

      // Wire up toggle button
      var toggleBtn = document.getElementById('theme-toggle');
      if (toggleBtn) {
        var self = this;
        toggleBtn.addEventListener('click', function(e) {
          e.preventDefault();
          self.toggle();
        });
      }
    }
  };

  /**
   * Initialize on DOM ready
   */
  document.addEventListener('DOMContentLoaded', function () {
    initPlaceholderLinks();
    initEntranceAnimation();
    ThemeManager.init();
  });
})();
