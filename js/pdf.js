// import { jsPDF } from "/node_modules/jspdf/dist/jspdf.umd.min.js";


(function(){

    $(document.body).on("click", '#pdf', function(){
        const doc = new jsPDF();
        var state = $('.cover-heading').html();

        // head 
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(30);
        doc.text(`
            Factsheet for ${state}
        `, 10, 10);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(12);
        lastY= 10;
        $.each($('.card-body'), function(i, card){
            doc.text(`
                ${card.html()}
            `, 10, lastY);
        })

        // doc.text("Hello world!", 10, 10);
        doc.save(`${state}_factsheet.pdf`);
    })
    // Default export is a4 paper, portrait, using millimeters for units
    
})(jQuery);