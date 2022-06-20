import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    console.log('(feat) testando alteração no versionamento na versão experimental (0.0.0 -> 0.0.1)');
    console.log('(fix) testando alteração no versionamento na versão experimental (0.0.1 -> 0.0.2)');
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new MyStack(app, 'projen-playground-dev', { env: devEnv });
// new MyStack(app, 'projen-playground-prod', { env: prodEnv });

app.synth();