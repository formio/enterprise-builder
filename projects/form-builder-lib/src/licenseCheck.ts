import { OfflineLibraryLicense } from '@formio/license/library';

declare const window: Window & {
  Formio?: {
    license?: string;
  };
};

const license = new OfflineLibraryLicense('enterpriseBuilder');

const doCheck = async (checkFunc: () => Promise<void>): Promise<void> => {
  if (!window.Formio?.license) {
    throw new Error(
      'You need to set the license key in order to use the \'@formio/enterprise-builder\' library. \n You can do it this way: Formio.license = "YourLicenseKey";'
    );
  }

  await checkFunc();
};

export const checkLicense = async (): Promise<void> =>
  await doCheck(() => license.verify(window.Formio.license));

export const checkEndpointAllowed = async (
  endpointUrl: string
): Promise<void> =>
  await doCheck(() =>
    license.checkAllowedEndpoints(endpointUrl, window.Formio.license)
  );
