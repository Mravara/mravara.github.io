document.addEventListener('DOMContentLoaded', main);

function main() {
    // initialize Masonry
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer'
    });

    // set current copyright year
    var timeNow = new Date();
    var yearSpan = $('.page-footer #year');
    yearSpan.text(timeNow.getFullYear());
    
    // randomize silly letters
    const letters = document.querySelectorAll('#alive-text span');

    letters.forEach(letter => {
        const randomDelay = Math.random() * 2;
        letter.style.animationDelay = `${randomDelay}s`;
    });

    // stop youtube video playback when the modal closes
    $(document).on('hidden.bs.modal', function (event) {
        $(event.target).find('iframe').each(function () {
            const iframe = $(this);
            const src = iframe.attr('src');
            iframe.attr('src', '');
            iframe.attr('src', src);
        });
    });
}
