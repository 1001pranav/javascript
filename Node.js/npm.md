# NPM - Node Package Manager

NPM is the default package manager for Node.js and the world's largest software registry.

## Package.json

The `package.json` file is the heart of any Node.js project.

### Creating package.json

```bash
# Interactive creation
npm init

# Accept all defaults
npm init -y

# With specific values
npm init --yes --scope=@mycompany
```

### Basic package.json Structure

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "My awesome application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest",
    "build": "webpack"
  },
  "keywords": ["nodejs", "api"],
  "author": "Your Name <email@example.com>",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.20",
    "jest": "^29.3.1"
  }
}
```

## Installing Packages

```bash
# Install package (adds to dependencies)
npm install express
npm i express  # shorthand

# Install as dev dependency
npm install --save-dev nodemon
npm i -D nodemon  # shorthand

# Install globally
npm install -g typescript

# Install specific version
npm install lodash@4.17.21

# Install from GitHub
npm install user/repo#branch

# Install all dependencies from package.json
npm install

# Install production dependencies only
npm install --production
```

## Package Versions

### Semantic Versioning (SemVer)

Format: `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)

- **MAJOR** - Breaking changes
- **MINOR** - New features (backward compatible)
- **PATCH** - Bug fixes

### Version Ranges

```json
{
  "dependencies": {
    "express": "4.18.2",      // Exact version
    "lodash": "^4.17.21",     // Compatible (4.x.x, <5.0.0)
    "mongoose": "~6.8.0",     // Approximately (6.8.x)
    "axios": "*",             // Any version (not recommended)
    "moment": ">=2.29.4",     // Greater than or equal
    "react": "18.x",          // Any 18.x version
    "next": "latest"          // Latest version
  }
}
```

**Version Symbols:**
- `^` (caret) - Compatible with version (default)
- `~` (tilde) - Approximately equivalent
- `*` - Any version
- `x` - Wildcard

## Package Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "build": "webpack --mode production",
    "lint": "eslint .",
    "format": "prettier --write \"**/*.js\"",
    "prestart": "echo 'About to start'",
    "poststart": "echo 'Started!'",
    "custom": "node scripts/custom.js"
  }
}
```

```bash
# Run scripts
npm start       # Runs 'start' script
npm test        # Runs 'test' script
npm run dev     # Runs 'dev' script
npm run build   # Runs 'build' script

# Pass arguments
npm run test -- --coverage

# Run multiple scripts
npm run lint && npm run test
```

## Updating Packages

```bash
# Check for outdated packages
npm outdated

# Update all packages (respects semver)
npm update

# Update specific package
npm update express

# Update to latest (ignores semver)
npm install express@latest

# Interactive update (use npm-check-updates)
npx npm-check-updates -i
```

## Removing Packages

```bash
# Uninstall package
npm uninstall express
npm rm express  # shorthand

# Uninstall dev dependency
npm uninstall --save-dev nodemon

# Uninstall global package
npm uninstall -g typescript
```

## Package-lock.json

Locks exact versions of dependencies for reproducible builds.

```bash
# Generated automatically on npm install
# Commit to version control

# Use exact versions from lock file
npm ci  # Clean install (faster, used in CI/CD)
```

## NPM Configuration

```bash
# View configuration
npm config list
npm config get registry

# Set configuration
npm config set registry https://registry.npmjs.org/
npm config set init-author-name "Your Name"

# Delete configuration
npm config delete key

# Edit config file
npm config edit
```

### .npmrc File

```
# .npmrc (project level)
registry=https://registry.npmjs.org/
save-exact=true
engine-strict=true

# Private registry
@mycompany:registry=https://npm.mycompany.com
```

## Publishing Packages

```bash
# Login to npm
npm login

# Bump version
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0

# Publish
npm publish

# Publish scoped package as public
npm publish --access public

# Unpublish (within 72 hours)
npm unpublish package-name@version
```

## NPM Commands Reference

```bash
# Information
npm list              # List installed packages
npm list --depth=0    # Top-level packages only
npm view express      # View package info
npm docs express      # Open package docs
npm repo express      # Open package repository
npm search keyword    # Search packages

# Cache
npm cache clean --force  # Clear cache
npm cache verify         # Verify cache

# Audit
npm audit               # Check for vulnerabilities
npm audit fix           # Fix vulnerabilities
npm audit fix --force   # Force fix (may break)

# Execution
npx package-name        # Execute package without installing
npx create-react-app my-app  # Run package binaries

# Link (for local development)
npm link                # Link package globally
npm link package-name   # Link global package to project
npm unlink              # Unlink package
```

## Best Practices

1. **Commit package-lock.json** - Ensures reproducible builds
2. **Use npm ci in CI/CD** - Faster, more reliable
3. **Keep dependencies updated** - Security and features
4. **Audit regularly** - `npm audit`
5. **Use exact versions for critical deps** - Avoid surprises
6. **Organize scripts** - Use meaningful names
7. **Document scripts** - In README.md
8. **Use .npmignore** - Exclude files from publish
9. **Scope private packages** - `@company/package`
10. **Use npx for one-time commands** - Avoids global installs

## Common Issues

### Dependency Conflicts

```bash
# Force install
npm install --legacy-peer-deps

# Skip peer dependency checks
npm install --omit=peer
```

### Permission Errors (Global Installs)

```bash
# Fix npm permissions (Unix/Mac)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH

# Or use nvm (recommended)
```

### Clear Cache

```bash
# If packages aren't installing correctly
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Alternatives to NPM

- **Yarn** - Faster, better caching
- **pnpm** - Disk space efficient
- **Bun** - All-in-one JavaScript runtime

## Summary

- **npm install** - Install packages
- **package.json** - Project metadata and dependencies
- **package-lock.json** - Lock exact versions
- **npm scripts** - Automate tasks
- **npm audit** - Check security
- **npm publish** - Share your packages
- **npx** - Run packages without installing

NPM makes dependency management easy and enables code sharing across the JavaScript ecosystem!
