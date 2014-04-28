function setVolumeBars(int){
    $('#volume-setting li').removeClass('active');
    $('#volume-setting li:nth-child(-n+' + int + ')').addClass('active');
    if ( int > 0 ){
        $('#volume-wrapper i').css('color','#fff');
    } else {
        $('#volume-wrapper i').css('color','#666');
    }
}

function updatePanel(data){
    $('#channel-setting strong').text(data['channel']);
    setVolumeBars(data['volume']);
}

$(document).ready(function(){

    initial_info = $.ajax({
        type : 'GET',
        url : '/info',
        dataType : 'json',
        cache : false,
    });

    initial_info.done(function(data){
        updatePanel(data);
    });

    $('#volume-up').on('click', function(){
        $button = $(this);
        $button.attr('disabled','disabled');
        volume_up = $.ajax({
            type : 'GET',
            url : '/volume_up',
            dataType : 'json',
            cache : false,
        });
        volume_up.done(function(data){
            updatePanel(data);
            $button.removeAttr('disabled');
            $('#volume-setting').css('color','#fff');
        });
    });

    $('#volume-down').on('click', function(){
        $button = $(this);
        $button.attr('disabled','disabled');
        volume_down = $.ajax({
            type : 'GET',
            url : '/volume_down',
            dataType : 'json',
            cache : false,
        });
        volume_down.done(function(data){
            updatePanel(data);
            $('#volume-setting').css('color','#fff');
            $button.removeAttr('disabled');
        });
    });

    $('#seek-right').on('click', function(){
        $button = $(this);
        $button.attr('disabled','disabled');
        seek_right = $.ajax({
            type : 'GET',
            url : '/seek_right',
            dataType : 'json',
            cache : false,
            beforeSend: function(){
                $('#channel-setting strong').text('---');
            }
        });
        seek_right.done(function(data){
            updatePanel(data);
            $('#channel-setting').css('color','#fff');
            $button.removeAttr('disabled');
        });
    });

    $('#seek-left').on('click', function(){
        $button = $(this);
        $button.attr('disabled','disabled');
        seek_left = $.ajax({
            type : 'GET',
            url : '/seek_left',
            dataType : 'json',
            cache : false,
            beforeSend: function(){
                $('#channel-setting strong').text('---');
            }
        });
        seek_left.done(function(data){
            updatePanel(data);
            $('#channel-setting').css('color','#fff');
            $button.removeAttr('disabled');
        });
    });

});
