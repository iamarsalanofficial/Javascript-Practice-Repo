// GitHub API URL
const API_URL = "https://api.github.com/users/";

// DOM Elements
const searchBtn = document.getElementById("search-btn");
const usernameInput = document.getElementById("username");
const profileCard = document.getElementById("profile-card");
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const usernameLink = document.getElementById("username-link");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const locationEl = document.getElementById("location");
const blogEl = document.getElementById("blog");
const companyEl = document.getElementById("company");

// Fetch GitHub User
const fetchGitHubUser = async (username) => {
  try {
    const response = await fetch(API_URL + username);
    if (!response.ok) throw new Error("User not found");
    const data = await response.json();
    displayUser(data);
  } catch (error) {
    alert("Error: " + error.message);
    profileCard.style.display = "none";
  }
};

// Display User Info in UI
const displayUser = (user) => {
  avatar.src = user.avatar_url;
  name.textContent = user.name || "No Name Provided";
  usernameLink.href = user.html_url;
  usernameLink.textContent = "@" + user.login;
  bio.textContent = user.bio || "This user has no bio.";
  repos.textContent = user.public_repos;
  followers.textContent = user.followers;
  following.textContent = user.following;
  locationEl.textContent = user.location
    ? `📍 ${user.location}`
    : "📍 Not Available";
  blogEl.textContent = user.blog ? `🔗 ${user.blog}` : "🔗 Not Available";
  companyEl.textContent = user.company
    ? `🏢 ${user.company}`
    : "🏢 Not Available";

  profileCard.style.display = "flex";
};

// Event Listener
searchBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    fetchGitHubUser(username);
  } else {
    alert("Please enter a username");
  }
});

usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
