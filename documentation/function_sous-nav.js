var scroll_nav = document.getElementById("dynamic_nav");

window.onscroll = function() {
    if (window.pageYOffset > 93) {
        scroll_nav.style.top = "0%";
        scroll_nav.style.backgroundColor = "#292d31";
        scroll_nav.style.padding = "1rem 1rem 1rem 1rem";
        scroll_nav.style.width = "100%";
        scroll_nav.style.boxShadow = "0px 0px 3px 3px rgba(0,0,0,0.4)"
    }
    if (window.pageYOffset < 93) {
        scroll_nav.style.top = "12%";
        scroll_nav.style.backgroundColor = "transparent";
        scroll_nav.style.padding = "0rem";
        scroll_nav.style.width = "auto";
        scroll_nav.style.boxShadow = "none";
    }
};
