// Load jQuery from NPM
// import $ from 'jquery';

// window.jQuery = $;
// // window.$ = $;
// 'use strict';

// const jsdom = require("jsdom").jsdom;
// global.$ = require('jquery/dist/jquery')(jsdom().createWindow());


(function(){
    $(".state").each(function () {
        $(this).on("click", function (e) {
            $("notesModal").modal()
            var element_state_id = this.id;
            $.getJSON("../data/us_state_data_static.json", function (data) {
                var notes = [];
                var state_names = {
                    'AK': 'Alaska',
                    'MI': "Michigan"
                };
                // Find statename value based on type-code key
                var state_name = state_names[element_state_id];
                notes.push("<br><h1>" + state_name + "</h1>")

                $.each(data, function (idx, obj) {
                    if (element_state_id === obj.STATE_ID) {
                        var type = obj.TYPE;
                        var types = type.split(";");
                        var first_type = types[0]
                        var first_type_words = first_type.split(" ")
                        var type_code = first_type_words[0][0].toUpperCase() + first_type_words[1][0].toUpperCase()
                        // notes.push("<p>" + type_code + "<p/>")


                        // Add text
                        notes.push("<p id='" + type_code + "' >" + obj.NOTE + "</p>");
                    }
                });
                $("<ul/>", {
                    "class": "my-new-list",
                    html: notes.join("")
                });
                $("#state_notes").html(notes)
            });
        });
    });
})(jQuery);
