# Event-VitE Admin Dashboard

Event-VitE Admin Dashboard is a web application that allows administrators to manage events. Admins can create, update, and delete events through the user-friendly dashboard.

## Features

- Create new events with title, description, date, time, and venue.
- View a list of all events and select a specific event to view its details.
- Update event details such as title, description, date, time, and venue.
- Delete events from the dashboard.
- Responsive design for a seamless user experience on different devices.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: For handling client-side routing in the application.
- Tailwind CSS: A utility-first CSS framework for styling the application.
- PostgreSQL: A powerful open-source relational database management system.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory and install dependencies by running:

```
npm install
```

3. Create a PostgreSQL database for the application.
4. Rename the `.env.example` file to `.env` and fill in your PostgreSQL database credentials.

## Usage

1. Start the server by running:

```
npm run server
```

2. In a separate terminal, start the React development server:

```
npm start
```

3. Access the application in your web browser at `http://localhost:3000`.

## How to Use

1. **Login**: Upon accessing the application, you will be redirected to the login page. Enter your credentials to log in as an administrator.

2. **Dashboard**: After logging in, you will land on the Admin Dashboard. Here, you can see a list of events.

3. **Create Event**: To create a new event, click on the "Create Events" button. A modal will appear, allowing you to input the event details. Click "Create" to save the new event.

4. **View Event Details**: Click on any event in the list to view its details. Here, you can update the event information or delete the event using the provided options.

5. **Update Event**: To update an event's details, click the "Update" button on the event details page. Make the necessary changes and click "Save" to update the event.

6. **Delete Event**: To delete an event, click the "Delete" button on the event details page. Confirm the action, and the event will be permanently deleted.

7. **Logout**: To log out of the application, click the "LogOut" link in the header.

## Contributors

- [Kennedy Musau](https://github.com/Ken-Musau)

## License

This project was created by [Kennedy Musau](https://github.com/Ken-Musau)
