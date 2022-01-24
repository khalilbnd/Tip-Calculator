# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![image](https://user-images.githubusercontent.com/64180671/150700819-6cdaecb0-cc68-470a-a496-9664bc831c40.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Click to get Solution](https://www.frontendmentor.io/solutions/tip-calculator-app-8J948LkeT)
- Live Site URL: [Click to preview the website](https://tip-calculator-8zma45sra-khalil227.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<div class="result">
    <p class="result-items">
      <span>Tip Amount</span>
      <br/>/person
    </p>
    <p class="result-items">$0.00</p>
      <p class="result-items">

      <span>Total</span>
      <br/>/person
    </p>
    <p class="result-items price">$0.00</p>
  <button class="button-reset" onclick="reset()">RESET</button>
</div>
```
```css
.result p{
    
    font-family: 'Space Mono', monospace;
    font-size: 0.7rem;
    font-weight: 400;
    background-color: hsl(183.2,100%,14.71%);
    margin: 25px;
    color: #fff;
}
```
```js
custom.addEventListener("click", ()=>{
    for(var i = 0 ; i < rbTip.length ; i++){
        rbTip[i].checked = false;
        tip = "";
        }
 });
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Website - [Khalil BND](https://github.com/khalil227)
- Frontend Mentor - [@khalil227](https://www.frontendmentor.io/profile/khalil227)
- Twitter - [@ElBeneddra](https://twitter.com/ElBeneddra)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
