var myColors = [
    "#FB3640",
    "#1D3461",
    "#1F487E",
    "#247BA0",
    "#3B3355",
    "#CE4257",
    "#FF7F51",
    "#FF9B54",
    "#AB3428",
    "#F49E4C",
    "#3B8EA5",
    "#2D728F"
];

function newQuoteFun() {
    var backgroundChoice = Math.floor(Math.random() * myColors.length);
    $("html body").animate(
        {
            backgroundColor: myColors[backgroundChoice],
            color: myColors[backgroundChoice]
        },
        1000
    );
    $(".btn").animate(
        {
            backgroundColor: myColors[backgroundChoice]
        },
        1000
    );
    $(".myNewQuoteButton").css("background", backgroundChoice);
    $(".mySocialButton").css("background", backgroundChoice);

    $(function() {
        var request = $.ajax({
            url:
            "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
            dataType: "jsonp"
        }); // end of request ajax function
        request.done(function(response) {
            var quoteNoQuotes = response.quoteText.replace(/\"/g, "");
            var authorNoQuotes = response.quoteAuthor.replace(/\"/g, "");
            //$("#myJsonQuote").html(quoteNoQuotes);
            $("#myJsonQuote, .quoteIcon").animate(
                {
                    opacity: 0
                },
                500,
                function() {
                    $(this).animate(
                        {
                            opacity: 1
                        },
                        500
                    );
                    $("#myJsonQuote").html(quoteNoQuotes);
                }
            ); // end of quote animate function
            $("#myJsonAuthor, .myAuthor").animate(
                {
                    opacity: 0
                },
                500,
                function() {
                    $(this).animate(
                        {
                            opacity: 1
                        },
                        500
                    );
                    if (authorNoQuotes === "") {
                        $("#myJsonAuthor").html("Anonymous");
                    } else {
                        $("#myJsonAuthor").html(authorNoQuotes);
                    }
                }
            ); // end of author animate function
            $(".twitter-share-button").click(function() {
                $(this).attr(
                    "href",
                    "https://twitter.com/intent/tweet?text=" + "\"" + quoteNoQuotes + "- " + authorNoQuotes + "\" -@SamLegros"
                );
            }); // end of twitter function
        }); // end of request.done function
    }); // end of function before the request ajax function
}

$(document).ready(function() {
    newQuoteFun();
}); // end of document.ready function

$("#newQuote").click(function() {
    newQuoteFun();
}); // end of myQuote click function
