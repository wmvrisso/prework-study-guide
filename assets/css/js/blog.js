// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(tag, text, classes) {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = classes;
  main.appendChild(element);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
  buildElement('h3', 'No posts to display', 'text-center');
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts'));
  if (!blogPosts) {
    noPosts();
  } else {
    blogPosts.forEach((post) => {
      buildElement('h3', post.title, 'text-center');
      buildElement('p', post.content, 'text-center');
    });
  }
}
// TODO: Call the `renderBlogList` function
function init() {
  renderBlogList();
}
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
function redirectPage() {
  redirect();
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
