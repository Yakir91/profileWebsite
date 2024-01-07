let activeIndex = 0;

const containers = document.getElementsByClassName("cards-container");

const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= containers.length - 1 ? activeIndex + 1 : 0;
    console.log(nextIndex)

    if (activeIndex === 2) return;

    if (activeIndex < 2) {
        let leftButton = document.getElementById('left-button');
        leftButton.style.color = ' rgb(33, 150, 243)';
        leftButton.style.borderColor = 'rgb(33, 150, 243)';
    }
   
    if (nextIndex === 2) {
        let rightButton = document.getElementById('right-button');
        rightButton.style.color = 'red';
        rightButton.style.borderColor = 'red';
        
    } else {
        let rightButton = document.getElementById('right-button');
        rightButton.style.color = ' rgb(33, 150, 243)';
        rightButton.style.borderColor = 'rgb(33, 150, 243)';
    }
    
    const currentContainer = document.querySelector(`[data-index="${activeIndex}"]`),
          nextContainer = document.querySelector(`[data-index="${nextIndex}"]`);

    currentContainer.dataset.status = "after";

    nextContainer.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
        nextContainer.dataset.status = "active";
        activeIndex = nextIndex;
    })
}

const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;

    console.log(activeIndex)

    if (activeIndex === 0) return;

    if (activeIndex > 0) {
        let rightButton = document.getElementById('right-button');
        rightButton.style.color = ' rgb(33, 150, 243)';
        rightButton.style.borderColor = 'rgb(33, 150, 243)';
    }

    if (nextIndex === 0) {
        let leftButton = document.getElementById('left-button');
        leftButton.style.color = 'red';
        leftButton.style.borderColor = 'red';
    } else {
        let leftButton = document.getElementById('left-button');
        leftButton.style.color = ' rgb(33, 150, 243)';
        leftButton.style.borderColor = 'rgb(33, 150, 243)';
    }

    const currentContainer = document.querySelector(`[data-index="${activeIndex}"]`),
          nextContainer = document.querySelector(`[data-index="${nextIndex}"]`);

    currentContainer.dataset.status = "before";

    nextContainer.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextContainer.dataset.status = "active";
        activeIndex = nextIndex;
    })
};

