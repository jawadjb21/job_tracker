## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById fetches the element with that specific id and gets us the html block containing it.
- getElementsByClassName returns an HTML collection of all the HTML elements containing the given class.
- querySelector returns a NodeList matching the first node with the given CSS selector argument.
- querySelectorAll returns a NodeList of all the nodes matching with the given CSS Selector argument.

### 2. How do you create and insert a new element into the DOM?
- We need to create an element at first using document.createElement(element), then fill it with content using .innerHTML. Finally, we need to append it to its desired parent Element using .appendChild().

### 3. What is Event Bubbling? And how does it work?
- When an event takes place, the browser searches for the element where the event took place. That specific element is the "target", and this process of traversing the DOM to find it is called "Capture Phase". Once, it's "captured", browser starts traversing back to the root using the same path used when "capturing". This is "Event Bubbling".

### 4. What is Event Delegation in JavaScript? Why is it useful?
- "Event Delegation" is setting an event listener on the parent element or even higher element of the target element, so that when event takes place on the target, we can use functionality on the whole parent or higher element, cause it has access to every element. If we set listener on just the target, and we want to implement functionality on elements outside the target's scope, it'll be more complex to acces them from the target. Thus, we set listeners to parent bodies which contain eveything.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() stops the browser from executing the default functionality associated with an element/event. For example stopping a form from submitting which is its default behaviour. On the other hand, stopPropogation() stops the process of "Event Bubbling", so that browser doesnt execute functionalities associated with the target's parent element or higher.
---


**Technology Stack:**
- HTML
- CSS (Vanilla/Tailwind/DaisyUI)
- JavaScript (Vanilla)


--- 