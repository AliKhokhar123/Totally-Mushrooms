function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content-box1').innerHTML = data;

            const sliderElements = document.querySelectorAll('.slider-container'); // Get all sliders

            sliderElements.forEach(slider => {

                const slider1 = slider.querySelector('.slider');
                const sliderValue = slider.querySelector('#sliderValue');

                if (slider1 && sliderValue) {
                    slider.addEventListener('input', (event) => {
                        updateSliderValue(event.target.value, slider1, sliderValue); // Pass both slider and value display
                    });
                } else {
                    console.warn('Slider value element not found for:', slider.id);
                }
            });


            const history_links = document.querySelectorAll('.historyLink');
            const contentBox = document.getElementById("history_content");

            history_links.forEach(element => {
                element.addEventListener('click', function (e) {
                    history_links.forEach(link => {
                        link.classList.remove('active');
                    });
                    element.classList.add('active');

                    let clickedContent = element.textContent.trim();
                    // Example of changing content in 'history_content' element
                    if (clickedContent == 'All') {
                        contentBox.innerHTML = `<h4 class="latest-head">Latest</h4>
<div class="data-box">
    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">Temperature</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">72°F</p>
        </div>
    </div>

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/water-drops.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">Humidity</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">85%</p>
        </div>
    </div>

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/Co2.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">CO2</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">800 ppm</p>
        </div>
    </div>

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">Light</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">1200 lux</p>
        </div>
    </div>

</div>


<h4 class="today-head">Today</h4>

<div class="data-box">
    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">Temperature</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">71°F</p>
        </div>
    </div>

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/water-drops.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">Humidity</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">84%</p>
        </div>
    </div>

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/Co2.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">CO2</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">825 ppm</p>
        </div>
    </div>

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">Light</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">1500 lux</p>
        </div>
    </div>

</div>`
                    }
                    else if (clickedContent == 'Temperatures') {
                        contentBox.innerHTML = `<h4 class="latest-head">Latest</h4>
<div class="data-box">
    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">Temperature</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">72°F</p>
        </div>
    </div>
</div>


<h4 class="today-head">Today</h4>

<div class="data-box">
    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">Temperature</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">71°F</p>
        </div>
    </div>
</div>`
                    }
                    else if (clickedContent == 'Humidity') {
                        contentBox.innerHTML = `<h4 class="latest-head">Latest</h4>

<div class="data-box">

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/water-drops.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">Humidity</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">85%</p>
        </div>
    </div>

</div>

<h4 class="today-head">Today</h4>

<div class="data-box">
  
    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/water-drops.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">Humidity</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">84%</p>
        </div>
    </div>

</div>`
                    }
                    else if (clickedContent == 'CO2') {
                        contentBox.innerHTML = `<h4 class="latest-head">Latest</h4>

<div class="data-box">
    
    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/Co2.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">CO2</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">800 ppm</p>
        </div>
    </div>


</div>


<h4 class="today-head">Today</h4>

<div class="data-box">

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/Co2.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">CO2</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">825 ppm</p>
        </div>
    </div>

</div>`
                    }
                    else if (clickedContent == 'Light') {
                        contentBox.innerHTML = `<h4 class="latest-head">Latest</h4>

<div class="data-box">

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">11:00 AM</p>
                <p class="name">Light</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">1200 lux</p>
        </div>
    </div>

</div>


<h4 class="today-head">Today</h4>

<div class="data-box">

    <div class="data d-flex justify-content-between">
        <div class="left-data d-flex">
            <div class="d-flex align-items-center">
                <img src="./src/images/sun.png" alt="" class="data-icon">
            </div>
            <div class="texts">
                <p class="time">10:00 AM</p>
                <p class="name">Light</p>
            </div>
        </div>
        <div class="right-data d-flex align-items-center">
            <p class="result">1500 lux</p>
        </div>
    </div>

</div>`
                    }
                })
            })


        })
        .catch(error => {
            console.error('Error loading page:', error);
            // ...
        });
}

function updateSliderValue(value, slider, sliderValue) {
    sliderValue.textContent = value;
    // Move the value display to be centered above the slider thumb
    const sliderWidth = slider.offsetWidth;
    const newValue = Number((value - slider.min) * 100 / (slider.max - slider.min));
    const newPosition = 10 - (newValue * 0.2);
    sliderValue.style.left = `calc(${newValue}% + (${newPosition}px))`;
}

document.addEventListener('DOMContentLoaded', function () {
    loadPage('dashboard.html'); // Load dashboard page by default
});



