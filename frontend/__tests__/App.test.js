// frontend/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App';
import '@testing-library/jest-dom/extend-expect';

test('renders Home component on default route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});

test('renders CreateBook component on /books/create route', () => {
  render(
    <MemoryRouter initialEntries={['/books/create']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Create Book/i)).toBeInTheDocument();
});

test('renders ShowBook component on /books/details/:id route', () => {
  render(
    <MemoryRouter initialEntries={['/books/details/1']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Show Book/i)).toBeInTheDocument();
});

test('renders EditBook component on /books/edit/:id route', () => {
  render(
    <MemoryRouter initialEntries={['/books/edit/1']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Edit Book/i)).toBeInTheDocument();
});

test('renders DeleteBook component on /books/delete/:id route', () => {
  render(
    <MemoryRouter initialEntries={['/books/delete/1']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Delete Book/i)).toBeInTheDocument();
});
