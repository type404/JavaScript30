const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix); //changes the property of the css variable selected
}
inputs.forEach(input => input.addEventListener('change', handleUpdate)); //the content of a form element has changed
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //the pointer is moving while over an element

