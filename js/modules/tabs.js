function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector); 

    function hideContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach((item) => {
            item.classList.remove(activeClass);
        });
    }


    function showContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
    }


    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, index) => {
                if (item == target) {
                    hideContent();
                    showContent(index);
                }
            })
        }
    });

    hideContent();
    showContent();
}

export default tabs;