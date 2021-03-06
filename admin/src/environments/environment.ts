// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { KeycloakConfig } from "keycloak-js";

let keycloakConf: KeycloakConfig = {
  clientId: 'rediint-client',    // Your `clientId` from Keycloak Admin Console
  realm: 'devkingos',               // Your `realm` from Keycloak Admin Console
  url:    'http://localhost:8080/auth/'   // URL of your keycloak installation till `/auth`
}
export const environment = {
  production: false,
  keycloak: keycloakConf
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
