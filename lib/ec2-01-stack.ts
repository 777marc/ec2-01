import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  Instance,
  Vpc,
  MachineImage,
  InstanceType,
  InstanceClass,
  InstanceSize,
} from "aws-cdk-lib/aws-ec2";

export class Ec201Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = Vpc.fromLookup(this, "MyDefaultVpc", {
      isDefault: true,
    });

    const instance = new Instance(this, "MyEc2Instance", {
      vpc,
      machineImage: MachineImage.genericLinux({
        "us-east-1": "ami-084568db4383264d4",
      }),
      instanceType: InstanceType.of(InstanceClass.T3, InstanceSize.MICRO),
    });
  }
}
