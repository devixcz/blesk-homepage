# Blesk.cz Alternative Homepage

This project serves as a demonstration of automatically generating banners without the need for manual adjustments. The application leverages an RSS feed from **Blesk.cz** as its data source, making it possible to dynamically display a variety of content sections.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Prerequisites](#prerequisites)
3. [Local Setup](#local-setup)
4. [Supported NPM Commands](#supported-npm-commands)
5. [Application Structure](#application-structure)
6. [Component Hierarchy](#component-hierarchy)
7. [Contexts and Filtering Functions](#contexts-and-filtering-functions)
8. [Link to Storybook](#link-to-storybook)
9. [AWS Amplify Preview](#aws-amplify-preview)
10. [Production Deployment](#production-deployment)
11. [AWS CLI and Profile Configuration](#aws-cli-and-profile-configuration)

---

### Project Overview

**Blesk.cz Alternative Homepage** is built with [Next.js](https://nextjs.org) and serves as a showcase for automatically generated banners from external data sources. By utilizing the RSS feed from **Blesk.cz**, the application displays various dynamically generated sections, each populated with articles from the feed. This approach allows for minimal manual effort in managing and updating banner content.

### Prerequisites

To run the project locally, make sure the following tools are installed and configured:

- **Node.js**: Version 16.x or higher is recommended.
  - [Install Node.js](https://nodejs.org/) or manage multiple versions with **NVM**.
- **NVM (Node Version Manager)**: Recommended for managing Node versions.
  - Install with `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`.
  - [NVM Documentation](https://github.com/nvm-sh/nvm)
- **AWS CLI** (optional but recommended for deployment):
  - [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
- **Git**: Version control system.
  - [Download Git](https://git-scm.com/)

### Local Setup

To get started locally, it’s recommended to use [Node Version Manager (NVM)](https://github.com/nvm-sh/nvm) for managing Node.js versions.

1. **Install NVM** (if not already installed):
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    ```
   Restart your terminal or run `source ~/.nvm/nvm.sh` to activate.

2. **Set the correct Node.js version**:
    - Check the required Node.js version in `.nvmrc`.
    - Install and use the specified version:
      ```bash
      nvm install
      nvm use
      ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

### Supported NPM Commands

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm start`**: Runs the production build.
- **`npm run lint`**: Runs ESLint for code quality checks.
- **`npm run storybook`**: Starts Storybook for component development and testing.
- **`npm run build-storybook`**: Builds a static Storybook site ready for deployment.

### Application Structure

The application is structured as follows:

```
.
├── app/
│   ├── components/            # Application components
│   │   ├── Banner/            # Banner component and variants
│   │   ├── BannerPosition/    # Banner position display logic
│   │   ├── BannerGrid/        # Grid layout for multiple banners
│   │   ├── PageSection/       # Page sections of the application
│   │   └── ...
│   ├── contexts/              # Contexts for state and data management (Articles, PageSection)
│   ├── pages/                 # Application pages (Next.js routing)
│   ├── public/                # Static files
│   └── theme.js               # MUI theme configuration
│
├── .storybook/                # Storybook configuration
├── amplify.yml                # AWS Amplify deployment configuration
├── next.config.js             # Next.js configuration
└── README.md
```

### Component Hierarchy

Below is an overview of the primary components:

- **`PageSection`** - The primary building block for displaying content sections.
  - **`Heading`** - Displays section title and optional subcategories.
  - **`BannerGrid`** - Arranges content in a grid layout.
    - **`BannerStack`** - Renders a group of banners.
      - **`BannerPosition`** - Renders individual banners with logic for adaptive images and variants.

### Contexts and Filtering Functions

#### Contexts

- **`ArticlesContext`**: This context manages the application's list of articles by fetching them from an RSS feed. It provides three core values:
  - **`articles`**: A list of fetched articles.
  - **`isLoading`**: A boolean indicating the loading state.
  - **`error`**: Error message if articles fail to load.
  
  `ArticlesContext` can either load articles from an API endpoint or use an initial set of articles passed as props. This flexibility is especially useful for mocking data in testing or Storybook environments.

- **`PageSectionContext`**: Built on top of `ArticlesContext`, `PageSectionContext` offers additional functionality for filtering articles. By applying a filter function, you can customize the list of articles available to nested components based on specific criteria.

#### Filtering Functions

Filtering functions are essential for defining the content each section displays. You can pass a custom filter function to `PageSectionContext`, which modifies the article list based on specific needs. Some examples of filter functions:

- **Category Filtering**: Display only articles matching a given category.
- **Top Articles**: Filter articles marked with a `top` flag or attribute.
- **Date Filtering**: Show only the most recent articles based on publication date.

These filtering functions allow flexible data handling, enabling various content sections to display targeted article lists.

### Link to Storybook

The Storybook for **Blesk.cz Alternative Homepage** is accessible at:

- **[Storybook URL](http://blesk-storybook.s3-website.eu-central-1.amazonaws.com/)**

To start Storybook locally:

```bash
npm run storybook
```

### AWS Amplify Preview

A live preview of the application is hosted on AWS Amplify and can be accessed here:

- **[AWS Amplify Preview](https://main.d1s2p4x2bts8mk.amplifyapp.com/)**

### Production Deployment

To deploy in production mode:

1. **Create a production build**:
    ```bash
    npm run build
    ```

2. **Start the production server**:
    ```bash
    npm start
    ```

The app will be accessible on the configured server port, typically [http://localhost:3000](http://localhost:3000).

### AWS CLI and Profile Configuration

For deployment and management on AWS Amplify or S3, you must set up AWS CLI and an AWS profile.

1. **Install AWS CLI**:
   - Follow the [official AWS CLI installation guide](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

2. **Configure AWS Profile**:
   - Run the following command to set up AWS CLI with your credentials:
     ```bash
     aws configure
     ```
   - Enter your **AWS Access Key ID**, **AWS Secret Access Key**, **Default region name**, and **Default output format**.
   - For more details, refer to [AWS CLI Configuration documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

With this setup, you can manage deployment, configuration, and other AWS resources directly from your local environment.
