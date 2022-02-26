# Solar Revenue Calculator

![image](https://user-images.githubusercontent.com/86238419/155829556-a951b4bf-a097-4846-82c3-49e2366bd5e5.png)


## Purpose

To create a simple calculator that takes user input values as numbers and based on them generate revenue from solar generation.

## Learning Goals

- Practice writing simple JavaScript that interacts with DOM;
- Practice building simple input forms and setting up design and layout with CSS;

## Process

1. I started by identifying the variables that will be needed to calculate the revenue from solar generation. Generally, those are:
   - the size of the system (kW installed);
   - the yield (kWhs/kW installed) - this is essentially the energy throughput;
   - price the user will receive per kWh supplied into the grid.
2. Once I identified then I came up with the revenue calculation - a simple multiplication of the three valies.
3. I started coding by setting up a simple html form with the following elements:

```
<input id="systemSize" required type="number"  placeholder="System size">
<input id="systemYield" required type ="number"  placeholder="System yield">
<input id="ratePerKWh" required type="number"  placeholder="Rate per kWh">
<button id="btn">Calculate</button>
```

4. Once I had the input elements in place, I started writing the JavaScript code. I started by creating three variables and linking them to get the values input from each field.

5. I set up a button event listener (`button.addEventListener("click", calculate);`) to call a function upon a "click" event.

6. Then I set up the function as follows:

```
function calculate() {
    const systemSize = document.getElementById("systemSize").value;
    const systemYield = document.getElementById("systemYield").value;
    const ratePerKWh = document.getElementById("ratePerKWh").value;

    const result = systemSize*systemYield*ratePerKWh; // the calculation of the output number.

    return document.getElementById("showResult").innerHTML = '$'+ result.toLocaleString();
}

```

7. The function itself get the input values as numbers, multiplies them and and writes in the DOM the result. As the result is a number and it didn't format with decimal separation, I had to wrap it with the method `toLocaleString()`;.

8. The last step was to set up the CSS file. I used flexbox to set up the layout and played around with borders to come up with something more interesting.

## Lessons

1. Originally I declared the variables holding the input values outside of the function. For some reason, however, they didn't store the input values. I kept getting a result 0 when running the program. When I moved them inside the function, I started getting the desired results. I think it has to do with how the input values got stored into the variables. The click event on the button triggered the function, which in turn pulled the input values, multiplied them and returned the result. When outside the function, there was nothing to trigger the input values to be assigned to the variables.

2. I also wanted the click of the button to clear the input values. So, I had to set up a `forEach` loop to assign a `' '` once the button is clicked and the inputs have been assigned to the variables. I set this up as another function, which I had to link to a second event. Later, I decided that I wanted to have a clear link, so that the user can see the inputs and the calculation.

3. Codepen is a great place to get design inspirations. I used the design foundation of another user and modified it substantially.
