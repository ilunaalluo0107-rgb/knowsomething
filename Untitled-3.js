<button id="myButton">Click me to hide the div</button>
    <div id="myDiv">This div will disappear after you click the button.</div>

    <script>
        const button = document.getElementById('myButton');
        const divToHide = document.getElementById('myDiv');

        button.addEventListener('click', function() {
            divToHide.style.display = 'none'; // Makes the div disappear
        });