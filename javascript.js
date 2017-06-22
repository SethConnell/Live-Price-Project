function searchStockSymbol(symbol) {
	$.ajax({url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20('" + symbol +"')&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", success:
        function(result){
			var name = JSON.stringify(result.query.results.quote.Name);
			name = "<span class = 'catagory'>Name: </span>" + "<span class = 'value'>" + name.split('"').join("") + "</span>" + '<br>';
            $(".results").append(name);
			var price = JSON.stringify(result.query.results.quote.Bid);
			price = "<span class = 'catagory'>Price: </span>" + "<span class = 'value'>" + price.split('"').join("") + "</span>" + '<br>';
            $(".results").append(price);
			var percentchange = JSON.stringify(result.query.results.quote.PercentChange);
			percentchange = "<span class = 'catagory'>Percent Change: </span>" + "<span class = 'value'>" + percentchange.split('"').join("") + "</span>" + '<br>';
            $(".results").append(percentchange);	
		}});
};

$(document).ready(function(){
    $('.searchbutton').on('click', function(e) {  
		var symbolly = $('.searchbox').val();
        searchStockSymbol(symbolly);
    });
});