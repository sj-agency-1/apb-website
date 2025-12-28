# DecapCMS + Netlify Setup Guide

This guide explains how to activate and configure DecapCMS (formerly Netlify CMS) for content management on your Netlify-deployed Astro site.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Step 1: Deploy to Netlify](#step-1-deploy-to-netlify)
- [Step 2: Enable Netlify Identity](#step-2-enable-netlify-identity)
- [Step 3: Enable Git Gateway](#step-3-enable-git-gateway)
- [Step 4: Configure External OAuth (Optional)](#step-4-configure-external-oauth-optional)
- [Step 5: Invite Users](#step-5-invite-users)
- [Step 6: Access the CMS](#step-6-access-the-cms)
- [Configuration Reference](#configuration-reference)
- [Troubleshooting](#troubleshooting)
- [Local Development](#local-development)

---

## Overview

DecapCMS provides a user-friendly content management interface for your static Astro site. It allows editors to:

- Create, edit, and delete blog posts and advantages
- Upload and manage images
- Preview content before publishing
- Use an editorial workflow (draft → review → publish)

The CMS is accessible at `/admin/` on your deployed site.

---

## Prerequisites

Before starting, ensure you have:

- [ ] A GitHub/GitLab/Bitbucket repository with your project
- [ ] A Netlify account (free tier works)
- [ ] Admin access to your repository

---

## Step 1: Deploy to Netlify

### Option A: Deploy via Netlify UI

1. Log in to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Select the `apb-website` repository
5. Configure build settings (these should auto-detect from `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20 (set in environment variables)
6. Click **"Deploy site"**

### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and link to a new site
netlify init

# Deploy to production
netlify deploy --prod
```

---

## Step 2: Enable Netlify Identity

Netlify Identity provides the authentication layer for DecapCMS.

1. Go to your site's dashboard in Netlify
2. Navigate to **Site configuration** → **Identity**
3. Click **"Enable Identity"**

### Configure Registration Settings

1. Under **Registration preferences**, choose:
   - **Open** - Anyone can register (not recommended for production)
   - **Invite only** - Only invited users can access (recommended)

2. Under **External providers** (optional), enable:
   - Google
   - GitHub
   - GitLab
   - Bitbucket

### Configure Services

1. Scroll down to **Services**
2. Click **"Enable Git Gateway"**
3. If prompted, authorize Netlify to access your Git repository

---

## Step 3: Enable Git Gateway

Git Gateway allows DecapCMS to make commits to your repository without requiring each user to have direct Git access.

1. In **Site configuration** → **Identity** → **Services**
2. Click **"Enable Git Gateway"**
3. For GitHub, you'll need to:
   - Connect your GitHub account
   - Grant access to the repository
4. For GitLab/Bitbucket, follow the respective authorization flows

### Git Gateway Roles (Optional)

You can restrict Git Gateway access to specific Identity roles:

1. Under Git Gateway settings, add roles (e.g., `admin`, `editor`)
2. Users with these roles will have CMS access

---

## Step 4: Configure External OAuth (Optional)

For a better login experience, configure external OAuth providers:

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Navigate to **APIs & Services** → **Credentials**
4. Create **OAuth 2.0 Client ID**:
   - Application type: Web application
   - Authorized redirect URI: `https://your-site.netlify.app/.netlify/identity/callback`
5. Copy the Client ID and Secret
6. In Netlify: **Site configuration** → **Identity** → **External providers** → **Google**
7. Paste the Client ID and Secret

### GitHub OAuth

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Create a new **OAuth App**:
   - Homepage URL: `https://your-site.netlify.app`
   - Authorization callback URL: `https://your-site.netlify.app/.netlify/identity/callback`
3. Copy Client ID and Secret
4. In Netlify: Configure GitHub provider with credentials

---

## Step 5: Invite Users

### Invite Editors

1. Go to **Site configuration** → **Identity** → **Users**
2. Click **"Invite users"**
3. Enter email addresses
4. Users will receive an invitation email

### Set User Roles

1. Click on a user in the Identity tab
2. Add roles (e.g., `admin`, `editor`)
3. These roles can be used for access control

### Accept Invitation

When users receive the invitation:

1. Click the link in the email
2. Set a password (if using email/password auth)
3. Or sign in with configured OAuth provider

---

## Step 6: Access the CMS

Once everything is configured:

1. Navigate to `https://your-site.netlify.app/admin/`
2. Click **"Login with Netlify Identity"**
3. Sign in with your credentials
4. Start managing content!

### First-Time Login

On first visit, you might see a modal asking to complete your signup. This is normal for the first user.

---

## Configuration Reference

### File Locations

| File                      | Purpose                     |
| ------------------------- | --------------------------- |
| `public/admin/config.yml` | DecapCMS configuration      |
| `src/pages/admin.html`    | Admin panel HTML page       |
| `netlify.toml`            | Netlify build configuration |

### Content Collections

The CMS is configured to manage:

| Collection | Folder                    | Languages        |
| ---------- | ------------------------- | ---------------- |
| Blog       | `src/content/blog/`       | English, Russian |
| Advantages | `src/content/advantages/` | English, Russian |

### Frontmatter Fields

Each content item supports:

- `title` - Main title (required)
- `description` - SEO description
- `excerptTitle` - Short title for cards
- `excerptDescription` - Short description (required)
- `publishDate` - Publication date (required)
- `heroImage` - Featured image (required)
- `tags` - List of tags
- `isArchive` - Archive status
- `body` - Markdown content

---

## Troubleshooting

### "Failed to load config" Error

**Cause:** The CMS cannot find or parse `config.yml`

**Solutions:**

1. Verify `public/admin/config.yml` exists
2. Check for YAML syntax errors
3. Ensure the file is committed and deployed

### "Unable to access repository" Error

**Cause:** Git Gateway not properly configured

**Solutions:**

1. Re-enable Git Gateway in Netlify Identity settings
2. Ensure repository access is authorized
3. Check that the configured branch exists

### Login Loop / Can't Sign In

**Cause:** Identity widget not loading correctly

**Solutions:**

1. Clear browser cache and cookies
2. Try incognito/private browsing
3. Check browser console for errors
4. Ensure Netlify Identity is enabled

### Images Not Uploading

**Cause:** Media folder configuration issue

**Solutions:**

1. Verify `media_folder` path in config.yml
2. Ensure the folder exists in your repository
3. Check file size limits (Netlify has 10MB limit)

### Changes Not Appearing on Site

**Cause:** Build not triggered or cache issue

**Solutions:**

1. Wait for Netlify build to complete
2. Check Netlify deploy logs for errors
3. Clear Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**

---

## Local Development

### Running CMS Locally

For local CMS development without Git Gateway:

1. Install the proxy server:

   ```bash
   npx decap-server
   ```

2. Temporarily modify `public/admin/config.yml`:

   ```yaml
   # Comment out the git-gateway backend
   # backend:
   #   name: git-gateway
   #   branch: main

   # Use local backend instead
   backend:
     name: proxy
     proxy_url: http://localhost:8081/api/v1
     branch: main

   local_backend: true
   ```

3. Start your Astro dev server:

   ```bash
   npm run dev
   ```

4. In another terminal, start the proxy server:

   ```bash
   npx decap-server
   ```

5. Access CMS at `http://localhost:4321/admin/`

> **⚠️ Important:** Remember to revert the backend configuration before committing!

### Using decap-server npm script

Add this to your `package.json`:

```json
{
  "scripts": {
    "cms": "npx decap-server"
  }
}
```

---

## Security Recommendations

1. **Use Invite-Only Registration** - Prevent unauthorized signups
2. **Enable 2FA** - For external OAuth providers
3. **Limit Git Gateway Roles** - Restrict who can make commits
4. **Review Commits** - Use branch protection and PR reviews
5. **Audit User Access** - Regularly review Identity users

---

## Additional Resources

- [DecapCMS Documentation](https://decapcms.org/docs/)
- [Netlify Identity Documentation](https://docs.netlify.com/security/secure-access-to-sites/identity/)
- [Git Gateway Documentation](https://docs.netlify.com/security/secure-access-to-sites/git-gateway/)
- [Astro + DecapCMS Guide](https://docs.astro.build/en/guides/cms/decap-cms/)

---

## Quick Checklist

Before going live, verify:

- [ ] Site deployed successfully on Netlify
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled and authorized
- [ ] At least one user invited
- [ ] User can log in at `/admin/`
- [ ] User can create/edit content
- [ ] Changes trigger new builds
- [ ] Changes appear on published site

---

## Support

If you encounter issues not covered here:

1. Check [Netlify Support Forums](https://answers.netlify.com/)
2. Review [DecapCMS GitHub Issues](https://github.com/decaporg/decap-cms/issues)
3. Consult [Netlify Status Page](https://www.netlifystatus.com/) for service issues
