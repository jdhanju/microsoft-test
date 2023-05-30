# Microsoft Screening Problem


## How to run?
- Go inside the microsoft-test folder
- Run the command `npm start`

## How to run unit tests?
- Run the command `npm test`

## Where is my Problem 1 file?
- `microsoft-test/src/microsoft-p1.js`
- If you would like to test problem-1 separately I have set up a different folder where you can execute problem 1 with node.js
- Go to the `node` directory
- Run `node microsoft-p1-node` to run your test cases.
- Lines 31-37 in the file `microsoft-p1-node.js` execute my tests. You can go ahead and comment them out or replace them.

## How to run problems 2 and 3
- Open terminal
- Go to the directory `microsoft-test`
- Run the command `npm start`
- From here you should be able to view the project locally

### Work Flow
- Click on Choose File
- You will only be allowed to input a .json or .txt file
- Click on Fetch
- The uploaded file data will be parsed and displayed in the text box
- If the file contains invalid JSON then an error message will appear
- Scroll down to view the visual output
- The node that has a green box is the smallest subtree with all the deepest nodes
- Orange boxes are a nodes children
- Blue boxes represent a whole tree/subtree
- You can edit the text box, and see live changes to the visual output
- No live changes will occur if the JSON is invalid

## Problem 3 solution

### Assumptions I made
- Each node in the binary tree has an id property, and left and right properties representing
its left and right child nodes.
- The id property in each node is unique within the binary tree.
- The goal is to find the smallest subtree that contains all the deepest nodes. If multiple nodes whose depths are equal to the max tree depth, then the solution is the smallest subtree containing all those deepest nodes.

### Engineering Tradeoffs
- Recursive approach: The solution provided uses a recursive approach to traverse the tree and find the depth of each node. This approach is intuitive and easy to implement, but it may have limitations in handling very large trees, as it relies on the call stack.
- The time complexity of my solution is dependent on the size of the binary tree. It needs to traverse the entire tree. In the worst case scenario, where the binary tree is skewed, the time complexity would be O(n), where n is the number of nodes in the tree.
- Output Structure: The solution returns the smallest subtree that contains all the deepest nodes. It includes the complete subtree structure from the root down to the deepest nodes. However, if multiple subtrees satisfy the condition, the solution may return any one of those subtrees.

## Bonus

 ### What would I have done differently?
 - In my project I used Redux for state management. If I had the time I would have learned how to use the React hook useContext, and try to use taht for state management instead. It may have been better to use a built in React feature rather than importing a library.

 - I would have tried to not use recursion in this project. I used it in files like SmallestSubTree.js because it made the solution a lot easier. But the downside is scalability. If we have a very large binary tree then the call stack may overflow.

- I would have like to keep everything on a single page, and not make my application scrollable. I ended up making the output section larger because I wanted out output to be easy to read. If I had the extra time I would have spent more time trying to get everything to fit on a single page, but still look nice, and be very readable.



