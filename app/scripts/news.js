/**
 * Created by mvhatch on 9/5/2015.
 */

(function(document) {
    'use strict';

    var app = document.querySelector('#app');

    app._onItemTap = function(event) {
        var type_url_map = {
            "club-invite": "../data/clubfeed/invited.json",
            "club-active": "../data/clubfeed/clubs.json",
            "profile": "../../../data/profiles/profiles.json"
        };

        var news_details = document.querySelector('#news_details');
        news_details.url = type_url_map[event.detail.type];
        news_details.index = event.detail.id;

        document.querySelector('#news_pages').selected = 1;
    };

    app._onDetailsTap = function() {
        document.querySelector('#news_pages').selected = 0;
    };

})(document);
