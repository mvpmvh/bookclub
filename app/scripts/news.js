/**
 * Created by mvhatch on 9/5/2015.
 */

(function(document) {
    'use strict';

    var app = document.querySelector('#app');

    app._onItemTap = function(event) {
        document.querySelector('#full_details').data = event.detail.data;
        document.querySelector('#pages').selected = 1;
    };

    app._onDetailsTap = function(event) {
        document.querySelector('#pages').selected = 0;
    };

})(document);
