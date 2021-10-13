console.log("it's working");

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light');
}     
else {
    setTheme(theme);
}

let themDots = document.getElementsByClassName('theme-dot');

for (var i = 0; themDots.length > i; i++) {
    themDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode
        console.log("obtion clicked: ", mode);
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'styles.css'
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }
    localStorage.setItem('theme', mode)
}