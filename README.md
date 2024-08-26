<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/nelg62/Remake-Miniproject1-with-react">
    <!-- <img src="images/logo.png" alt="Logo" width="80" height="80"> -->
  </a>

<h3 align="center">Mini Project 1 Character Creator App</h3>

  <p align="center">
    This is the first project I created as part of my course at the Institute of Data (IOD). After learning the fundamentals of web development, we were tasked with building a CRUD (Create, Read, Update, Delete) application to apply our new skills. I chose to develop a Character Creator app because I wanted to create something fun and interactive, allowing users to craft and share unique characters.

<br />
<a href="https://github.com/nelg62/Remake-Miniproject1-with-react"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://66b3ecc9cf2c55362d4faea2--endearing-gnome-6ad42e.netlify.app/">View Demo</a>
·
<a href="https://github.com/nelg62/Remake-Miniproject1-with-react/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
·
<a href="https://github.com/nelg62/Remake-Miniproject1-with-react/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>

  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<h4>Project Overview</h4>
This project began as a simple HTML, CSS, and JavaScript application but has since been refactored into a React-based application. It allows users to create, display, edit, and delete character profiles. The application features a user-friendly interface for managing character information, including first name, last name, image, and a brief description.

<h4>Key Components</h4>
<h6>AddCharacterForm Component (AddCharacterForm.jsx)</h6>
Purpose: Handles the form input where users can add new characters, capturing details such as the first and last name, an optional image, and a description.
Features:
Allows users to upload an image or defaults to a placeholder if no image is provided.
Includes form validation to ensure all fields are filled before submission.
Clears inputs upon submission and adds the new character to the list.
<h6>NewCharacter Component (NewCharacter.jsx)</h6>
Purpose: Manages the state of the character list and renders all characters, along with the form to add new ones.
Features:
Displays a form for creating a new character.
Renders a grid of character cards showcasing the added characters.
Provides functionality to delete or edit existing characters.
<h6>SingleCharacter Component (SingleCharacter.jsx)</h6>
Purpose: Represents an individual character card, displaying character information and providing options to delete or edit the character.
Features:
Toggles between viewing and editing a character's details.
Allows characters to be updated through the same form used for creating new characters.
User Workflow
Add a Character: Users fill out the form with the character's first name, last name, image, and description, then submit to add the character to the list.
Edit a Character: Users can edit an existing character's details by clicking the "Edit" button on a character card. The form appears pre-filled with the current details for modification.
Delete a Character: Users can remove a character from the list by clicking the "Remove" button on the character's card.
<h6>Technologies Used</h6>
<ul>
<li>React: For building the user interface and managing state.</li>
<li>JavaScript: For application logic and interactivity.</li>
<li>Tailwind CSS: For styling components and layout.</li>
</ul>

[![Product Name Screen Shot][product-screenshot]](https://66b3ecc9cf2c55362d4faea2--endearing-gnome-6ad42e.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![vitejs][vitejs.dev]][vitejs-url]
- [![javascript][javascript.com]][javascript-url]
- [![tailwindcss][tailwindcss.com]][tailwindcss-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/nelg62/Remake-Miniproject1-with-react.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Change directory if not already there

   ```sh
    cd MiniProject1React
   ```

4. Run project
   ```sh
   npm run dev
   ```
5. Browse to project
   ```sh
   http://localhost:5173/
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

in progress...

<!-- Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources. -->

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ X ] Recreated project in react
- [ ] Changed styling to Tailwind CSS to make the design more responsive on all platforms
- [ ] add more features and styling also backend and database to be added - [ ]

See the [open issues](https://github.com/nelg62/Remake-Miniproject1-with-react/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Top contributors:

<a href="https://github.com/nelg62/Remake-Miniproject1-with-react/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=nelg62/Remake-Miniproject1-with-react" alt="contrib.rocks image" />
</a>

<!-- LICENSE -->

<!-- ## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- CONTACT -->

## Contact

Glen Harding - glen.harding.nz@gmail.com

Project Link: [https://github.com/nelg62/Remake-Miniproject1-with-react](https://github.com/nelg62/Remake-Miniproject1-with-react)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- []()
- []()
- []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/nelg62/Remake-Miniproject1-with-react.svg?style=for-the-badge
[contributors-url]: https://github.com/nelg62/Remake-Miniproject1-with-react/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/nelg62/Remake-Miniproject1-with-react.svg?style=for-the-badge
[forks-url]: https://github.com/nelg62/Remake-Miniproject1-with-react/network/members
[stars-shield]: https://img.shields.io/github/stars/nelg62/Remake-Miniproject1-with-react.svg?style=for-the-badge
[stars-url]: https://github.com/nelg62/Remake-Miniproject1-with-react/stargazers
[issues-shield]: https://img.shields.io/github/issues/nelg62/Remake-Miniproject1-with-react.svg?style=for-the-badge
[issues-url]: https://github.com/nelg62/Remake-Miniproject1-with-react/issues
[license-shield]: https://img.shields.io/github/license/nelg62/Remake-Miniproject1-with-react.svg?style=for-the-badge
[license-url]: https://github.com/nelg62/Remake-Miniproject1-with-react/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/glen-harding-5a1317114
[product-screenshot]: MiniProject1React/public/MiniProject1mainpage.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com
[vitejs.dev]: https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white
[vitejs-url]: https://vitejs.dev/
[javascript-url]: https://www.javascript.com/
[javascript.com]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[tailwindcss-url]: https://tailwindcss.com/
[tailwindcss.com]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
