$(function () {
    function display(bool) {
        if (bool) {
            $("#container").show();
        } else {
            $("#container").hide();
        }
    }
    display(true)
    $("#box3").show();

    function moneyFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var isArmorShown = false;
    var isSocShown = false;
    var isOxygenShown = false;

    $("#armor-container").hide(); 
    $("#oxygen-container").hide(); 
    $("#box3").show();

    window.addEventListener('message', function(event) {
        if (event.data.type === "ui") {
            if (event.data.status == true) {
                display(true)
            }
            else {
                display(false)
            }
        }
        else if (event.data.type === "update") {
            var date = new Date();
            document.getElementById("health").style.width = event.data.health + "%";
            document.getElementById("hunger").style.width = event.data.food + "%";
            document.getElementById("thirst").style.width = event.data.water + "%";

           if (event.data.armor > 0) {
                if (!isArmorShown) {
                    $("#armor-container").css({opacity: 0});
                    $("#armor-container").show();
                    $("#armor-container").animate({opacity: 1}, 500, function(){
                        $("#armor-container").animate({opacity: 1}, 100)
                    });
                    
                    isArmorShown = true;
                }
                document.getElementById("armor").style.width = event.data.armor + "%";
            }
            else if (event.data.armor == 0){
                if (isArmorShown) {
                    $("#armor-container").css({opacity: 1});
                    $("#armor-container").animate({opacity: 0}, 500, function(){
                        $("#armor-container").animate({opacity: 1}, 100)
                        $("#armor-container").hide(); 
                    });

                    isArmorShown = false; 
                }
            } 

            if (event.data.oxygen < 100) {
                if (!isOxygenShown) {
                    $("#oxygen-container").css({opacity: 0});
                    $("#oxygen-container").show();
                    $("#oxygen-container").animate({opacity: 1}, 500, function(){
                        $("#oxygen-container").animate({opacity: 1}, 100)
                    });
                    
                    isOxygenShown = true;
                }
                if (event.data.oxygen > 0){
                    document.getElementById("oxygen").style.width = event.data.oxygen + "%";
                }
                else{
                    document.getElementById("oxygen").style.width = "0%";
                }
                
            }
            
            else if (event.data.oxygen >= 100) {
                if (isOxygenShown) {
                    $("#oxygen-container").css({opacity: 1});
                    $("#oxygen-container").animate({opacity: 0}, 500, function(){
                        $("#oxygen-container").animate({opacity: 1}, 100)
                        $("#oxygen-container").hide(); 
                    });
                    
                    isOxygenShown = false; 
                }
            }
        }

        
    }) 
})