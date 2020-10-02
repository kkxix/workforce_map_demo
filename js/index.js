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
            $("#notesModal").modal()
            var element_state_id = this.id;
            $.getJSON("../data/us_state_data_static.json", function (data) {
                var notes = [];
                var state_names = {
                    "AL": "Alabama",
                    "AK": "Alaska",
                    "AS": "American Samoa",
                    "AZ": "Arizona",
                    "AR": "Arkansas",
                    "CA": "California",
                    "CO": "Colorado",
                    "CT": "Connecticut",
                    "DE": "Delaware",
                    "DC": "District Of Columbia",
                    "FM": "Federated States Of Micronesia",
                    "FL": "Florida",
                    "GA": "Georgia",
                    "GU": "Guam",
                    "HI": "Hawaii",
                    "ID": "Idaho",
                    "IL": "Illinois",
                    "IN": "Indiana",
                    "IA": "Iowa",
                    "KS": "Kansas",
                    "KY": "Kentucky",
                    "LA": "Louisiana",
                    "ME": "Maine",
                    "MH": "Marshall Islands",
                    "MD": "Maryland",
                    "MA": "Massachusetts",
                    "MI": "Michigan",
                    "MN": "Minnesota",
                    "MS": "Mississippi",
                    "MO": "Missouri",
                    "MT": "Montana",
                    "NE": "Nebraska",
                    "NV": "Nevada",
                    "NH": "New Hampshire",
                    "NJ": "New Jersey",
                    "NM": "New Mexico",
                    "NY": "New York",
                    "NC": "North Carolina",
                    "ND": "North Dakota",
                    "MP": "Northern Mariana Islands",
                    "OH": "Ohio",
                    "OK": "Oklahoma",
                    "OR": "Oregon",
                    "PW": "Palau",
                    "PA": "Pennsylvania",
                    "PR": "Puerto Rico",
                    "RI": "Rhode Island",
                    "SC": "South Carolina",
                    "SD": "South Dakota",
                    "TN": "Tennessee",
                    "TX": "Texas",
                    "UT": "Utah",
                    "VT": "Vermont",
                    "VI": "Virgin Islands",
                    "VA": "Virginia",
                    "WA": "Washington",
                    "WV": "West Virginia",
                    "WI": "Wisconsin",
                    "WY": "Wyoming"
                };
                // Find statename value based on type-code key
                var state_name = state_names[element_state_id];
                // notes.push("<br><h1>" + state_name + "</h1>")
                $('.modal-header').html(`<h5 class="modal-title" id="exampleModalLabel">${state_name}</h5> `)


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
                // $("#state_notes").html(notes)
                $(".modal-body").html(notes)
            });
        });
    });
})(jQuery);
