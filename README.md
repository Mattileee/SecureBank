import React from 'react';

const Documentation = () => {
  const handleLinkClick = (e, url) => {
    e.preventDefault();
    // Implement navigation logic here if needed
    window.open(url, '_blank');
  };

  return (
    <div className="prose max-w-none p-4">
      <h1>Welcome to your Lovable project</h1>

      <h2>Project info</h2>
      <p>
        <strong>URL</strong>:{" "}
        <a
          href="https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529"
          onClick={(e) => handleLinkClick(e, 'https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529')}
          className="text-blue-600 hover:underline"
        >
          https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529
        </a>
      </p>

      <h2>How can I edit this code?</h2>
      <p>There are several ways of editing your application.</p>

      <h3>Use Lovable</h3>
      <p>
        Simply visit the{" "}
        <a
          href="https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529"
          onClick={(e) => handleLinkClick(e, 'https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529')}
          className="text-blue-600 hover:underline"
        >
          Lovable Project
        </a>{" "}
        and start prompting.
        Changes made via Lovable will be committed automatically to this repo.
      </p>

      <h3>Use your preferred IDE</h3>
      <p>
        If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.
      </p>
      <p>
        The only requirement is having Node.js & npm installed -{" "}
        <a
          href="https://github.com/nvm-sh/nvm#installing-and-updating"
          onClick={(e) => handleLinkClick(e, 'https://github.com/nvm-sh/nvm#installing-and-updating')}
          className="text-blue-600 hover:underline"
        >
          install with nvm
        </a>
        .
      </p>
      <pre>
        <code>
{`# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev`}
        </code>
      </pre>

      <h3>Edit a file directly in GitHub</h3>
      <ul>
        <li>Navigate to the desired file(s).</li>
        <li>Click the "Edit" button (pencil icon) at the top right of the file view.</li>
        <li>Make your changes and commit the changes.</li>
      </ul>

      <h3>Use GitHub Codespaces</h3>
      <p>
        Navigate to the main page of your repository. Click on the{" "}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-blue-600 hover:underline"
        >
          "Code" button
        </a>{" "}
        (green button) near the top right. Select the{" "}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-blue-600 hover:underline"
        >
          "Codespaces" tab
        </a>. Click on "New codespace" to launch a new environment. Edit files and commit changes.
      </p>

      <h2>What technologies are used for this project?</h2>
      <ul>
        <li>Vite</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>shadcn-ui</li>
        <li>Tailwind CSS</li>
      </ul>

      <h2>How can I deploy this project?</h2>
      <p>
        Open{" "}
        <a
          href="https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529"
          onClick={(e) => handleLinkClick(e, 'https://lovable.dev/projects/b8e4870b-efc5-4278-a0d4-99ba400f2529')}
          className="text-blue-600 hover:underline"
        >
          Lovable
        </a>{" "}
        and click on Share -> Publish.
      </p>

      <h2>Can I connect a custom domain to my Lovable project?</h2>
      <p>
        Yes, navigate to Project > Settings > Domains and click Connect Domain.
        Read more:{" "}
        <a
          href="https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide"
          onClick={(e) => handleLinkClick(e, 'https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide')}
          className="text-blue-600 hover:underline"
        >
          Setting up a custom domain
        </a>
        .
      </p>
    </div>
  );
};

export default Documentation;