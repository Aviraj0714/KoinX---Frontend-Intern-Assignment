﻿# Koinx

Koinx is a cryptocurrency dashboard that provides real-time data and charts for various cryptocurrencies. The application fetches data from the Coingecko API and displays it in an easy-to-understand format.

## Features

- Real-time cryptocurrency prices
- Dynamic routing for different cryptocurrencies
- Price charts using TradingView
- Team member profiles

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Aviraj0714/koinx.git
    ```

2. Navigate to the project directory:
    ```sh
    cd koinx
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. To view data for a specific cryptocurrency, navigate to `http://localhost:3000/{coinId}`, where `{coinId}` is the Coingecko ID of the coin (e.g., `bitcoin`, `ethereum`).

## Components

- **Header**: The navigation bar.
- **Home**: The main page that displays cryptocurrency data.
- **Overview**: Displays detailed information and charts for a specific cryptocurrency.
- **Team**: Displays profiles of team members.

## API

The application uses the Coingecko API to fetch cryptocurrency data. The relevant endpoints are:

- `/coins/{id}`: Fetches detailed information about a specific coin.
- `/simple/price`: Fetches the current price of a specific coin.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or suggestions, please open an issue or contact the project maintainer.
