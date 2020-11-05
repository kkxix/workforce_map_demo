// import { jsPDF } from "/node_modules/jspdf/dist/jspdf.umd.min.js";


(function(){

    $(document.body).on("click", '#pdf', function(){
        var fonts = {
            Roboto: {
                normal: 'fonts/Roboto-Regular.ttf',
                bold: 'fonts/Roboto-Medium.ttf',
                italics: 'fonts/Roboto-Italic.ttf',
                bolditalics: 'fonts/Roboto-MediumItalic.ttf'
            }
        };

        var PdfPrinter = require('../src/printer');
        var printer = new PdfPrinter(fonts);
        var fs = require('fs');

        var docDefinition = {
            content: [
                'First paragraph',
                'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
            ]
        };

        var pdfDoc = printer.createPdfKitDocument(docDefinition);
        pdfDoc.pipe(fs.createWriteStream('pdfs/basics.pdf'));
        pdfDoc.end();




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