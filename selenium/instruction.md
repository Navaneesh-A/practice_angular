npm install selenium-webdriver

Create a file named test.js.

Paste the following automation script. It opens your local hospital site, types a patient name, and clicks the add button:


Start your backend server first (node server.js), then run the test script in a new terminal tab: node test.js. Chrome will open by itself, type the text like a ghost, and close.

AI Prompt to copy-paste (if internet is available):

"Write a basic Node.js Selenium WebDriver script. It needs to navigate to http://localhost:3000, find three inputs with the IDs 'name', 'age', and 'dept', fill them with dummy data, and click a button with the ID 'save'. Keep it extremely short."