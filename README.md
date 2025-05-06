# Zeta – Secure shadcn/ui Component Registry

<p align="center">
   <img alt="hero image" src="https://zeta-registry.vercel.app/screenshot.png" />
</p>

Zeta is an open source registry for [shadcn/ui](https://ui.shadcn.com/) components, designed for secure distribution of private or premium components. It integrates with [Polar.sh](https://docs.polar.sh/features/benefits/license-keys) for automated license key management and validation.

> **Documentation is in progress.**   
> For now, follow this guide and refer to [shadcn registry docs](https://ui.shadcn.com/docs/registry/getting-started) and [Polar license key docs](https://docs.polar.sh/features/benefits/license-keys) for details.

---

## Quick Start

### 1. Create a License Key

To protect your components, you need a valid license key from Polar.sh.

- [How to create a license key in Polar](https://docs.polar.sh/features/benefits/license-keys)

---

### 2. Choose Your Setup

#### **A. Install via shadcn CLI (recommended for new Next.js projects)**

1. Start with a fresh Next.js app.
2. Run:

   ```bash
   pnpm dlx shadcn@latest add https://zeta-registry.vercel.app/r/registry.json
   ```

This command copies the registry components into your project.

#### **B. Use this repository as a template**

```bash
git clone https://github.com/rbadillap/zeta.git
cd zeta
pnpm install
```

---

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in the required values:

```env
# Zeta registry (used for signing tokens)
# https://nextjs.org/docs/app/guides/authentication#1-generating-a-secret-key
REGISTRY_TOKEN_SECRET="your-random-secret"

# Polar.sh integration
POLAR_ORG_ID="your-polar-organization-id"
POLAR_ACCESS_TOKEN="your-polar-access-token"
POLAR_IS_SANDBOX="false" # set to "true" for Polar sandbox/testing
```

**Variable explanations:**

- `REGISTRY_TOKEN_SECRET`: Secret key for signing and verifying registry tokens. Generate a strong random value. [Docs](https://nextjs.org/docs/app/guides/authentication#1-generating-a-secret-key)
- `POLAR_ORG_ID`: Your Polar.sh organization ID. Find it in your Polar dashboard.
- `POLAR_ACCESS_TOKEN`: API token for accessing Polar.sh endpoints.
- `POLAR_IS_SANDBOX`: Set to `"true"` to use Polar's sandbox environment for testing.

---

### 4. Registry Setup & Component Protection

Zeta expects a `registry.json` file and at least one component to be present in your project.

- Follow the [shadcn registry getting started guide](https://ui.shadcn.com/docs/registry/getting-started) to:
  - Create your own `registry.json`
  - Add your components (e.g., in `registry/new-york/your-component/`)
  - Reference and protect components as needed

---

### 5. Run the Registry Server

```bash
pnpm dev
```

Your registry will be available at [http://localhost:3000](http://localhost:3000).

---

## How It Works

1. **Create a license key** in Polar.sh
2. **Set up your registry** (clone this repo or use shadcn CLI)
3. **Configure environment variables** for Polar integration and token signing
4. **Add and protect your components** in the registry
5. **Distribute components** securely—users must provide a valid license key to install

---

## Links & Further Reading

- [Polar.sh License Key Docs](https://docs.polar.sh/features/benefits/license-keys)
- [shadcn Registry Getting Started](https://ui.shadcn.com/docs/registry/getting-started)
- [Zeta Demo](https://zeta-registry.vercel.app#example)
- [Zeta Issues & Discussions](https://github.com/rbadillap/zeta/discussions)

---

## Author

Created by [Ronny Badilla](https://x.com/rbadillap)  
Contact: info@rbadillap.dev

## License

[MIT License](LICENSE)
