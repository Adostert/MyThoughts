"use strict";
const postbox = {
    templateUrl: "app/socialPosts/socialPosts.html",
    controller: [function() {
        const vm = this;
        vm.postsArray = [];
        vm.formToggle = false;
        vm.onSubmit = function(newPost) {
            vm.postsArray.push({...newPost});
            vm.formToggle = false;
        }
        vm.removePost = function(index) {
            vm.postsArray.splice(index, 1)
        }
        vm.showForm = function() {
            vm.formToggle = true;
        }
        console.log(vm.postsArray);
    }]
};


angular.module("App").component("postbox", postbox);