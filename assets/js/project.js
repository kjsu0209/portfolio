/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "COVID-19 diagnose Web App",
    cardImage: "https://user-images.githubusercontent.com/35682236/90317645-e4b54f80-df65-11ea-9ed0-3498f6373263.png",
    description:
      "An website for diagnosing contagious disease from symptoms written in natural language.",
    Previewlink: "",
    Githublink: "https://github.com/kjsu0209/COVID-19-Self-Diagnosis-Web",
  },
  {
    title: "Wenekids",
    cardImage: "https://user-images.githubusercontent.com/35682236/93216870-363e3d80-f7a3-11ea-8230-5676355b0cdf.png",
    description:
      "Kindergarten Safety Solution",
    Previewlink: "",
    Githublink: "https://github.com/kjsu0209/wenekids2019",
  },
  {
    title: "Emergency Monitoring System",
    cardImage: "https://user-images.githubusercontent.com/35682236/94449561-2d0f9080-01e7-11eb-9de3-fe8f74a01541.png",
    description:
      "Smart emergency monitoring system and smart wristband for a quick emergency call.",
    Previewlink: "",
    Githublink: "https://github.com/kjsu0209/TatataNodeAPI",
  },
  {
    title: "Authendance",
    cardImage: "https://github.com/higgs165/Authendance/raw/master/Screenshots/loginscreen.jpg",
    description:
      "Android student attendance tracker app with QR code implementation, built with Java in Android Studio.",
    Previewlink: "",
    Githublink: "https://github.com/higgs165/Authendance",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
