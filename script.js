
const validUser = {
  email: 'neovern07@gmail.com',
  password: 'qweqwe123',
};

const validAdmin = {
  email: 'oishispicy58@gmail.com',
  password: 'qweqwe123',
};

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');

  if (email === validUser.email && password === validUser.password) {
      errorMessage.textContent = '';
      window.location.href = 'user.html';  // Redirect to user dashboard
  } else if (email === validAdmin.email && password === validAdmin.password) {
      errorMessage.textContent = '';
      window.location.href = 'admin.html';  // Redirect to admin dashboard
  } else {
      errorMessage.textContent = 'Invalid email or password!';
  }
});
