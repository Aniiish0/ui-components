/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAP_API_KEY: string;
  readonly VITE_CHATBOT_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
