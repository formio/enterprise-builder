import { EnterpriseBuilderConfig } from '@formio/enterprise-builder/angular';
let savedAppConfig: any = localStorage.getItem('enterpriseBuilderConfig') || null;
try {
  if (savedAppConfig) {
    savedAppConfig = JSON.parse(savedAppConfig as string);
  }
}
catch (err) {
  savedAppConfig = null;
  localStorage.removeItem('enterpriseBuilderConfig');
}
export const AppConfig: EnterpriseBuilderConfig = {
  license: savedAppConfig ? savedAppConfig.license : '',
  projectUrl: savedAppConfig?.projectUrl ? savedAppConfig.projectUrl : '',
  baseUrl: savedAppConfig?.baseUrl ? savedAppConfig.baseUrl : '',
  tag: 'common',
  showData: true
};