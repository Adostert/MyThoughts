"use strict";

const post = {
    bindings: {
        removePost: "&",
        postsArray: "<"
    },
    templateUrl: "app/post/post.html"
}

angular.module("App").component("post", post);