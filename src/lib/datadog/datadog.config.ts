import { DefaultPrivacyLevel, datadogRum } from "@datadog/browser-rum";

const datadogConfig = {
    applicationId: "2689cbf3-e6f1-4fb0-b44d-2820625ed874",
    clientToken: "pub60cb0a778bce627ea968188d42a939c0",
    site: "datadoghq.com",
    service: "challenge-explorer-final",
    env: "production",
    version: "2.0.0",
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: "mask-user-input" as DefaultPrivacyLevel,
}

export const initMonitoring = () => {
    datadogRum.init(datadogConfig);
    datadogRum.startSessionReplayRecording();
  };
  