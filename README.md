Project 8 - automation test design

written in VScode

-Javascript-

This project is for testing the functions of the Urban.Routes app (A rideshare/vehicle service). The tests were automated to test a user experience in ordering a ride as well as various add on options.


1. Open your preferred terminal. If you’re on Windows, you’ll need to use Git Bash.
2. If you haven’t done so already, create a directory to store all of your projects. 
     cd ~               # make sure you're in your home directory
    mkdir projects     # create a folder called projects
    cd projects        # change directory into the new projects folder
3. Clone the repo. Make sure that you clone the correct repo. The username should be your own github username, not username. 
    git clone git@github.com:username/hm08-qa-us.git
4. Before starting to work on the project, run npm install from the console in your project folder.
5. TESTS(9 total):
    Setting the address
    Selecting Supportive plan
    Filling in the phone number
    Adding a credit card (Tip: the “link” button doesn’t become active until the card CVV field on the “Adding a card” modal id=”code” class=”card-input” loses focus. To change focus you can simulate the user pressing TAB or clicking somewhere else on the screen).
    Writing a message for the driver
    Ordering a Blanket and handkerchiefs (Tip: there are two selectors to be aware of here. One selector to click on and one to run expect on to verify that the state changed).
    Ordering 2 Ice creams
    The car search modal appears
    Waiting for the driver info to appear in the modal (optional) In addition to the steps above there is an optional step you can check. This one is a bit more tricky than the others but it’s good practice since you will likely encounter more difficult tasks in your career.
6. run tests with npm run wdio command in terminal