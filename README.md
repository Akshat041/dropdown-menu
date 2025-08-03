# 🔽 dropdown-menu-akshat041

A lightweight and reusable JavaScript utility for adding multiple dropdown menus to your webpage using vanilla JavaScript. Designed for clarity and minimal setup.

---

## 🚀 Installation

```bash
npm install dropdown-menu-akshat041
```

## HTML Structure

Add the following markup for each dropdown menu you want to use:

```bash
<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <ul class="dropdown-menu hidden">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
```

### Important:

- Each dropdown must include the dropdown-toggle button and a dropdown-menu **ul** tag.

- The **ul** should also have a hidden class (defined in CSS) to hide it by default.

## Required CSS

- Make sure you include the following CSS class in your project:

```bash
.hidden {
  display: none;
}
```

This class ensures the menu stays hidden until toggled.

If you're using a custom CSS file (e.g., style.css), place this rule inside it.

## JavaScript Usage

In your main JS file (e.g., main.js or test.js):

```bash
import setupDropdowns from "dropdown-menu-akshat041";
import "./style.css"; // Make sure this includes the .hidden class

setupDropdowns(); // Enables dropdown functionality
```

## Webpack Setup

Ensure your Webpack is configured to support CSS:

Install loaders:

```bash
npm install --save-dev style-loader css-loader
```

### In your webpack.config.js:

```bash
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
  ],
},
```

## Testing the Dropdown

Click on the Menu button to toggle the dropdown visibility.

You can have multiple dropdowns on the page — the package handles each one independently.

Add custom styles as needed for appearance.

## Common Mistakes

- Forgetting to add the .hidden class to the **ul**.

- Not importing your CSS file that contains .hidden.

- Not calling setupDropdowns() in your JS file.

## Example Preview

```bash
<!-- Sample Dropdown -->
<div class="dropdown">
  <button class="dropdown-toggle">Menu</button>
  <ul class="dropdown-menu hidden">
    <li>Dashboard</li>
    <li>Profile</li>
    <li>Logout</li>
  </ul>
</div>
```
