// Function to get parameters from either query or fragment identifier
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');

  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);

  if (!results) {
      regex = new RegExp('[\\#&]' + name + '=([^&]*)');
      results = regex.exec(window.location.hash);
  }

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to add parameters to both query and fragment identifier
function addParametersToLinks() {
  // Récupérer tous les liens de la page
  var links = document.getElementsByTagName('a');

  // Récupérer les paramètres d'URL
  var originValue = getUrlParameter('origin');

  // Parcourir tous les liens et ajouter les paramètres d'URL
  for (var i = 0; originValue !== "" && i < links.length; i++) {
      var href = links[i].getAttribute('href');
      if (href.indexOf('?') !== -1) {
          links[i].setAttribute('href', href + '&origin=' + originValue);
      } else if (href.indexOf('#') !== -1) {
          links[i].setAttribute('href', href.split('#')[0] + '?origin=' + originValue + '#' + href.split('#')[1]);
      } else {
          links[i].setAttribute('href', href + '?origin=' + originValue);
      }
  }
}

// Appeler la fonction au chargement de la page
window.onload = addParametersToLinks;
