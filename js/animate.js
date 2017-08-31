const $portfolioButton = $("#portfolio-button");
const $root = $("html, body");

const $headerImg = $(".header-img");

// Get skills list items and hide immediately
const $skills = $(".skills-list li");
$skills.hide();

// Create new <ul> to hold skills, override display property
const $skillsList = $("<ul class='skills-list'></ul>");
$skillsList.css("display", "inline-block");

$skillsList.append($skills);
$headerImg.append($skillsList);


$( document ).ready(function() {
$portfolioButton.click(function(event) {
  event.preventDefault();

  let target = this.hash;
	let $target = $(target);

	    $root.stop().animate({
	        'scrollTop': $target.offset().top
	    }, 700, 'swing');
});

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
});
