# Base Repository Starter

## Overview

This repository serves as a robust template for creating new project repositories. It comes pre-configured with advanced AI development workflows, including GitHub Copilot integration and the [BMAD Method](https://github.com/bmad-code-org/BMAD-METHOD/), to accelerate your project setup and ensure best practices from day one.

## Features

- **AI-Driven Development**: Built-in support for GitHub Copilot and advanced prompt workflows
- **BMAD Methodology**: Structured approach for project documentation and architecture
- **Prompt Automation**: Ready-to-use prompt files for agents, chat modes, instructions, and more
- **Easy Customization**: Designed to be cloned and adapted for any new repository

## Quick Start

1. **Clone this repository** to start your new project:
   ```sh
   git clone https://github.com/georgeparkdev/base-repository <your-new-project>
   cd <your-new-project>
   ```

2. **Install BMAD** (Best Method for Architecture & Documentation):
   - Run the following command to install BMAD globally:
     ```sh
     npm install -g @bmad/method
     ```
   - Or see the [BMAD Method repository](https://github.com/bmad-code-org/BMAD-METHOD/) for alternative installation options and full documentation.

3. **Define Required Documentation**
   - Use BMAD to generate essential docs (Product Requirements, Architecture, etc.) up to the PRD and architecture docs:
     ```sh
     bmad init
     bmad doc create prd
     bmad doc create architecture
     ```
   - For more details, see the [BMAD Method Guide](https://github.com/bmad-code-org/BMAD-METHOD/).

4. **Set Up the AI Workflow**
   - Run each prompt file below in a fresh chat (in the order listed) to fully enable the AI-powered development workflow:

   **a. Collections (run first):**
   ```sh
   #file:suggest-awesome-github-copilot-collections.prompt.md
   ```

   **b. Agents:**
   ```sh
   #file:suggest-awesome-github-copilot-agents.prompt.md
   ```

   **c. Instructions:**
   ```sh
   #file:suggest-awesome-github-copilot-instructions.prompt.md
   ```

   **d. Prompts:**
   ```sh
   #file:suggest-awesome-github-copilot-prompts.prompt.md
   ```

   **e. Chat Modes:**
   ```sh
   #file:suggest-awesome-github-copilot-chatmodes.prompt.md
   ```

   > [!TIP]
   > Run each prompt in a new chat for best results. This ensures a clean context for each setup phase.

## Settings for the repository

- Enforce rulesets if needed provided by the template
- Add "Require status checks to pass" for branches after you setup checks for workflows
- Branches rulesets:
  - main:
    - [x] Restrict updates
    - [x] Restrict deletions
    - [x] Require linear history
    - [x] Require deployments to succeed
    - [x] Require signed commits
    - [x] Require a pull request before merging
    - [x] Require status check to pass
    - [x] Block force pushes
  - dev:
    - [x] Restrict deletions
    - [x] Require a pull request before merging
    - [x] Require status check to pass
    - [x] Block force pushes
- General settings:
  - [x] Allow squash commits only (or other if preferred)
  - [x] Always suggest updating pull request branches
  - [x] Automatically delete head branches (if needed and rulesets are setup to prevent deletion of important branches)
  - [x] Auto-close issues with merged linked pull requests 

## Recommended branch naming convention

Use these branch names to keep history clear and workflows consistent:

- `main`: Production-ready code (release branch).
- `dev`: Ongoing development integration branch.
- `feature/<feature-name>`: New features or user stories (one feature per branch).
- `bugfix/<bugfix-name>`: Non-critical bug fixes that target `dev`.
- `release/<version>`: Prepare a new release; used for final QA and versioning.
- `hotfix/<hotfix-name>`: Critical fixes that must go directly to `main` and be merged back into `dev`.

Examples:

- `feature/user-authentication`
- `bugfix/login-redirect`
- `release/1.2.0`
- `hotfix/csrf-patch`

---

## Learn More

- **BMAD Method:** [Full Guide & Documentation](https://github.com/bmad-code-org/BMAD-METHOD/)
- **GitHub Copilot:** [Official Documentation](https://docs.github.com/en/copilot)
- **Awesome Copilot Prompts & Instructions:** [awesome-copilot](https://github.com/github/awesome-copilot)
- **Trunk-based Development** [Intrudction to Trunk-based Development](https://trunkbaseddevelopment.com/)

---
