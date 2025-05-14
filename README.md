# Folder Structure App

This project is an interactive Angular application for visualizing and managing a folder/file tree structure. You can add, nest, and drag-and-drop folders and files, similar to a file explorer.

## Features

- Add folders and files at the root or as children of folders
- Expand/collapse folders
- Drag and drop nodes to move them within the tree or to the root
- Prevents circular references and invalid moves
- Simple, clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:

   ```sh
   npm install
   ```

### Running the Application

Start the development server:

```sh
npm start
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser.

### Running Unit Tests

Run the unit tests via [Karma](https://karma-runner.github.io):

```sh
npm test
```

### Building for Production

To build the project for production:

```sh
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

- `src/app/folder-structure/`  
  Contains the main folder structure component and its logic.
- `src/app/app.component.ts`  
  Root component that loads the folder structure UI.
- `src/assets/`  
  Static assets.

## Usage

- Click "+ Folder" or "+ File" to add items at the root.
- Use the "+" buttons next to folders to add children.
- Drag and drop nodes to move them within the tree or to the root drop zone.
- Click folder icons to expand/collapse.

## License

This project is licensed under the MIT License.

---

Generated with [Angular CLI](https://github.com/angular/angular-cli).
