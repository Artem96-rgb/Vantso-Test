$(function () {
    $('#example-one').on('show.bs.modal', function (e) {
        location.hash = '#example-one';
    })
    $('#example-one').on('hide.bs.modal', function (e) {
        location.hash = '';
    })
    if (location.hash.length > 0) {
        if (document.querySelector(location.hash)) {
            $(location.hash).modal('show')
        }
    }
});


$(function () {
    $('#example-two').on('show.bs.modal', function (e) {
        location.hash = '#example-two';
    })
    $('#example-two').on('hide.bs.modal', function (e) {
        location.hash = '';
    })
    if (location.hash.length > 0) {
        if (document.querySelector(location.hash)) {
            $(location.hash).modal('show')
        }
    }
});