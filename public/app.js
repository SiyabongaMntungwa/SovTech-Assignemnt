let floater = document.getElementById('floater');

        window.addEventListener('scroll', () => {
            let value = window.scrollY;

            floater.style.left = value * 0.7 + 'px';
        });