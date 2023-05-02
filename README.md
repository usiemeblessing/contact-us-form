<!-- @format -->

# Contact Us Form

-   Built using React

A Contact Us form that allows users to send a message to make inquiries. The
form have the following fields:

-   Name (required)
-   Email (required and validated)
-   Subject (Optional)
-   Message (required)

## Features

-   The name, email, and message fields are required. If fields are empty, error
    messages are displayed under each field
-   The email field is validated as an email. If the email entered is invalid,
    an appropriate error message is displayed under the email field.
-   On successful submission, a message at the top of the form indicating that
    the submission was successful is displayed.
-   On successful submission, the form fields reset.
-   If there is an error during the submission, an error message at the top of the
    form informing the user that the submission wasn’t successful is displayed.

### Packages used

-   React hook form : A library that helps you validate forms in React
-   yup: Schema builder for runtime value parsing and validation
-   UseForm: a custom hook for managing forms with ease
-   useState: React Hook that allows adding state to a functional component
