import { colors } from "../../../../../Utils/styles.jsx";
import { Button, Input, LiNum } from "../../../../../Utils/TagUtils.jsx";
import { BoxCode } from "../../../../../Utils/compUtils.jsx";
import CopyField from "../../../../../Utils/CopyField.jsx";
import TunerRole from "../../../../../../assets/tunerRole.png";
import Permission from "../../../../../../assets/permission.png";
import Other from "../../../../../../assets/other.png";

const CustomerManagedPolicies = ({ root, onBack, onNext }) => {
  const policy1 = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CostAudit",
      "Effect": "Allow",
      "Action": [
        "dms:Describe*",
        "dms:List*",
        "kafka:Describe*",
        "kafka:Get*",
        "kafka:List*",
        "mq:Describe*",
        "mq:List*",
        "route53resolver:Get*",
        "route53resolver:List*",
        "memorydb:Describe*",
        "savingsplans:Describe*",
        "cloudsearch:Describe*",
        "quicksight:Describe*",
        "quicksight:List*",
        "codepipeline:Get*",
        "codepipeline:List*",
        "codebuild:List*",
        "codebuild:Get*",
        "codebuild:Describe*",
        "codebuild:BatchGet*",
        "codedeploy:List*",
        "codedeploy:BatchGet*",
        "codedeploy:Get*",
        "mediaconnect:Describe*",
        "mediaconnect:List*",
        "mediaconvert:Describe*",
        "mediaconvert:Get*",
        "mediaconvert:List*",
        "medialive:Describe*",
        "medialive:List*",
        "mediapackage:Describe*",
        "mediapackage:List*",
        "mediapackage-vod:Describe*",
        "mediapackage-vod:List*",
        "mediastore:DescribeObject",
        "mediastore:Get*",
        "mediastore:List*",
        "mediatailor:Describe*",
        "mediatailor:Get*",
        "mediatailor:List*",
        "ec2:Describe*",
        "elasticache:Describe*",
        "events:DescribeEventBus",
        "events:List*",
        "elasticloadbalancing:Describe*",
        "kinesis:List*",
        "kinesis:Describe*",
        "kinesisanalytics:Describe*",
        "kinesisanalytics:List*",
        "dynamodb:Describe*",
        "dynamodb:List*",
        "cloudwatch:Describe*",
        "cloudwatch:List*",
        "cloudwatch:GetMetricStatistics",
        "ecr:GetLifecyclePolicy",
        "ecr:GetRepositoryPolicy",
        "ecr-public:DescribeRepositories",
        "ecr:List*",
        "ecr:Describe*",
        "lambda:List*",
        "lambda:GetPolicy",
        "lambda:GetAccountSettings",
        "lambda:GetFunctionConfiguration",
        "lambda:GetFunctionCodeSigningConfig",
        "lambda:GetFunctionConcurrency",
        "lambda:GetFunctionConfiguration",
        "rds:Describe*",
        "rds:ListTagsForResource",
        "sqs:GetQueueAttributes",
        "sqs:List*",
        "firehose:Describe*",
        "firehose:List*",
        "kafka:Describe*",
        "kafka:List*",
        "glue:GetDevEndpoint",
        "s3:GetBucketPolicy",
        "s3:List*",
        "network-firewall:Describe*",
        "network-firewall:List*",
        "elasticfilesystem:Describe*",
        "kms:Describe*",
        "kms:List*",
        "kms:GetKeyRotationStatus",
        "kms:GetKeyPolicy",
        "elasticmapreduce:List*",
        "es:Describe*",
        "es:List*",
        "es:Get*",
        "aoss:Get*",
        "aoss:List*",
        "logs:Describe*",
        "logs:List*",
        "application-autoscaling:Describe*",
        "route53:List*",
        "redshift:Describe*",
        "backup:Describe*",
        "backup:Get*",
        "backup:List*",
        "dlm:Get*",
        "dlm:List*",
        "sagemaker:List*",
        "lambda:Get*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "BillingReadOnly",
      "Effect": "Allow",
      "Action": [
        "billingconductor:List*",
        "billing:ListBillingViews"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ComputeOptimizerReadAccess",
      "Effect": "Allow",
      "Action": [
        "compute-optimizer:Get*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CostExplorerAccess",
      "Effect": "Allow",
      "Action": [
        "ce:Describe*",
        "ce:Get*",
        "ce:List*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "CURReportDefinitions",
      "Effect": "Allow",
      "Action": [
        "organizations:Describe*",
        "organizations:List*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "PricingAPIAccess",
      "Effect": "Allow",
      "Action": [
        "pricing:*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "WellArchitectedAccess",
      "Effect": "Allow",
      "Action": [
        "wellarchitected:*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ReadOnlyForOrgServices",
      "Effect": "Allow",
      "Action": [
        "detective:Describe*",
        "detective:List*",
        "detective:Get*",
        "devops-guru:Describe*",
        "devops-guru:List*",
        "devops-guru:Get*",
        "devops-guru:Search*",
        "guardduty:Describe*",
        "guardduty:Get*",
        "guardduty:List*",
        "inspector:Describe*",
        "inspector:Get*",
        "inspector2:List*",
        "inspector2:Get*",
        "inspector2:Describe*",
        "macie2:Describe*",
        "macie2:Get*",
        "macie2:List*",
        "account:Get*",
        "account:ListRegions",
        "auditmanager:Get*",
        "auditmanager:List*",
        "controltower:Describe*",
        "controltower:Get*",
        "controltower:List*",
        "sso:Describe*",
        "sso:List*",
        "sso:Get*",
        "sso:Search*",
        "sso-directory:Describe*",
        "sso-directory:Get*",
        "sso-directory:List*",
        "sso-directory:Search*",
        "aws-marketplace:DescribeAgreement",
        "aws-marketplace:Get*",
        "aws-marketplace:List*",
        "aws-marketplace:ViewSubscriptions",
        "aws-marketplace:SearchAgreements",
        "networkmanager:DescribeGlobalNetworks",
        "networkmanager:Get*",
        "networkmanager:List*",
        "trustedadvisor:Describe*",
        "trustedadvisor:List*",
        "cloudtrail:Describe*",
        "cloudtrail:Get*",
        "cloudtrail:List*",
        "cloudtrail:LookupEvents",
        "cloudformation:Describe*",
        "cloudformation:Get*",
        "cloudformation:List*",
        "compute-optimizer:DescribeRecommendationExportJobs",
        "config:Describe*",
        "config:Get*",
        "config:List*",
        "ds:Describe*",
        "ds:Get*",
        "ds:List*",
        "fms:Get*",
        "fms:List*",
        "access-analyzer:Get*",
        "access-analyzer:List*",
        "healthlake:Describe*",
        "healthlake:GetCapabilities",
        "healthlake:List*",
        "healthlake:ReadResource",
        "healthlake:Search*",
        "health:Describe*",
        "license-manager:Get*",
        "license-manager:List*",
        "servicecatalog:Describe*",
        "servicecatalog:Get*",
        "servicecatalog:List*",
        "servicecatalog:ScanProvisionedProducts",
        "servicecatalog:Search*",
        "securityhub:Describe*",
        "securityhub:Get*",
        "securityhub:List*",
        "ssm:Describe*",
        "ssm:List*",
        "ram:Get*",
        "ram:List*",
        "servicequotas:Get*",
        "servicequotas:List*",
        "s3:Describe*",
        "license-manager:GetGrant",
        "license-manager:ListTokens",
        "license-manager-user-subscriptions:List*"
      ],
      "Resource": "*"
    }
  ]
}`
  const policy2 = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "SecAudit",
      "Effect": "Allow",
      "Action": [
        "cloudfront:List*",
        "cloudfront:Get*",
        "cloudfront:Describe*",
        "ecr:DescribeRepositories",
        "ecr:BatchGetRepositoryScanningConfiguration",
        "iam:List*",
        "iam:Get*",
        "lambda:GetFunctionConfiguration",
        "lambda:GetFunctionUrlConfig",
        "cloudwatch:GetMetricStatistics",
        "ec2:DescribeInstances",
        "ec2:DescribeVpcs",
        "ec2:DescribeSecurityGroups",
        "ec2:DescribeNetworkInterfaces",
        "redshift:DescribeClusters",
        "inspector2:BatchGetAccountStatus",
        "ec2:DescribeFlowLogs",
        "securityhub:GetEnabledStandards",
        "s3:ListAllMyBuckets",
        "s3:GetBucketLogging",
        "s3:GetEncryptionConfiguration",
        "s3:GetBucketPolicyStatus",
        "s3:GetBucketAcl",
        "s3:GetBucketVersioning",
        "s3:GetAccountPublicAccessBlock",
        "s3:GetBucketCORS",
        "s3:GetBucketPolicy",
        "s3:GetBucketVersioning",
        "s3:GetEncryptionConfiguration",
        "s3:GetLifecycleConfiguration",
        "sts:GetCallerIdentity",
        "wafv2:List*",
        "wafv2:Get*"
      ],
      "Resource": "*"
    },
    {
      "Sid": "SecAuditServiceQuotas",
      "Effect": "Allow",
      "Action": [
        "states:ListStateMachines",
        "servicequotas:GetServiceQuota",
        "acm:List*",
        "acm:DescribeCertificate",
        "athena:ListWorkGroups",
        "athena:GetWorkGroup",
        "apigateway:GET",
        "autoscaling:Describe*",
        "cloudformation:DescribeAccountLimits",
        "cloudformation:DescribeStacks",
        "cloudwatch:GetMetricData",
        "ds:GetDirectoryLimits",
        "ec2:Describe*",
        "ec2:GetEbsDefaultKmsKeyId",
        "ec2:GetEbsEncryptionByDefault",
        "ecs:Describe*",
        "ecs:List*",
        "eks:Describe*",
        "eks:List*",
        "elasticache:DescribeCacheClusters",
        "elasticache:DescribeCacheParameterGroups",
        "elasticache:DescribeCacheSecurityGroups",
        "elasticache:DescribeCacheSubnetGroups",
        "elasticbeanstalk:DescribeApplicationVersions",
        "elasticbeanstalk:DescribeApplications",
        "elasticbeanstalk:DescribeEnvironments",
        "elasticfilesystem:DescribeFileSystems",
        "firehose:ListDeliveryStreams",
        "lambda:GetAccountSettings",
        "redshift:DescribeClusterSnapshots",
        "redshift:DescribeClusterSubnetGroups",
        "route53:GetHostedZone",
        "route53:GetHostedZoneLimit",
        "route53:ListHostedZones",
        "servicequotas:List*",
        "servicequotas:Get*",
        "ses:Get*",
        "ses:List*",
        "support:Describe*",
        "support:SearchForCases",
        "trustedadvisor:Describe*",
        "trustedadvisor:GenerateReport",
        "trustedadvisor:RefreshCheck",
        "iam:GenerateCredentialReport",
        "iam:GetCredentialReport",
        "secretsmanager:ListSecrets",
        "secretsmanager:DescribeSecret",
        "sns:List*",
        "sns:Get*",
        "artifact:ListReports",
        "artifact:GetReportMetadata",
        "artifact:GetReport",
        "artifact:GetTermForReport"
      ],
      "Resource": "*"
    },
    {
      "Sid": "NewReadAccountBillingPermissions",
      "Effect": "Allow",
      "Action": [
        "consolidatedbilling:GetAccountBillingRole",
        "consolidatedbilling:ListLinkedAccounts",
        "billing:Get*",
        "payments:ListPaymentPreferences",
        "invoicing:GetInvoicePDF",
        "invoicing:ListInvoiceSummaries"
      ],
      "Resource": "*"
    }
  ]
}`
  const policy3 = `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "CostExplorer",
      "Action": [
        "ce:StartSavingsPlansPurchaseRecommendationGeneration",
        "ce:UpdatePreferences"
      ],
      "Effect": "Allow",
      "Resource": "*"
    },
    {
      "Sid": "ListEC2SPReservations",
      "Effect": "Allow",
      "Action": [
        "ec2:DescribeCapacityReservations",
        "ec2:DescribeCapacityReservationFleets",
        "ec2:GetCapacityReservationUsage",
        "ec2:GetGroupsForCapacityReservation",
        "ec2:DescribeHostReservations",
        "ec2:DescribeHostReservationOfferings",
        "ec2:GetHostReservationPurchasePreview",
        "ec2:DescribeReservedInstancesOfferings",
        "ec2:DescribeReservedInstancesModifications",
        "ec2:DescribeReservedInstances",
        "ec2:GetReservedInstancesExchangeQuote",
        "ec2:DescribeReservedInstancesListings"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ComputeOptimizerAccess",
      "Effect": "Allow",
      "Action": [
        "compute-optimizer:UpdateEnrollmentStatus",
        "compute-optimizer:PutRecommendationPreferences"
      ],
      "Resource": "*"
    },
    {
      "Sid": "ServiceLinkedRole",
      "Effect": "Allow",
      "Action": "iam:CreateServiceLinkedRole",
      "Resource": "arn:aws:iam::*:role/aws-service-role/compute-optimizer.amazonaws.com/AWSServiceRoleForComputeOptimizer*",
      "Condition": {
        "StringLike": {
          "iam:AWSServiceName": "compute-optimizer.amazonaws.com"
        }
      }
    },
    {
      "Sid": "ServiceLinkedRolePolicy",
      "Effect": "Allow",
      "Action": "iam:PutRolePolicy",
      "Resource": "arn:aws:iam::*:role/aws-service-role/compute-optimizer.amazonaws.com/AWSServiceRoleForComputeOptimizer"
    },
    {
      "Sid": "AllowRoleToInspectItself",
      "Effect": "Allow",
      "Action": [
        "iam:ListRolePolicies",
        "iam:GetRolePolicy"
      ],
      "Resource": "arn:aws:iam::275595855473:role/CK-Tuner-Role-dev2"
    }
  ]
}`
  const field = ["cktuner-CostAuditPolicy", "cktuner-SecAuditPolicy", "cktuner-TunerReadEssentials"]

  return (
    <>
      <div className="px-8 py-5">
        <h1 className="font-bold text-3xl mb-2">Add Customer Managed Policies</h1>
        <h2 className="mb-5">Create an Inline policy for the role by following these steps</h2>
        <div className="p-5 bg-white rounded-lg">

          <ul className="p-2">
            <li className="mb-8"><span><LiNum num={1} />Go to the <span className="text-blue-800 font-bold underline">Create Policy</span>Page.</span></li>

            <li className="mb-8">
              <h2><LiNum num={2} />Click on the <b>JSON</b> tab and paste the following policy and click on Next:</h2>
              <BoxCode policy={policy1} />
            </li>

            <li className="mb-8">
              <h2><LiNum num={3} />In the <b>Name</b> field, enter below-mentioned policy name and click on Create Policy</h2>
              <div className={`px-10 mt-4`}>
                <CopyField field={field[0]} />
              </div>
            </li>

            <li className="mb-8"><span><LiNum num={4} />Again, go to the <span className="text-blue-800 font-bold underline">Create Policy</span>Page.</span></li>

            <li className="mb-8">
              <h2><LiNum num={5} />Click on the <b>JSON</b> tab and paste the following policy and click on Next:</h2>
              <BoxCode policy={policy2} />
            </li>

            <li className="mb-8">
              <h2><LiNum num={6} />In the <b>Name</b> field, enter below-mentioned policy name and click on Create Policy</h2>
              <div className={`px-10 mt-4`}>
                <CopyField field={field[1]} />
              </div>
            </li>

            <li className="mb-8"><span><LiNum num={7} />Again, go to the <span className="text-blue-800 font-bold underline">Create Policy</span>Page.</span></li>

            <li className="mb-8">
              <h2><LiNum num={8} />Click on the <b>JSON</b> tab and paste the following policy and click on Next:</h2>
              <BoxCode policy={policy3} />
            </li>

            <li className="mb-8">
              <h2><LiNum num={9} />In the <b>Name</b> field, enter below-mentioned policy name and click on Create Policy</h2>
              <div className={`px-10 mt-4`}>
                <CopyField field={field[2]} />
              </div>
            </li>

            <li className="mb-8"><h2 ><LiNum num={10} />Go to the <span className="font-bold">CK-Tuner Role</span></h2>
              <div className="flex justify-center mt-5">
                <img src={TunerRole} width={1500} alt="tunerRole" />
              </div>
            </li>

            <li className="mb-8"><h2 ><LiNum num={11} />In Permission policies, click on <span className="font-bold">Add permissions &gt; Attach Policy</span></h2>
              <div className="flex justify-center mt-5">
                <img src={Permission} width={1500} alt="tunerRole" />
              </div>
            </li>

            <li className="mb-8"><h2 ><LiNum num={12} />Filter by Type &gt; Customer managed then search for <span className="font-bold">cktuner-CostAuditPolicy, cktuner-SecAuditPolicy, cktuner-TunerReadEssentials</span> and select them.</h2>
              <div className="flex justify-center mt-5">
                <img src={Other} width={1500} alt="tunerRole" />
              </div>
            </li>

            <li className="mb-8"><span><LiNum num={13} />Now, click on <span className="font-bold">Add permissions</span></span></li>
          </ul>
        </div>

        {/* buttons */}
        <div className="flex justify-between mt-5 mb-5">
          <Button name={"Cancel"} bordercolor={colors.bgCol} textcolor={colors.bgCol} bgcolor={"white"} onClick={root} />
          <div className="flex gap-2">
            <Button name={"Back - Create an IAM Role"} bordercolor={colors.bgCol} textcolor={colors.bgCol} className={"bg-white"} onClick={onBack} />
            <Button name={"Next - Create S3 Bucket"} textcolor={"white"} bgcolor={colors.bgCol} className={"bg-gray-500"} onClick={onNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerManagedPolicies;
