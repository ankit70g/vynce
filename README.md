# Vynce

A powerful visual workflow automation platform that helps you build, automate, and scale your processes with ease.

🔗 **Live Demo**: [https://vynce-seven.vercel.app/](https://vynce-seven.vercel.app/)

## ✨ Features

### 🔄 Visual Workflow Builder
Build complex automation workflows with an intuitive drag-and-drop interface powered by React Flow. Design your automation logic visually without writing code.

### 🎯 Trigger Nodes
Start your workflows with multiple trigger options:
- **Webhook** - HTTP endpoints for external integrations
- **Google Form** - Trigger workflows from form submissions
- **Stripe** - React to payment events
- **Manual** - Start workflows on-demand

### 🤖 AI Integrations
Integrate powerful AI capabilities into your workflows:
- **OpenAI** - GPT models for text generation and analysis
- **Claude** - Anthropic's advanced AI assistant
- **Gemini** - Google's multimodal AI

### 💬 Messaging & Communication
Send notifications and messages through:
- **Discord** - Bot integrations and webhooks
- **Slack** - Team notifications and updates

### 🌐 HTTP Request Node
Make API calls to any external service with full HTTP method support (GET, POST, PUT, DELETE, etc.)

### ⚡ Background Job Execution
Powered by Inngest for reliable, fault-tolerant background job processing with automatic retries and scheduling.

### 💳 Payments & Subscriptions
Built-in payment processing with Polar for:
- One-time payments
- Recurring subscriptions
- Usage-based billing

### 🔐 Authentication
Secure user authentication powered by Better Auth with support for multiple providers.

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Beautiful, accessible components
- **React Flow** - Interactive node-based editor
- **React Hook Form** - Performant form management
- **Jotai** - Minimal state management

### Backend
- **tRPC** - End-to-end typesafe APIs
- **Prisma ORM** - Type-safe database access
- **Neon Postgres** - Serverless PostgreSQL
- **Inngest** - Background jobs and workflows
- **Better Auth** - Authentication framework

### AI & Integrations
- **Vercel AI SDK** - Unified AI interface
- **OpenAI SDK** - GPT integrations
- **Anthropic SDK** - Claude integrations
- **Google Generative AI** - Gemini integrations

### Developer Experience
- **Biome** - Fast linting and formatting
- **Sentry** - Error tracking and monitoring
- **CodeRabbit** - Automated PR reviews
- **mprocs** - Run multiple processes in development

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- PostgreSQL database (or Neon account)
- API keys for services you want to integrate

### Installation

1. Clone the repository
```bash
git clone https://github.com/ankit70g/vynce.git
cd vynce
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

Fill in your environment variables:
- Database connection string
- AI API keys (OpenAI, Anthropic, Google)
- Authentication secrets
- Inngest keys
- Sentry DSN (optional)

4. Run database migrations
```bash
npx prisma migrate dev
```

5. Start the development server
```bash
npm run dev:all
```

This will start:
- Next.js development server (port 3000)
- Inngest development server

Visit `http://localhost:3000` to see your app.

## 📝 Development

### Available Scripts

- `npm run dev` - Start Next.js dev server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run Biome linter
- `npm run format` - Format code with Biome
- `npm run inngest:dev` - Start Inngest dev server
- `npm run dev:all` - Run all services with mprocs

```

## 🔧 Configuration

### Database
Configure your database connection in `.env`:
```env
DATABASE_URL="postgresql://..."
```

### AI Providers
Add API keys for the AI services you want to use:
```env
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GOOGLE_GENERATIVE_AI_API_KEY="..."
```

### Background Jobs
Configure Inngest:
```env
INNGEST_SIGNING_KEY="..."
INNGEST_EVENT_KEY="..."
```

## 📦 Deployment

Vynce is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

For other platforms, use:
```bash
npm run build
npm run start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

Built with amazing open-source tools and frameworks. Special thanks to all the contributors and maintainers of the libraries used in this project.

## 📞 Support

- Documentation: [Coming Soon]
- Issues: [GitHub Issues](https://github.com/ankit70g/vynce/issues)
- X: [@ankit70_](https://x.com/ankit70_)

---

Made with ❤️ by the Vynce team
