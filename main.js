$(document).ready(function() {

    // Listen for any change in the dropdown menu
    $(".menu").on("change", function(event) {
        

        // Assign the value of whichever dropdown menu item the user chooses to a variable named "choice"
        var choice = $(this).val();

       	 if($(this).attr('class') == choice){
       	 	$(this).addClass('less')
       	 }


        // if(choice=="low"){
        // 	$(".item.active").removeClass("active")
        // 	$("."+choice).addClass("less")
        // }
        // else if(choice=="middle"){
        // 	$(".item.active").removeClass("active less")
        // 	$("."+choice).addClass("more")
        // }

        // Remove the 'active' class from any .active .items
        // $(".item.active").removeClass("active");

        // Add the 'active' class to any items whose class corresponds to the filter choice
        // $("." + choice).addClass("active");
    });
});

