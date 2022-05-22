export const paintCards = () => {
    let elemLi = document.querySelectorAll('li:nth-of-type(2n-1)');
    for (let li of elemLi) {
        li.style.backgroundColor = "red";  
    }
};

export const findElement = () => {
    let elemLi = document.querySelectorAll('li');

    for (let li of elemLi) {
        if (li.matches('.likedItem')) {
            li.style.backgroundColor = "blue"; 
        }
    }

};
