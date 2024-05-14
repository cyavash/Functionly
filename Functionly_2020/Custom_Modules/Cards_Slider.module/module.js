$(document).ready(function(){
    $('.cards-slider').slick({
        slidesToShow: 4.35,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,  
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,  
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.15,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});

$(document).ready(function() {
    // Function to set equal height to all .cs-img elements
    function setEqualHeight() {
        var maxHeight = 0;
        $('.cs-img').each(function() {
            $(this).css('height', 'auto'); // Reset height to auto before calculating new height
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });
        $('.cs-img').css('height', maxHeight + 'px');
    }

    // Initial equal height calculation on page load
    setEqualHeight();

    // Function to debounce resize event
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Recalculate equal height on window resize
    var debouncedResize = debounce(function() {
        setEqualHeight();
    }, 250); // Adjust debounce wait time as needed

    $(window).on('resize', debouncedResize);
});

/* Set all h3 equal height */
$(document).ready(function() {
    // Function to set equal height to all .slider-item .cs-inner h3 elements
    function setEqualHeight() {
        var maxHeight = 0;
        $('.slider-item .cs-inner h3').each(function() {
            $(this).css('height', 'auto'); // Reset height to auto before calculating new height
            maxHeight = Math.max(maxHeight, $(this).outerHeight());
        });
        $('.slider-item .cs-inner h3').css('min-height', maxHeight + 'px');
    }

    // Initial equal height calculation on page load
    setEqualHeight();

    // Function to debounce resize event
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Recalculate equal height on window resize
    var debouncedResize = debounce(function() {
        setEqualHeight();
    }, 250); // Adjust debounce wait time as needed

    $(window).on('resize', debouncedResize);
});
