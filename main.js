$(document).ready(function() {
    
    $("#search-form").submit(function(event) {
        $(".search").addClass("search-header");
        $(".search").removeClass("search");
        $.ajax("https://en.wikipedia.org/w/api.php", {
            dataType: "json",
            data: {
                action: "opensearch",
                format: "json",
                search: $("#query").val(),
                origin: "*"
            },
            type: "GET",
            success: showResults
        });
        event.preventDefault();
    })

    function showResults(data) {
        var html = "";
        for (var i=0; i<10; i++) {
            html += formatResult(data[1][i], data[2][i], data[3][i]);
        }
        $(".results").html(html);
    }
    
    function formatResult(title, description, link) {
        return '<a target="_blank" class="res-link" href="' + link + '"><div class="res-box"><h1 class="res-title">' + title + '</h1><p class="res-desc">' + description + '</p></div></a>';
    }

});