// ==UserScript==
// @name         github repo delete auto confirm
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  auto complete the confirm input when deleting a repo on github
// @author       remisiki
// @match        https://github.com/*/settings
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.querySelector("#dialog-show-repo-delete-menu-dialog").addEventListener("click", () => {
        document.querySelector("#repo-delete-proceed-button").click();
        setTimeout(() => {
            document.querySelector("#repo-delete-proceed-button").click();
            setTimeout(() => {
                const confirmBox = document.querySelector("#verification_field");
                confirmBox.value = confirmBox.getAttribute("data-repo-nwo");
                confirmBox.dispatchEvent(new Event("focus"));
                confirmBox.dispatchEvent(new Event("input"));
            }, 100);
        }, 0);
    });
})();
