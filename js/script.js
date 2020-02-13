window.onload = function() {
  var 
      articleDay = document.querySelector('.js-date-day'),
      articleMonth = document.querySelector('.js-date-month'),
      articleYear = document.querySelector('.js-date-year'),
      monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      date = new Date();

  articleDay.innerText = date.getDate();
  articleMonth.innerText = monthList[date.getMonth()];
  articleYear.innerText = date.getFullYear();
}
