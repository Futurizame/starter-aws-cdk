import * as cdk from "aws-cdk-lib";
import { MainStack } from "./stacks/MainStack";

const app = new cdk.App();

new MainStack(app, "MainStack", {
    stackName: null, // TODO set stack name e.g. "cdk-core-${stage}"
});

app.synth();
