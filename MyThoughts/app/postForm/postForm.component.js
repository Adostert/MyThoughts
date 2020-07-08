"use strict";
const postForm = {
    bindings: {
        showForm: "&",
        formToggle: "<",
        onSubmit: "&"
    },
    templateUrl: "app/postForm/postForm.html",
}
angular.module("App").component("postForm", postForm);