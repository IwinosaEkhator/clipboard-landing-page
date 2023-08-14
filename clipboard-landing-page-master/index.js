const backToTopButton = document.querySelector(".arrow-box");

// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200){
        backToTopButton.style.display = "block";
    }else{
        backToTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

backToTopButton.addEventListener("click", function () {
    document.documentElement.scrollIntoView({
        top: 0,
        behavior: "smooth"
    })
})

