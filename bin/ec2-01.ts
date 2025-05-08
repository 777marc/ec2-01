#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { Ec201Stack } from "../lib/ec2-01-stack";

const app = new cdk.App();
new Ec201Stack(app, "Ec201Stack", {
  env: { account: "388414971737", region: "us-east-1" },
});
