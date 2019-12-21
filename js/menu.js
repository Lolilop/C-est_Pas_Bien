(function() {

  let menuEl = document.getElementById('ml-menu'),
    mlmenu = new MLMenu(menuEl, {
      breadcrumbsCtrl: true,
      initialBreadcrumb: 'Tous',
      backCtrl: false,
      itemsDelayInterval: 60,
      onItemClick: loadDummyData
    });

  let openMenuCtrl = document.querySelector('.action--open'),
    closeMenuCtrl = document.querySelector('.action--close');

  openMenuCtrl.addEventListener('click', openMenu);
  closeMenuCtrl.addEventListener('click', closeMenu);

  function openMenu() {
    classie.add(menuEl, 'menu--open');
    closeMenuCtrl.focus();
  }

  function closeMenu() {
    classie.remove(menuEl, 'menu--open');
    openMenuCtrl.focus();
  }


  function loadDummyData(ev, itemName) {
    closeMenu();
  }
})();