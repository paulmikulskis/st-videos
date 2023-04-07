import ThirdPartyEmailPasswordNode from 'supertokens-node/recipe/thirdpartyemailpassword'
import SessionNode from 'supertokens-node/recipe/session'
import { appInfo } from './appInfo'
import { TypeInput } from "supertokens-node/types";

export const backendConfig = (): TypeInput => {
  return {
    framework: "express",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://prod-4c01fc61d57211ed91c2157b3f912564-us-east-1.aws.supertokens.io:3567",
      apiKey: "3HDz5GjO8wl04xRN8Vuv49dv-skNmV",
    },
    appInfo,
    recipeList: [
      ThirdPartyEmailPasswordNode.init({
        providers: [
          ThirdPartyEmailPasswordNode.Google({
            clientId: "988628304989-kbahfoprghlv86tmct3al9702ovc2mrk.apps.googleusercontent.com",
            clientSecret: "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"
          }),
        ],
      }),
      SessionNode.init(),
    ],
    isInServerlessEnv: true,
  }
}