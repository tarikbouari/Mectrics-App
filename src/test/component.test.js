import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/StockList';
import Nav from '../components/Nav';
import store from '../redux/configureStore';

test('renders Home component', () => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );
  const screenText = screen.getByText(/Welcome To CryptoCoin/i);
  expect(screenText).toBeInTheDocument();
});

test('test nav', () => {
  render(
    <Provider store={store}>
      <Router>
        <Nav />
      </Router>
    </Provider>,
  );
  const linkElement = screen.getByText(/CryptoCoin/i);
  expect(linkElement).toBeInTheDocument();
});
