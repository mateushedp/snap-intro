var featuresLink = document.querySelector('#features-link');
var companyLink = document.querySelector('#company-link');

var arrowUpPath = 'images/icon-arrow-up.svg';
var arrowDownPath = 'images/icon-arrow-down.svg';

featuresLink.addEventListener('mouseenter', () => {
  var arrowIcon = document.querySelector('#features-link #arrow-icon');
  arrowIcon.src = arrowUpPath;
});

featuresLink.addEventListener('mouseleave', () => {
  var arrowIcon = document.querySelector('#features-link #arrow-icon');
  arrowIcon.src = arrowDownPath;
});

companyLink.addEventListener('mouseenter', () => {
  var arrowIcon = document.querySelector('#company-link #arrow-icon');
  arrowIcon.src = arrowUpPath;
});

companyLink.addEventListener('mouseleave', () => {
  var arrowIcon = document.querySelector('#company-link #arrow-icon');
  arrowIcon.src = arrowDownPath;
});
