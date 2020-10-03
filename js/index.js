// Load jQuery from NPM
// import $ from 'jquery';

// window.jQuery = $;
// // window.$ = $;
// 'use strict';

// const jsdom = require("jsdom").jsdom;
// global.$ = require('jquery/dist/jquery')(jsdom().createWindow());


(function(){
    // $(".state").each(function () {
        $(document.body).on("click", '.state', function () {
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
                $('.modal-title').html(`<h5 class="modal-title" id="exampleModalLabel">${state_name}</h5> `)

                // $('.modal-items').html(`
                //     <div class="dropdown show">
                //         <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                //             aria-haspopup="true" aria-expanded="false">
                //             Filter by Category
                //                 </a>

                //         <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                //             <a class="dropdown-item" href="#" data-filters="MD">Mentions Digital Literacy/Computer Skills</a>
                //             <a class="dropdown-item" href="#" data-filters="PJ">Projected Job Growth/Occupation Outlook</a>
                //             <a class="dropdown-item" href="#" data-filters="DB">Digital Badging, Skilling-type website offered by State or State Programs in place</a>
                //             <a class="dropdown-item" href="#" data-filters="VP">Veterans population or prison population</a>
                //             <a class="dropdown-item" href="#" data-filters="DM">Direct mention of Microsoft</a>
                //             <a class="dropdown-item" href="#" data-filters="DD">Digital Divide</a>
                //         </div>
                //     </div>
                //     `);

                $.each(data, function (idx, obj) {
                    if (element_state_id === obj.STATE_ID) {
                        var type = obj.TYPE;
                        var types = type.split(";");
                        var first_type = types[0]
                        var first_type_words = first_type.split(" ")
                        var type_code = first_type_words[0][0].toUpperCase() + first_type_words[1][0].toUpperCase()
                        // notes.push("<p>" + type_code + "<p/>")


                        // Add text
                        notes.push("<p id='" + type_code + "' data-filters='" + type_code + "' >" + obj.NOTE + "</p>");
                    }
                });
                $("<ul/>", {
                    "class": "my-new-list",
                    html: notes.join("")
                });
                // $("#state_notes").html(notes)
                $(".modal-key").html(`
                    <h5>Key:</h5>
                    <ul>
                        <li id="MD">Mentions Digital Literacy/Computer Skills</li>
                        <li id="PJ">Projected Job Growth/Occupation Outlook</li>
                        <li id="DB">Digital Badging, Skilling-type website offered by State or State Programs in place</li>
                        <li id="VP">Veterans population or prison population</li>
                        <li id="DM">Direct mention of Microsoft</li>
                        <li id="DD">Digital Divide</li>
                    </ul>
                `)
                $(".modal-body").html(notes)
            });
        });
    // }
    // );
})(jQuery);
