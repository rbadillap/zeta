# Zeta - The Open Source Registry for shadcn/ui Components

Zeta is a registry for [shadcn/ui](https://ui.shadcn.com/) that enables secure distribution of private or premium components, integrating advanced licensing and protection. Perfect for teams and creators who want to share components without worrying about unauthorized access.

## Demo
https://zeta-registry.vercel.app

## Features

- 🔒 **Protected Components**: Secure your components with license key validation
- 🚀 **Easy Installation**: Install components directly via the shadcn CLI
- 🔑 **License Management**: Integration with [Polar.sh](https://polar.sh) for automated license key validation
- 🎨 **Component Registry**: Host and distribute your shadcn/ui components securely

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/rbadillap/zeta.git
cd zeta
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How It Works

1. **Publish Components**: Download this template or copy the components you need
2. **Protect with License Keys**: Integrate with Polar.sh to issue and validate licenses automatically
3. **Install via CLI**: Users can install components using the shadcn CLI with their access key

## Example Usage

```bash
npx shadcn add https://zeta-registry.vercel.app/logo
```

## Integrations

- ✅ [Polar.sh](https://docs.polar.sh/features/benefits/license-keys) - License key management
- 🔜 Better Auth - Coming soon
- 🔜 Vercel - Coming soon

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## Author

Created by [Ronny Badilla](https://x.com/rbadillap)

## License

[MIT License](LICENSE)
