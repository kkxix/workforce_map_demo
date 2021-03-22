(function () {
    $.getJSON("/data/skills_data_toy.json", function (data) {
        var yn_rows = [1, 2, 3, 4, 5, 7]
        // 1 --> track data on digital skills needs
        // 2 --> developed comprehensive plan to address digital skills needs
        // 3 --> provide direct access to free virtual digital skills training
        // 4 --> allow incumbent worker training funds to be used for digital skills
        // 5 --> provide technology-related apprenticeship
        // 7 --> developed broadband plan

        var total_unemployed = 0
        var total_unemployed_without_ds = 0
        var total_jobs_ds = 0
        var total_spending = 0.
        var total_spending_per = 0

        var record = {
            "yes_1" : 0,
            "yes_2" : 0,
            "yes_3" : 0,
            "yes_4" : 0, 
            "yes_5" : 0,
            "yes_7" : 0
        } 

        $.each(data, function (i, d) {
            var u = parseInt(d['total_unemployed'].replaceAll(",", ""))
            total_unemployed += u

            var nds = parseInt(d['unemployed_without_ds'].replaceAll(",", ""))
            total_unemployed_without_ds += nds

            var jds = parseInt(d['jobs_with_ds'].replaceAll(",", ""))
            if($.isNumeric(jds)){
                total_jobs_ds += jds 
            }

            var m = parseFloat(d['funding'].replaceAll(",", "").replaceAll("$", ""));
            total_spending += m

            $.each(yn_rows, function(j, r){
                if (d[`${r}_YN`].toUpperCase().trim() == 'YES') {
                    record[`yes_${r}`] += 1 
                }
            })
        })

        total_spending_per = total_spending / total_unemployed;

        $('#unemployed').html(`${total_unemployed.toLocaleString("en")}`)
        $('#supply').html(`${total_unemployed_without_ds.toLocaleString("en")}`)
        $('#demand').html(`${total_jobs_ds.toLocaleString("en")}`)
        $('#dollars').html(`${total_spending_per.toLocaleString('en-US', {style: 'currency', currency: 'USD',})}`)

        $.each(yn_rows, function(i, r){
            var yeses = record[`yes_${r}`]
            $(`#indicator_${r}`).html(`
                ${yeses}
            `)
        })
        // $('#dollars').html(`${state_data['funding'].trim()}`)
    })

    function isInteger(value) {
        return /^\d+$/.test(value);
    }
})(jQuery);