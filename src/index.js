export const paintCards = () => {
    let elemLi = document.querySelectorAll('li:nth-of-type(2n-1)');
    for (let li of elemLi) {
        li.style.backgroundColor = "red";
    }
};

export const findElement = () => {
    let elemLi = document.querySelector('li');
    while (elemLi) { 
        if (elemLi.matches('.likedItem')) {
            elemLi.style.backgroundColor = "blue";
            elemLi = elemLi.nextElementSibling;
        } else {
            elemLi = elemLi.nextElementSibling;
        }
    }
};
