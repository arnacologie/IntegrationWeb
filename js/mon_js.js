document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
$('#container_toggle').hide();
var i = false;
$('#hamburger_container').click(function(){
        $(this).next().slideToggle();
        if(i==false){
            document.getElementById('hamburger_img').src='img/cancel.png'
            document.getElementById('mainNav').style.height = "360px";
            document.getElementById('body').style.height = "2900px";
        }
        else{
            document.getElementById('hamburger_img').src='img/hamburger_icon.png'
            document.getElementById('mainNav').style.height = "69px";
            document.getElementById('body').style.height = "2500px";
        }
        i = !i;
});
