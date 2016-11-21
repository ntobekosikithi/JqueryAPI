$(document).ready(function(){

   $.getJSON("https://api.themoviedb.org/3/discover/tv?api_key=c94431cab6597dab45a1c126e000512f&year=2016&sort_by=popularity.desc", function(data, status){
       console.log(data);

           $.each(data['results'], function(key, value ) {
             
             $('#cover').append('<div id="movies"><img src="'+"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+value['poster_path']+'" Width="275px" Height="340px" style="margin-left:15px;margin-top:10px;"><div class="Descr"><span>' +value["original_name"]+'</span></div><span   class="YearAndRate">rating:'+value['vote_average']+'</span></div>');
             
           });
           
    });
});