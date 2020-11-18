// import { jsPDF } from "/node_modules/jspdf/dist/jspdf.umd.min.js";


(function(){

    $(document.body).on("click", '#pdf', function(){

        var dd = {
            content: [],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 2]
                },
                subheader: {
                    fontSize: 15,
                    bold: true
                },
                quote: {
                    italics: true
                },
                small: {
                    fontSize: 8
                }
            }
        }

        var state = $('.cover-heading').html();
        dd.content.push({
            text: `${state} Factsheet`,
            style: 'header'
        });
    

        $.each($('.card'), function(i, card){
            var category = $(card).find('.card-header').text();
            var content = $(card).find('.card-body').text();
            dd.content.push({
                text: `${category}`,
                style: 'header'
            })
            dd.content.push({
                text: `${content}`,
                style: 'subheader'
            })
        });

        // var docDefinition = {
        //     content: [
        //         {
        //             text: `${state} Factsheet`,
        //             style: 'header'
        //         },
        //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam.\n\n',
        //         {
        //             text: 'Subheader 1 - using subheader style',
        //             style: 'subheader'
        //         },
        //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        //         {
        //             text: 'Subheader 2 - using subheader style',
        //             style: 'subheader'
        //         },
        //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.',
        //         'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Confectum ponit legam, perferendis nomine miserum, animi. Moveat nesciunt triari naturam posset, eveniunt specie deorsus efficiat sermone instituendarum fuisse veniat, eademque mutat debeo. Delectet plerique protervi diogenem dixerit logikh levius probabo adipiscuntur afficitur, factis magistra inprobitatem aliquo andriam obiecta, religionis, imitarentur studiis quam, clamat intereant vulgo admonitionem operis iudex stabilitas vacillare scriptum nixam, reperiri inveniri maestitiam istius eaque dissentias idcirco gravis, refert suscipiet recte sapiens oportet ipsam terentianus, perpauca sedatio aliena video.\n\n',
        //         {
        //             text: 'It is possible to apply multiple styles, by passing an array. This paragraph uses two styles: quote and small. When multiple styles are provided, they are evaluated in the specified order which is important in case they define the same properties',
        //             style: ['quote', 'small']
        //         }
        //     ],
        //     styles: {
        //         header: {
        //             fontSize: 18,
        //             bold: true,
        //             margin: [0, 2]
        //         },
        //         subheader: {
        //             fontSize: 15,
        //             bold: true
        //         },
        //         quote: {
        //             italics: true
        //         },
        //         small: {
        //             fontSize: 8
        //         }
        //     }

        // }
        pdfMake.createPdf(dd).download();

        // const doc = new jsPDF("p", "mm", "a4");
        // var state = $('.cover-heading').html();

        // head 
        // doc.setFont('helvetica', 'bold');
        // doc.setFontSize(30);
        // doc.text(`
        //     Factsheet for ${state}
        // `, 10, 10);

        // var yPos= 10;
        // var xPos = 10;
        // var lMargin = 15; //left margin in mm
        // var rMargin = 15; //right margin in mm
        // var pdfInMM = 210;  // width of A4 in mm
        // var text = '';

        // doc.setFont('helvetica', 'normal');
        // doc.setFontSize(12);
        
        // $.each($('.card-body'), function(i, card){

        //     text += $(card).text().trim();
        //     console.log(text)
            // doc.text(`
            //     ${$(card).text()}
            // `, 10, yPos);
        // });

        // var lineHeight = doc.getLineHeight(text) / doc.internal.scaleFactor
        // var splittedText = doc.splitTextToSize(text, (pdfInMM - lMargin - rMargin))
        // var lines = splittedText.length  // splitted text is a string array
        // var blockHeight = lines * lineHeight

        // doc.text(lMargin, yPos, text);

        // yPos += blockHeight
        // doc.text('----- This text follows the previous text block.', xPos, yPos);
        // yPos += lineHeight
        // doc.text('----- LineHeight=' + lineHeight + ' / blockHeight=' + blockHeight, xPos, yPos);
        // yPos += lineHeight
        // doc.text('----- doc.internal.scaleFactor = ' + doc.internal.scaleFactor, xPos, yPos);


        // doc.text("Hello world!", 10, 10);
        // doc.save(`${state}_factsheet.pdf`);
    })
    // Default export is a4 paper, portrait, using millimeters for units
    
})(jQuery);