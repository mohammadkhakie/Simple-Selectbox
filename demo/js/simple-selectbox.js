function selectbox() {
    $('select').each(function() {
        select = $(this);
        width = select.data('width');
        selectbox = $('<div class="select"><ul></ul></div>');
        select.parent().append(selectbox);
        selectbox.css('width',width);
        select.find('option').each(function() {
            text = $(this).text();
            val = $(this).val();
            selectbox.find('ul').append('<li data-val="' + val + '" >' + text + '</li>');
        });
        title = select.find('option:selected').text();
        selectbox.prepend('<div class="title">' + title + '</div>');
        selectbox.find('li').click(function() {
            select.val($(this).data('val'));
            text_finish = $(this).text();
            selectbox.find('div.title').text(text_finish);
        })
    });
    $('div.select').click(function() {
        $(this).toggleClass('active')
    })
}

$(document).ready(function() {
    selectbox()
})