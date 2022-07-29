import { IntegrationInvocationConfig } from '@jupiterone/integration-sdk-core';
import { StepTestConfig } from '@jupiterone/integration-sdk-testing';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { invocationConfig } from '../src';
import { IntegrationConfig } from '../src/config';

if (process.env.LOAD_ENV) {
  dotenv.config({
    path: path.join(__dirname, '../.env'),
  });
}

const DEFAULT_ACCOUNT_API_KEY = 'dummy-rumble-account-api-key';
const DEFAULT_EXPORT_TOKEN = 'dummy-rumble-export-token';

export const apiKeyIntegrationConfig: IntegrationConfig = {
  accountAPIKey: process.env.ACCOUNT_API_KEY || DEFAULT_ACCOUNT_API_KEY,
  exportToken: '',
};

export const exportTokensIntegrationConfig: IntegrationConfig = {
  accountAPIKey: '',
  exportToken: process.env.EXPORT_TOKEN || DEFAULT_EXPORT_TOKEN,
};

export function buildStepTestConfigForAPIKey(stepId: string): StepTestConfig {
  return {
    stepId,
    instanceConfig: apiKeyIntegrationConfig,
    invocationConfig: invocationConfig as IntegrationInvocationConfig,
  };
}

export function buildStepTestConfigForExportTokens(
  stepId: string,
): StepTestConfig {
  return {
    stepId,
    instanceConfig: exportTokensIntegrationConfig,
    invocationConfig: invocationConfig as IntegrationInvocationConfig,
  };
}
