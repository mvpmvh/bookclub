/**
 * Created by mvhatch on 9/12/2015.
 */

(function(document) {
    'use strict';

    //TODO: figure out why I can only bind to #app. Should be able to bind to any element. Investigate if I need to wait for document to be ready.
    var app = document.querySelector('#app');

    app._onClubItemTap = function(event) {
        var type = event.detail.type;
        var id = event.detail.id;

        page('/clubs/' + type + '/' + id);
        event.preventDefault();
    };

})(document);

