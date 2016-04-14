/**
 * Created by Ricci on 13/04/2016.
 */
$().ready(function(){
    retrieveFiles();
});

function retrieveFiles(){
    $.ajax({
        url:'/files',
        method: 'get',
        success:function(files){
            printFiles(files);
        }
    });
}

function printFiles(files){
    var ulList = $('#files');
    $(files).each(function(index, file){
        var item = $('<li></li>').append(file.name);
        ulList.append(item);
    });
}