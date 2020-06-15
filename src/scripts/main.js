(function() {
  sortGigs();
})();

function sortGigs() {
  const gigs = Array.prototype.slice.call(document.querySelectorAll(".js-gig"));
  const now = new Date();
  const nowStr = [
    now.getFullYear(),
    (now.getMonth() + 1).toString().padStart(2, "0"),
    now.getDate().toString().padStart(2, "0")
  ].join(".");
  // Get upcoming gigs
  const upcomingGigs = gigs.filter(function(gig) {
    const date = gig.querySelector(".js-gig-date").innerHTML;
    const components = date.split(".");
    components.reverse();
    const gigDateStr = components.join(".");
    // Add CSS class to past gigs
    if (gigDateStr < nowStr) {
      gig.classList.add("gig--past");
    }
    return gigDateStr > nowStr;
  });
  // Add upcoming gigs to upcoming list
  const upcomingGigsList = document.getElementById('upcoming-gigs');
  if (upcomingGigs.length) {
    upcomingGigs.forEach(function(gig) {
      upcomingGigsList.prepend(gig);
    });
  } else {
    upcomingGigsList.parentElement.style.display = 'none';
  }
}
