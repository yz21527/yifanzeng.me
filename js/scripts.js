$(document).ready(function () {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar, #content').toggleClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
    
            function hideEmail(){
                $('#emailIcon').delay(3000).html('<i  class="fas fa-envelope fa-2x" aria-hidden="true"></i>');
                $('#emailIcon').css("color", "black");
            }
            
            $('#emailIcon').mouseenter(function(){
                $('#emailIcon').html('<i  class="fas fa-envelope fa-2x" aria-hidden="true"></i> <span>&nbsp&nbsp&nbspivan@yifanzeng.me</span>');
                $('#emailIcon').css({"color": "purple"});
                setTimeout(hideEmail,3000);
            });
});


