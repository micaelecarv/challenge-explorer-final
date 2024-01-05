import React from "react"
import { datadogRum } from '@datadog/browser-rum';

export function App() {

datadogRum.init({
    applicationId: process.env.DATADOG_APPLICATION_ID,
    clientToken: process.env.DATADOG_CLIENT_TOKEN,
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
