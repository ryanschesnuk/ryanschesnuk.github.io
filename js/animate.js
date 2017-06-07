const $portfolioButton = $("#portfolio-button");
const $root = $("html, body");

$portfolioButton.click(function(event) {
  event.preventDefault();

  let target = this.hash;
	let $target = $(target);

	    $root.stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing');
});

const $skills = $(".skills-list li");

$( document ).ready(function() {
if ($( window ).width() >= 869) {
  $skills.hide();

  let i = 0;
  let intervalSkills = setInterval(function() {
    if (i < $skills.length) {
        $skills.eq(i).show("slide", {direction: "right"}, 300);
        i++;
    } else {
      clearInterval(intevalSkills)
    }
  }, 100);
}
});
