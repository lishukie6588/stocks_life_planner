module.exports = function(){
    var express = require('express');
    var router = express.Router();


    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["calendar/front_calendar_day.js", "calendar/front_calendar.js", "calendar/front_calendar_on_load.js"];
        /*
        var mysql = req.app.get('mysql');
        getUsers(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                //console.log(context);
                res.render('calendar/front_calendar', context);
            }

        }
        */
       res.render('calendar', context);
    });


    router.post('/todo', function(req, res){
        var callbackCount = 0;
        //var context = {};
        //context.jsscripts = ["calendar/front_calendar_day.js", "calendar/front_calendar.js", "calendar/front_calendar_on_load.js"];
        
        var mysql = req.app.get('mysql');
        getUsers(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                //console.log(context);
                res.render('calendar/front_calendar', context);
            }

        }
        
       res.render('calendar', context);
    });


    
    return router;
}();
