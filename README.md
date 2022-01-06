## Flux pattern

### A simple example of the Flux architecture pattern.

Flux is a programming concept, where data enters an app and flows through it in one direction until it is rendered on the screen.

The elements of the pattern:

- **Actions** are sent to the dispatcher to trigger data flow;

- **Dispatcher** - all data is dispatched and sent to the stores;

- **Store** is the place where the app state and logic are held;

- **View** receive data from the store and re-render the app;
