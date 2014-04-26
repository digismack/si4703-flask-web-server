function updatePanel(data){
    $('#channel-setting').text( data['channel'] );
    $('#volume-setting').text( data['volume'] );
}

$(document).ready(function(){

    initial_info = $.ajax({
        type : 'GET',
        url : '/info',
        dataType : 'json',
    });

    initial_info.done(function( data ){
        updatePanel( data );
    });
    
    $('#volume-up').on('click', function(){
        volume_up = $.ajax({
            type : 'GET',
            url : '/volume_up',
            dataType : 'json',
        });
        volume_up.done(function( data ){
            updatePanel( data );
        });
    });
    $('#volume-down').on('click', function(){
        volume_down = $.ajax({
            type : 'GET',
            url : '/volume_down',
            dataType : 'json',
        });
        volume_down.done(function( data ){
            updatePanel( data );
        });

    });
    $('#seek-right').on('click', function(){
        seek_right = $.ajax({
            type : 'GET',
            url : '/seek_right',
            dataType : 'json',
        });
        seek_right.done(function( data ){
            updatePanel( data );
        });

    });
    $('#seek-left').on('click', function(){
        seek_left = $.ajax({
            type : 'GET',
            url : '/seek_left',
            dataType : 'json',
        });
        seek_left.done(function( data ){
            updatePanel( data );
        });

    });
});
