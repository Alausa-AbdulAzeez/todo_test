import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/Home";
import "@testing-library/jest-dom";
import TaskCard from "../components/TaskCard";
import CategoryCard from "../components/CategoryCard";

// CHECKS IF HOME COMPONENT RENDERS CORRECTLY
test("Renders the Home component", () => {
  render(<Home />);
  expect(screen.getByTestId("taskList")).toBeInTheDocument();
});

// TESTS IF THE BUTTON TO ADD TASKS SHOW
test("Home page renders add button", () => {
  render(<Home />);

  const newTaskElement = screen.getByTestId("newTaskId");
  expect(newTaskElement).toBeInTheDocument();
});

// TESTS IF THE SEARCH INPUT SHOWS
test("Home page renders Search input", () => {
  render(<Home />);

  const searchElement = screen.getByTestId("searchId");
  expect(searchElement).toBeInTheDocument();
});

// TESTS IF CARD TITLE AND DECRIPTION RENDERS
test("TaskCard renders task title and description", () => {
  const task = {
    title: "Test Task",
    description: "Test Description",
    completed: false,
  };
  render(<TaskCard todo={task} />);
  const taskTitle = screen.getByText(task.title);
  const taskDescription = screen.getByText(task.description);
  expect(taskTitle).toBeInTheDocument();
  expect(taskDescription).toBeInTheDocument();
});

// CHECKS IF CATEGORY CARD DISPLAYS
const category = {
  id: 1,
  image: "imageURL",
  name: "Work",
};

test("Renders the CategoryCard component", () => {
  render(<CategoryCard category={category} />);
  expect(screen.getByText("Work")).toBeInTheDocument();
});

// TASK CARD SHOULD DISPLAY MARK AS UNDONE FOR COMPLETED TASKS
test('TaskCard displays "Mark as undone" for completed tasks', () => {
  const task = {
    title: "Test Task",
    description: "Test Description",
    completed: true,
  };
  render(<TaskCard todo={task} />);
  const toggleButton = screen.getByText("Mark as undone");
  expect(toggleButton).toBeInTheDocument();
});

// TASK CARD SHOULD DISPLAY DONE FOR UNCOMPLETED TASKS

test('TaskCard displays "Done" for uncompleted tasks', () => {
  const task = {
    title: "Test Task",
    description: "Test Description",
    completed: false,
  };
  render(<TaskCard todo={task} />);
  const toggleButton = screen.getByText("Done");
  expect(toggleButton).toBeInTheDocument();
});

// CHECKS IF TASK CARD COMPONENT RENDERS

test("Renders the TaskCard component", () => {
  const task = {
    id: 1,
    title: "Finish React Project",
    description:
      "Complete the frontend and backend integration for the React project.",
    category: "Work",
    dateCreated: "2023-10-15",
    completed: false,
  };
  render(<TaskCard todo={task} />);
  expect(screen.getByText("Finish React Project")).toBeInTheDocument();
});

// TESTS SEARCH FUNCTIONALITY
test("Testing input change and filtering", () => {
  render(<Home />);
  const searchInput = screen.getByTestId("searchId");

  fireEvent.change(searchInput, { target: { value: "Work" } });

  expect(screen.getByText("Work")).toBeInTheDocument();
});

// CHECKS IF DELETE AND EDIT OPTIONS ARE AVAILABLE
test('TaskCard displays "Edit" and "Delete" options', () => {
  const task = {
    title: "Test Task",
    description: "Test Description",
    completed: false,
  };

  render(<TaskCard todo={task} />);
  const editButton = screen.getByText("Edit");
  const deleteButton = screen.getByText("Delete");
  expect(editButton).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
});
