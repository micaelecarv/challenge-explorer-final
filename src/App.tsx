import React from "react"
import { datadogRum } from '@datadog/browser-rum';

export function App() {

datadogRum.init({
    applicationId: '2689cbf3-e6f1-4fb0-b44d-2820625ed874',
    clientToken: 'pub60cb0a778bce627ea968188d42a939c0',
    site: 'datadoghq.com',
    service: 'challenge-explorer-final',
    env: 'production',
    version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'allow',
});

  return (
    <>
     <h1>Mica</h1>
    </>
  )
}
