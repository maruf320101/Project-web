function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}

function openSignIn() {
  document.getElementById("signInModal").style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Sign In Function - Save user data to localStorage
function signUpUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Sign In successful! You can now login.");
    closeModal("signInModal");

    // clear input fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  } else {
    alert("Please fill in all fields.");
  }
}

// Login Function - Match with localStorage
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found. Please sign in first.");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    alert(`Welcome back, ${savedUser.name}!`);
    closeModal("loginModal");

    // clear input fields
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
  } else {
    alert("Invalid email or password.");
  }
}

// Close modal if clicked outside
window.onclick = function (event) {
  const loginModal = document.getElementById("loginModal");
  const signInModal = document.getElementById("signInModal");
  if (event.target == loginModal) loginModal.style.display = "none";
  if (event.target == signInModal) signInModal.style.display = "none";
};
