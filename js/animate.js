const $portfolioButton = $("#portfolio-button");
const $root = $("html, body");

const $skills = $(".skills-list li");

$( document ).ready(function() {
  // Auto-scroll to Portfolio
$portfolioButton.click(function(event) {
  event.preventDefault();

  let target = this.hash;
	let $target = $(target);

	    $root.stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing');
});

// Skills list animation
if ($( window ).width() >= 869) {
  let i = 0;
  let intervalSkills = setInterval(function() {
    if (i < $skills.length) {
        $skills.eq(i).show("slide", {direction: "right"}, 300);
        i++;
    } else {
      clearInterval(intervalSkills)
    }
  }, 100);
}

$( window ).resize(function() {
  if ($( window ).width() >= 869) {
    $skills.css("display", "block");
  }

  if ($( window ).width() < 869 ) {
    $skills.css("display", "inline-block")
  }

})
});
