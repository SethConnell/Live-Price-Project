$.ajax({url: "http://api.coindesk.com/v1/bpi/currentprice.json", success:
        function(result){
            $('body').html(result);
}});

