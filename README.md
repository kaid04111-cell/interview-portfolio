# interview-portfolio
A customizable HTML/CSS/JS portfolio template for developers.

# 🚀 Multiplayer Interview Portfolio Template

Welcome to the **Multiplayer Interview Portfolio**! This project is a clean, responsive, and easily customizable website designed for developers to showcase their work. 

The goal of this repository is to provide a "Starter Kit" where anyone can change a few lines of code to have a professional website live in minutes.

---

## 📂 Root Directory Structure
All essential files are located in the **root (top-level) directory** for easy access:

* **index.html**: Contains the structure of the portfolio (your name, bio, and skills).
* **style.css**: Contains the theme settings and CSS Variables for easy "multiplayer" customization.
* **script.js**: Handles interactive logic, such as the theme switcher.

---

## 🛠️ How to Customize This Portfolio

### 1. Change the Identity
Open `index.html` and look for the following tags to update with your own info:
* `<h1 id="name-display">`: Change "Your Name Here" to your actual name.
* `<section class="card">`: Update the "About Me" and "Skills" text.

### 2. Change the Theme (Multiplayer Mode)
This project uses **CSS Variables**. You don't need to know complex CSS to change the colors! Open `style.css` and edit the `:root` section at the top:

```css
:root {
    --main-bg: #ffffff;      /* Change the page background */
    --header-color: #4A90E2; /* Change the header color */
    --text-color: #333333;   /* Change the font color */
}
