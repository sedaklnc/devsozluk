<div align="center">
  <a href="https://www.devsozluk.net">
    <img
      src="https://raw.githubusercontent.com/devsozluk/website/main/apps/web/src/assets/images/logo.png"
      alt="DevSozluk Logo"
      height="64"
    />
  </a>
  <br />
  <br/>

<a href="https://storybook.devsozluk.net/" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>
[![Website](https://img.shields.io/website?url=https://www.devsozluk.net)](https://dev.devsozluk.net/)
![GitHub stars](https://img.shields.io/github/stars/devsozluk/website?logo=github)
![GitHub forks](https://img.shields.io/github/forks/devsozluk/website?logo=github)
[![GitHub commits](https://badgen.net/github/commits/Naereen/Strapdown.js)](https://github/devsozluk/website/commit)
![GitHub contributors](https://img.shields.io/github/contributors/devsozluk/website?logo=github)
<hr/>
</div>

## **About**

**DevSözlük**, The project I have created is a platform that aims to facilitate communication, knowledge sharing, and question and answer opportunities among software developers. In this project, I have built a structure that allows other software developers to contribute as well. This platform enables software developers to share their ideas, answer questions, and help each other.

## **Folder Structure**

```devsozluk/
  ├── apps/
  │   ├── web/                # Web application codebase.
  │   ├── docs/               # Documentation codebase.
  ├── packages/
  │   ├── ui/                 # Reusable UI component library.
  │   ├── config/             # Configuration files and utilities.
  │   ├── eslint-config-devsozluk/  # Custom ESLint configuration.
  │   ├── tsconfig/           # Shared TypeScript configuration.
  ├── .github/
  │   ├── workflows/
  │   │   └── devsozluk-ui-publish.yml  # GitHub Actions workflow for publishing the UI package.
  ├── .env.example             # Example configuration file for .env.
  ├── .gitignore               # List of files to be ignored by Git.
  ├── LICENSE                  # Project's license file.
  ├── package.json             # JSON file containing project's dependencies and scripts.
  ├── README.md                # Markdown file containing information about the project.
  ├── pnpm-lock.yaml           # Lock file for pnpm package manager.
  ├── pnpm-workspace.yaml      # Workspace configuration for pnpm.
  ├── prettierrc.json          # Configuration file for Prettier code formatter.
  └── turbo.json               # Configuration file for Turbo, a tool for managing monorepos.
```

## Teechnologies

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for building server-side rendered and static web applications.
- **TypeScript**: A statically typed superset of JavaScript that provides enhanced code reliability and scalability.
- **Tailwind** CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- **PNPM**: A fast, disk space-efficient package manager that uses hard links and deduplication to reduce disk usage.
- **Storybook**: An open-source tool for building and testing UI components in isolation.
- **Supabase**: An open-source alternative to Firebase that provides a set of tools and services for building scalable backend applications.

## Getting Started

To get started with the DevSözlük project, follow these steps:

- Clone the repository: `git clone git@github.com:devsozluk/website.git`
- Navigate to the project root directory: `cd website`
- Install the required packages using pnpm: `pnpm install`
- Go to the apps/web directory: `cd apps/web`
- Create a copy of the .env.example file and rename it to .env, then update the file with your Supabase API keys.
- Go back to the project root directory: `cd ../..`
- Start the web application: `pnpm run dev:web`

This will start the web application using the Next.js framework in the `apps/web` directory, as well as the UI components in the `packages/ui` directory.

## Contributors

Thank you for your contributions! We appreciate all the contributions from the community.

<a href="https://github.com/devsozluk/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=devsozluk/website" />
</a>