(function () {
    $('#card_col_1').attr('class', 'col-3');
    $('#card_col_2').attr('class', 'col-3');
    $('#card_col_1').html(`
        <h5>State WIOA Five-Year Workforce plan (all states submitted in 2020)</h5>
        <div id="accordion">            
            <div class="card">
                <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="ID" data-toggle="collapse" data-target="#collapseTwo"
                            aria-expanded="false" aria-controls="collapseTwo">
                            Uses statewide labor market data to identify in-demand digital skills ?
                        </button>
                    </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body" id="ID-body" >
                    Plan states “The most common industry sectors for 
                    emerging occupations are healthcare and professional 
                    services, due to ongoing advances in medical 
                    technology; life, physical and environmental 
                    sciences; engineering, mathematics and computer 
                    sciences; and psychology and the social sciences”
                    </br>
                    <a href="http://www.floridajobs.org/workforce-statistics/workforce-statistics-data-releases/monthly-data-releases">
                    More information</a>

                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                        <button class="btn btn-link" id="AN" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            Addresses need for digital skills?
                        </button>
                    </h5>
                </div>
        
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body" id="AN-body">
                    No detailed plan for addressing digital skills
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="SD" data-toggle="collapse" data-target="#collapseFour"
                            aria-expanded="false" aria-controls="collapseFour">
                            Highlights community college efforts promoting digital skills?
                        </button>
                    </h5>
                </div>
                <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div class="card-body">
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="HT" data-toggle="collapse" data-target="#collapseThree"
                            aria-expanded="false" aria-controls="collapseThree">
                            Has technology-related apprenticeship program planned or in place?
                        </button>
                    </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div class="card-body" id="HT-body">
                        <ul>
                        <li> An initiative to expand apprenticeship opportunities 
                        throughout the state, is led by the Department of 
                        Economic Opportunity in collaboration with CareerSource 
                        Florida and the Florida Department of Education. 
                        Apprenticeship FLA seeks to Expand apprenticeships 
                        in several targeted sectors, including advanced 
                        manufacturing, healthcare, building trades/construction, 
                        hospitality, maritime industries, transportation, 
                        warehousing, and information technology.</li>
                        <li>Regional Demand Occupation Lists are available to 
                        identify occupations within industries that are in the
                         greatest demand by local workforce development areas in
                          Florida. </li>
                        </ul>
                        <a href="https://apprenticeflorida.com/">
                        Apprentice Jobs Florida</a></br>
                        <a href="http://www.floridajobs.org/workforce-statistics/publications-and-reports/labor-market-information-reports/regional-demand-occupations-list">
                        Regional Demand Occupation Lists</a></br>
                        <a href="http://lcd.floridajobs.org/">
                        Florida Jobs</a></br>
                    </div>
                </div>
            </div>            
        </div>
    `);
    $('#card_col_2').html(`
        <h5>Additional Indicators </h5>
            <div class="card">
                <div class="card-header" id="headingSix">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="SF" data-toggle="collapse" data-target="#collapseSix"
                            aria-expanded="false" aria-controls="collapseSix">
                            Stimulus funds prioritizes digital skills ?
                        </button>
                    </h5>
                </div>
                <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                    <div class="card-body" id="SF-body" >
                      Florida Budget- $240 million of Federal Funds - Priority investments of the board include an $8.5 million allocation to local workforce development boards to help unemployed Floridians get back to work and gain new skills to better prepare them for in-demand and evolving employment opportunities due to current economic downturn. This investment will ensure these local partners who work directly with employers and Floridians in their communities have the resources to fortify technology systems, business services and career-building resources necessary to meet the increased demand.
                      </br><a href="https://careersourceflorida.com/pandemic-recovery-efforts-include-apprenticeships-and-rural-areas-opportunities/">
                      More Information</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingEleven">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="DS" data-toggle="collapse" data-target="#collapseEleven"
                            aria-expanded="false" aria-controls="collapseEleven">
                            Statewide Initiatives Promoting Digital Skills?
                        </button>
                    </h5>
                </div>
                <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
                    <div class="card-body" id="DS-body" >
                        The Get There Florida Initiative is in partnership with the state’s 28 Florida College System institutions and the state’s 48 technical colleges or centers. It accelerates students’ time to completion of an in-demand but high-value industry certification or postsecondary workforce credential. Programs include advanced manufacturing, transportation and logistics, healthcare, and information technology. Created recently by Gov. Desantis as an executive order.; In support of our work to help Floridians enter and advance in the workforce while strengthening the state business climate, CareerSource Florida offers funding opportunities through grant solicitations, requests for proposals (RFP), and invitations to negotiate (ITN). CareerSource Florida is focused on helping expand apprenticeship opportunities in six key industry sectors: advanced manufacturing, healthcare, information technology, hospitality, trade and logistics and construction.                    
                        </br>
                        <a href="ttps://gettherefl.com/">
                        Get There Florida</a></br>
                        <a href="ttps://careersourceflorida.com/about-us/contracting-opportunities/">
                        Career Source Florida</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTen">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="DS" data-toggle="collapse" data-target="#collapseTen"
                            aria-expanded="false" aria-controls="collapseTen">
                            State Workforce Funding for digital skills?
                        </button>
                    </h5>
                </div>
                <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
                    <div class="card-body" id="DS-body" >
                    <ul>
                        <li>Governor 2020-21 recommendation: $319, 928, 442 for Workforce development under the Department of Economic Opportunity and $520,487,932 for workforce education under the Department of Education.</li>
                        <li>Florida Budget - $240 million of Federal Funds - Priority investments of the board include an $8.5 million allocation to local workforce development boards to help unemployed Floridians get back to work and gain new skills to better prepare them for in-demand and evolving employment opportunities due to current economic downturn. This investment will ensure these local partners who work directly with employers and Floridians in their communities have the resources to fortify technology systems, business services and career-building resources necessary to meet the increased demand.</li>

                    </ul>
                    <a href="http://www.bolderbrighterbetterfuture.com/web%20forms/Budget/BudgetAgency.aspx">
                    Florida Budget</a>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingNine">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="DS" data-toggle="collapse" data-target="#collapseNine"
                            aria-expanded="false" aria-controls="collapseNine">
                            Digital skilling mentioned in 2020 State of State?
                        </button>
                    </h5>
                </div>
                <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                    <div class="card-body" id="DS-body" >
                     “Low taxes and a healthy business climate are important in attracting investment in Florida, but so too is our ability to produce top-flight talent – through our colleges and universities, through workforce education opportunities and through strong K-12 schools.”
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingEight">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="PF" data-toggle="collapse" data-target="#collapseEight"
                            aria-expanded="false" aria-controls="collapseEight">
                            Plan for addressing digital divide (broadband) ?
                        </button>
                    </h5>
                </div>
                <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                    <div class="card-body" id="PF-body" >
                      Office of Broadband works with local and state government agencies, community organizations and private businesses to increase the availability and effectiveness of broadband internet throughout the state, specifically in small and rural communities. It was established within the Division of Community Development on July 1, 2020. The Florida Department of Economic Opportunity is the lead agency to facilitate the expansion of broadband internet services in the state. 
                      </br><a href="">
                      Office of Broadband</a>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="headingSeven">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="EO" data-toggle="collapse" data-target="#collapseSeven"
                            aria-expanded="false" aria-controls="collapseSeven">
                            Existing online skilling tool offered and promoted by State ?
                        </button>
                    </h5>
                </div>
                <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                    <div class="card-body" id="EO-body" >
                        Florida Ready to Work is an innovative, workforce education and economic development program. The centerpiece of the program is the Florida Ready to Work Credential and the Florida Soft Skills Credential – two valuable credentials signed by the Governor – that certifies that a Florida learner / jobseeker has the academic and employability job skills necessary to succeed in today’s rapidly changing and competitive economy.
                        </br><a href="https://www.floridareadytowork.com/">
                        Florida Ready to Work</a>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                        <button class="btn btn-link collapsed" id="HM" data-toggle="collapse" data-target="#collapseFive"
                            aria-expanded="false" aria-controls="collapseFive">
                            Has Microsoft partnership?
                        </button>
                    </h5>
                </div>
                <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                    </div>
                </div>
            </div>
            
            
    `);
    $('.nav-link').click(function () {
        if ($(this).text() == 'US') {
            $(".cover-heading").html(`USA`)
            $('#map_col').attr('class', 'col-6');
            $('#card_col_1').attr('class', 'col-3');
            $('#card_col_2').attr('class', 'col-3');
            $('#card_col_1').attr('style', 'display:show');
            $('#card_col_1').html(`
                <h5>State WIOA Five-Year Workforce plan (all states submitted in 2020)</h5>
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" id="AN" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                    aria-controls="collapseOne">
                                    Addresses need for digital skills?
                                </button>
                            </h5>
                        </div>
                
                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body" id="AN-body">
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="ID" data-toggle="collapse" data-target="#collapseTwo"
                                    aria-expanded="false" aria-controls="collapseTwo">
                                    Identifies digital skill needs in labor market?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body" id="ID-body" >
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="HT" data-toggle="collapse" data-target="#collapseThree"
                                    aria-expanded="false" aria-controls="collapseThree">
                                    Has technology-related apprenticeship program planned or in place?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body" id="HT-body">
                            
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFour">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="SD" data-toggle="collapse" data-target="#collapseFour"
                                    aria-expanded="false" aria-controls="collapseFour">
                                    Spotlights digital skills training for specific populations?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                            <div class="card-body">
                            <ul>
                                    <li id="VP">Veterans</li>
                                    <div id="VP-body"></div>

                                    <li id="PP">Prison Population</li>
                                    <div id="PP-body"></div>

                                    <li id="DA">Differently-Abled Persons</li>
                                    <div id="DA-body"></div>

                                    <li id="SDO">Other</li>
                                    <div id="SDO-body"></div>

                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            `);
            $('#card_col_2').html(`
                <h5>Additional Indicators </h5>
                    <div class="card">
                        <div class="card-header" id="headingSix">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="SF" data-toggle="collapse" data-target="#collapseSix"
                                    aria-expanded="false" aria-controls="collapseSix">
                                    Stimulus funds prioritizes digital skills ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                            <div class="card-body" id="SF-body" >
                            
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingSeven">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="EO" data-toggle="collapse" data-target="#collapseSeven"
                                    aria-expanded="false" aria-controls="collapseSeven">
                                    Existing online skilling tool offered and promoted by State ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                            <div class="card-body" id="EO-body" >
                            
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingEight">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="PF" data-toggle="collapse" data-target="#collapseEight"
                                    aria-expanded="false" aria-controls="collapseEight">
                                    Plan for addressing digital divide (broadband) ?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                            <div class="card-body" id="PF-body" >
                            
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingNine">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="DS" data-toggle="collapse" data-target="#collapseNine"
                                    aria-expanded="false" aria-controls="collapseNine">
                                    Digital skilling mentioned in State of State?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
                            <div class="card-body" id="DS-body" >
                            
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingFive">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" id="HM" data-toggle="collapse" data-target="#collapseFive"
                                    aria-expanded="false" aria-controls="collapseFive">
                                    Has Microsoft partnership?
                                </button>
                            </h5>
                        </div>
                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                            <div class="card-body">
                                <li id="IA">IT Academy</li>
                                    <div id="IA-body"></div>

                                    <li id="SG">Skillful Grant</li>
                                    <div id="SG-body"></div>

                                    <li id="AP">ApprenTI</li>
                                    <div id="AP-body"></div>

                                    <li id="HMO">Other</li>
                                    <div id="HMO-body"></div>
                            </div>
                        </div>
                    </div>
            `)
        } else {
            $('#map_col').attr('class', 'col-9');
            // $('#card_col_2').attr('class', 'col-6');
            $('.cover-heading').html(`World`);
            $('#card_col_1').attr('style', 'display:none');
            $('#card_col_2').html(`
                <h5>International Indicators</h5>
                <div class="card">
                    <div class="card-header" id="headingSix">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix"
                                aria-expanded="false" aria-controls="collapseSix">
                                Has in place a robust workforce training system?
                            </button>
                        </h5>
                    </div>
                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingSeven">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven"
                                aria-expanded="false" aria-controls="collapseSeven">
                                Has plans for restructuring current workforce training system?
                            </button>
                        </h5>
                    </div>
                    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header" id="headingEight">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight"
                                aria-expanded="false" aria-controls="collapseEight">
                                What percent of GDP spent on workforce training system?
                            </button>
                        </h5>
                    </div>
                    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
                        <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                            moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                            shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                            proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div>
            `);
        }
    });
})(jQuery);