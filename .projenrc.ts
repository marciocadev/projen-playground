import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.28.1',
  defaultReleaseBranch: 'main',
  name: 'projen-playground',
  projenrcTs: true,

  release: true,
  majorVersion: 1,

  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Label core contributions',
          actions: {
            add: ['contribution/core'],
          },
          conditions: [
            'author~=^(marciocadev)$',
            'label!=contribution/core',
          ],
        },
      ],
    },
  },
});
project.synth();