<<<<<<< HEAD
gitbook.events.bind('start', function(e, config) {
    anchors.options = config.anchorjs || {};
});

gitbook.events.bind('page.change', function() {
    anchors.add('h1,h2,h3,h4,h5');
});
=======
gitbook.events.bind('start', function(e, config) {
    anchors.options = config.anchorjs || {};
});

gitbook.events.bind('page.change', function() {
    anchors.add('h1,h2,h3,h4,h5');
});
>>>>>>> 14463ac21deeead396ced88a3c64d2ea318b4c0a
