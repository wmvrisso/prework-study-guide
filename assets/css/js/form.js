// TODO: Create a variable that selects the form element
const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;
  if (!title || !content) {
    alert('Error: Missing information');
  } else {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push({ title, content });
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    redirectPage();
  }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
function init() {
  form.addEventListener('submit', handleFormSubmit);
}
const username = document.getElementById('username');
const title = document.getElementById('title');
const content = document.getElementById('content');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const userTitle = {
    student: user.value,
    grade: title.value,
    comment: content.value.trim(),
  };

  localStorage.setItem('userTitle', JSON.stringify(userTitle));
  renderMessage();
});

function renderMessage() {
  const lastGrade = JSON.parse(localStorage.getItem('userTitle'));
  if (lastGrade !== null) {
    document.querySelector('.message').textContent =
      lastGrade.student + ` received a/an ${lastGrade.grade}`;
  }
}
