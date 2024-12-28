# Miam_Miam Application Instructions
<instructions>
  I want to create a flask application that will use Google's LLM model `gemini-2.0-flash-exp`
  and create amazing recipes for people who don't know what to cook with what they have left in the fridge.
  The application would have a form where user can enter the ingredient that are available.
  I have added in this directory the `.env` file having the `GEMINI_API_KEY` environment variable that you can use to make the api call
  for the application. Use `python-dotenv` in your code to have it available for use.
  Create also a requirements.txt and decide what need to be installed and install it to set the application environment.
  We need the application to use SQLite in order to store the user credentials, the user requests and the answers from the Gemini LLMS.
  Therefore the Flask app will have html `jinja` templates and static `js` file and `css` file.
  Make sure that the structure of the application is following best practices.
  I will add some more information to this file for you to adjust the code and the user experience who want a top notch webui, therefore,
  work on creating an amazing web design.
</instructions>
 
<user_journey>
  The user will go to the flask route that will present him a login page.
  If user is not registered, it will have a link suggest to user that he can register.
  The registration page will require user to enter email and password, and the form will validate if the email has the right format.
  After registration, user is sent to login page to enter credentials.
  After logging in, user will be presented the one page application where
  user can enter a prompt in a form and just say what ingredients are left
  in the fridge or just provide a mix of ingredients.
  There will be a submit button with a fun call to action
  While the Gemini API is called, there will be a fun javascript animation to show to the user that the super recipe is being created
  Then the user will get the recipe shown on the right side of the form which is always present
  as user might want to make some other requests.
  The Flask app will use the `stream` way to show the message so that it has a typing effect on the screen which
  will help us to limit the rate of sent messages.
</user_journey>

<extras>
  There are some extras:
    - The background is animated and there is moving ingredients that move independenly but very slowly and moving away when user mouse is touching those floating ingredients
    - There is a footer with copyrigth mentioned `2025 Creditizens Miam Miam`
    - The header will have the logo of the brand `Miam Miam` on the top left and all necessary buttons on the top right like login, logout, update personal details, etc....
    - The webui after login in: the user should just see one page with header and footer and in the middle on the left the form for user to enter the ingredient and make the request. In the middle there will be the answer streamed and the waiting loader animation while message is being processed. If it is possible the image generated of the final look or how the dish should look like on the extrem right side.
    - Therefore the form user request, the gemini llm answer streamed and the image generated should all be centered and occupying the area between the header and the footer and the entire width space.
    - The generation is double, user request is sent to get a response form gemini llm and the response of gemini llm is sent again to get an image generated.
</extras>

<prompts>
  There will be a backend prompt that will wrap user message submitted via the form before sending to gemini llm in order to get the llm only provide a recipe as answer and nothing else even if user in its request is trying to jailbreak or ask for something else like conversational topic that are not related to ingredients and recipes for urban worker survival.
  There will be another prompt that will get the answer received from gemini llm from user initial request and ask to have an image generated from the recipe provided by the gemini answer and make sure it is telling that the image should look amazing and wanting to eat the image as it looks sooo goooood!. 
</prompts>
