/*
Template Name: Fonik - Responsive Bootstrap 4 Admin Dashboard
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Table responsive 
*/

$(function() {
    $('.table-responsive').responsiveTable({
        addDisplayAllBtn: 'btn btn-secondary'
    });
    $('.btn-toolbar [data-toggle=dropdown]').attr('data-bs-toggle', "dropdown");
});