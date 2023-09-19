const colorButton = document.getElementById('colorButton');
let colorsChanged = false;

colorButton.addEventListener('click', () => {
    if (colorsChanged) {
        document.documentElement.style.setProperty('--MainColor', "#0c7b00");
        document.documentElement.style.setProperty('--SecendColor', '#1bb600');
        document.documentElement.style.setProperty('--BgColor', '#dfeadf');
        document.documentElement.style.setProperty('--CardColor', '#f5fdef');
        document.documentElement.style.setProperty('--MyTextColor', '#ffffff');
        document.documentElement.style.setProperty('--TextColor', '#343434');

    } else {
        document.documentElement.style.setProperty('--MainColor', '#0c7b00');
        document.documentElement.style.setProperty('--SecendColor', '#1bb600');
        document.documentElement.style.setProperty('--BgColor', '#545454');
        document.documentElement.style.setProperty('--CardColor', '#212420');
        document.documentElement.style.setProperty('--MyTextColor', 'orange');
        document.documentElement.style.setProperty('--TextColor', "#e7f4e3");

    }

    colorsChanged = !colorsChanged;
});



const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
