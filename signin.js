document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin-form');
  
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Signed in successfully!');
      signinForm.reset();
    });
  });
  