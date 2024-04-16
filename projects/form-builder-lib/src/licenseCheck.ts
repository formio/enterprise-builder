import { OfflineLibraryLicense } from '@formio/license/library';
import { Formio } from 'formiojs';

declare const window: Window & {
  Formio?: {
    license?: string;
  };
};
let licenseErrorIsShown = false;

const originalFormioRequest = Formio?.request;

if (!originalFormioRequest) {
  throw new Error('Object Formio is not provided');
}
Formio.request = async (url, ...otherArgs) => {
  try {
    await checkEndpointAllowed(url);
    return originalFormioRequest(url, ...otherArgs);
  } catch (err) {
    // Prevent multiple alerts showing
    if (!licenseErrorIsShown) {
      alert(err.message || 'Your license is not valid');
      licenseErrorIsShown = true;
    }
    return Promise.reject(err);
  }
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

export const checkLicense = async (): Promise<void> => {
  try {
    await doCheck(() => license.verify(window.Formio.license));
  } catch (err) {

    if (err.softFailLicenseExpiration) {
      console.error(err.message)
    }
    else if (!licenseErrorIsShown) {
      alert(err.message || 'Your license is not valid');
      licenseErrorIsShown = true;
    }
    throw err;
  }
};

const checkEndpointAllowed = async (endpointUrl: string): Promise<void> =>
  await doCheck(() => license.checkAllowedEndpoints(endpointUrl, window.Formio.license));
