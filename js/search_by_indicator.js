(function(){
    var blue_ribbons = [
        {   "index": "1",
            "data": ["Georgia", "Arkansas", "Ohio"]
        },
        {
            "index": "2",
            "data": ["Washington", "Iowa", "New Jersey"]
        },
        {
            "index": "3",
            "data": ["Arizona", "Colorado", "Indiana"]
        },
        {
            "index": "5",
            "data": ["California", "New York"]
        }
    ]
    var methods = [
        {
            "index": "1",
            "data": `This indicator is based on whether the State demonstrates a recognition that digital skills are a growing need not only
                                    in the technology sector, but across occupations. The strongest States demonstrate this by collecting and disseminating
                                    user-friendly, comprehensive information on the specific digital skill needs of the State in addition to projections of
                                    occupations most likely to require these skills.`
        },
        {
            "index": "2",
            "data": `This indicator is based on whether the State demonstrates it has developed a plan that addresses the growing need for
                                    digital skills (beyond digital literacy) and focuses on future digital skilling efforts to meet such needs.
                                    Comprehensive plans to address digital skills needs go beyond general re-employment efforts (for example, those related
                                    to COVID-19 re-employment efforts). In many cases, these efforts are incorporated into broader “Future of Work” plans
                                    and commissions.`
        },
        {
            "index": "3",
            "data": `This indicator is based on whether the State demonstrates it offers resources that provide free virtual digital skills
                                    training directly from its main workforce development website. The strongest States make these resources easily
                                    accessible and through a variety of providers. These training opportunities are in addition to Eligible Training
                                    Provider Lists (ETPL) which each State is required to maintain for purposes of the Workforce Innovation and Opportunity
                                    Act (WIOA).`
        },
        {
            "index": "4",
            "data": `This indicator is based on whether the State not only has dedicated incumbent worker funds but also that such funds may
                                    be used for foundational skills. This information is based upon
                                    <a target="_blank" href="https://www.nationalskillscoalition.org/resources/publications/file/Funding-Resilience-National-Skills-Coalition-digital-August-2020.pdf">
                                        “Funding Resilience: How public policies can support business in upskilling workers for a changing economy.”
                                    </a>`
        },
        {
            "index": "5",
            "data": `This indicator is based on whether the State demonstrates it has at least one technology-related apprenticeship program
                                    planned or in place.`
        },
        {
            "index": "7",
            "data": `This indicator is based on whether the State demonstrates it has officially published specific goals related to
                                    increasing broadband access. The strongest States have published comprehensive reports focused on the specific plan for
                                    reaching such goals.`
        }
    ]
    $(document.body).on('click', '.indicator', function(){
        if($('#blue-ribbons').length){
            $('#blue-ribbons').empty();
        }
        var indicator_index = this.id
        $.getJSON("/data/skills_data_toy.json", function(data){
            $.each(data, function(i, d){
                var state = d['State']
                if(d[`${indicator_index}_YN`].toUpperCase().trim() === 'YES'){
                    $(`#${state}`).attr('class', 'state-yes')
                } else {
                    $(`#${state}`).attr('class', 'state-no')
                }
            })
        })

        var ribbon_states = blue_ribbons.find(d => {
            return d.index === indicator_index
        })
        ribbons_html = []

        if(typeof ribbon_states != "undefined"){
            $.each(ribbon_states.data, function(j,state){
                ribbons_html.push(`
                    <a class="btn btn-outline-secondary ribbon-state" href="/pages/us_map.html" id="${state}">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path id="ribbon" d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
                        </svg>
                        ${state}
                    </a>
                `)
            })
        }
        

        var method = methods.find(d=>{
            return d.index === indicator_index
        })

        if (typeof ribbon_states != "undefined") {
            $('#blue-ribbons').html(`
                <div class="row">
                    <div class="col">
                        <h5>Best Emerging Practices </h5>
                        ${ribbons_html.join("")}
                    </div>
                    <div class="col">
                        <h5>Rubric</h5>
                        <p>${method.data}</p>
                    </div>
                </div>
            `)
        } else {
            $('#blue-ribbons').html(`
                <div class="row">
                    <div class="col">
                        <h5>Rubric</h5>
                        <p>${method.data}</p>
                    </div>
                </div>
            `)
        }
    })

    $(document.body).on('click', '.ribbon-state', function () {
        localStorage.setItem('objectToPass', `${this.id}`);
    })

})(jQuery);