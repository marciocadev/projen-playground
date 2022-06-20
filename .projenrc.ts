import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.28.1',
  defaultReleaseBranch: 'main',
  name: 'projen-playground',
  projenrcTs: true,

  release: true,
});
project.synth();