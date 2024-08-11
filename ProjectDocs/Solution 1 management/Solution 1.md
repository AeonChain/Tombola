1. Create a responsive layout using modern UI frameworks or libraries.  
2. Using the attached JSON file implement components to display: 
	- List of available coffee beans. 
	- Detailed view of a selected coffee bean. 
	- "Bean of the Day" feature which is interactable for more information
3. Create an order form for customers to purchase coffee beans. 
4. Implement a search feature to filter coffee beans by the available data.   
## 1
Going to use Tailwind for this, i think declarative and composition based css frameworks are easier to iterate on and will work well considering i'm working solo on this project

## 2
Emailed a few days ago about the lack of a json file, still haven't heard back, still can make a guess at what the data looks like and i can make a start, the following components need to be created:
- List
- Card component
- Bean of the day (feel like a hero style banner would be best)
- a form
- search bar
Concerned, without knowing if the beans have images this may impact design

## 3
React hook form is a relatively easy package to use with support for validation and I'm familiar with it

## 4.
For something lightweight will make this case insensitive and make it in memory, in future if I decide to do solution 2 then i'll perhaps allow solution 2 to handle the searches with caching.
