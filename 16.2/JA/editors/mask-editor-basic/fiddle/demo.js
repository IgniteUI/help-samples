$(function () {
    $("#serialNumber").igMaskEditor({
        inputMask: 'AAAA-AAAA-AAAA-AAAA',
        dataMode: "rawTextWithLiterals"
    });

    $("#zipCode").igMaskEditor({
        inputMask: '00000',
        dataMode: "allText"
    });

    $("#phone").igMaskEditor({
        inputMask: '(000) 000-000',
        dataMode: "rawText"
    });
});