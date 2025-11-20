# Alzheimer Date Picker – Bad UI Challenge

![Bad UI Alert](https://img.shields.io/badge/UI-BAD-red)

## Description

This project was created for the **r/BaduiBattles / Bad UI Challenge**.  
It’s a deliberately terrible, chaotic, and “Alzheimer-inspired” date picker.  

The longer you interact with it, the more the date **degrades progressively**, mimicking memory loss.  
Sometimes it even **switches months and days**, forgets values, or resets unpredictably.  
It’s perfect for anyone who loves **frustrating, glitchy, and absurd user interfaces**.

> Warning: Using this date picker may cause confusion, frustration, and occasional laughter.

---

## Features

- A date input that **slowly degenerates over time**  
- Progressive degradation controlled by “Alzheimer’s years and days”  
- Random switching of months and days for maximum chaos  
- Alerts and text feedback with humorous messages  
- Fully broken UX for challenge and entertainment

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Usage

1. Open `index.html` in your favorite browser.
2. Interact with the **Alzheimer Date Picker**.
3. Watch as the date slowly deteriorates and the picker “forgets” your input.
4. Click **End** to register your date (if it still exists) and see funny alerts.

---

## Example Code

```javascript
end.addEventListener("click", () => {
  if (confirm("Are you sure the date is: " + date.value.replace(/-/g, "/"))) {
    clearInterval(interval);
    alert("Your date has been successfully registered!");
    alert("Oops... I think I forgot your date. What was it again? " + apply_alz(date.value));
  }
});
