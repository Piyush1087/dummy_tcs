require('../backend/node_modules/reflect-metadata');
const fs = require('fs');
const { ValidationPipe } = require('../backend/node_modules/@nestjs/common');
const { Test } = require('../backend/node_modules/@nestjs/testing');
const { AppModule } = require('../backend/dist/app.module');
const { BrandReturnRefundProvider } = require('../backend/dist/features/brand-escrow/services/brand-return-provider.adapter');
const { BrandReturnProviderSetupRequiredError } = require('../backend/dist/features/brand-escrow/services/brand-return-provider.types');

const counts = { capabilities: 0, assertExecutionAvailable: 0, createRefund: 0, fetchRefund: 0, verifyTrustedFundingEvidence: 0 };
const statePath = process.env.V7_PROVIDER_STATE;
const persist = () => fs.writeFileSync(statePath, JSON.stringify({ mode: process.env.BRAND_PAYOUTS_COMMAND_SURFACE, counts }, null, 2));
const mustNot = name => { counts[name]++; persist(); throw new Error(`MUST_NOT_BE_CALLED:${name}`); };
const provider = {
  async capabilities() { counts.capabilities++; persist(); return [{ sourceType: 'GATEWAY', currency: 'INR' }]; },
  async assertExecutionAvailable() { counts.assertExecutionAvailable++; persist(); throw new BrandReturnProviderSetupRequiredError(); },
  async createRefund() { return mustNot('createRefund'); },
  async fetchRefund() { return mustNot('fetchRefund'); },
  async verifyTrustedFundingEvidence() { return mustNot('verifyTrustedFundingEvidence'); },
};

(async () => {
  persist();
  const moduleRef = await Test.createTestingModule({ imports: [AppModule] })
    .overrideProvider(BrandReturnRefundProvider).useValue(provider).compile();
  const app = moduleRef.createNestApplication({ rawBody: true, bodyParser: false, logger: false });
  app.enableCors({
    origin: true,
    credentials: true,
    methods: ['GET','HEAD','PUT','PATCH','POST','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization','Accept','Origin','X-Requested-With','x-idempotency-key','x-session-id','x-brand-financial-command-surface'],
  });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.useBodyParser('json', { limit: '8mb' });
  app.useBodyParser('urlencoded', { extended: true, limit: '8mb' });
  await app.listen(Number(process.env.PORT), '127.0.0.1');
  const stop = async () => { persist(); await app.close(); process.exit(0); };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
})().catch(error => { console.error(error); process.exitCode = 1; });
