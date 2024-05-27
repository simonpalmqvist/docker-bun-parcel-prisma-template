// Generated by dts-bundle-generator v9.5.1

import { Elysia } from "elysia";

declare const app: Elysia<
  "",
  false,
  {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
  },
  {
    type: {};
    error: {};
  },
  {
    schema: {};
    macro: {};
  },
  {
    message: {
      get: {
        body: unknown;
        params: Record<never, string>;
        query: unknown;
        headers: unknown;
        response: {
          200: {
            message: string;
          };
        };
      };
    };
  } & {
    users: {
      post: {
        body: {
          username: string;
        };
        params: Record<never, string>;
        query: unknown;
        headers: unknown;
        response: {
          200: {
            id: number;
            username: string;
          };
        };
      };
    };
  } & {
    users: {
      get: {
        body: unknown;
        params: Record<never, string>;
        query: unknown;
        headers: unknown;
        response: {
          200: {
            id: number;
            username: string;
          }[];
        };
      };
    };
  } & {
    user: {
      ":id": {
        get: {
          body: unknown;
          params: Record<"id", string>;
          query: unknown;
          headers: unknown;
          response: {
            200: {
              id: number;
              username: string;
            } | null;
          };
        };
      };
    };
  },
  {
    derive: {};
    resolve: {};
    schema: {};
  },
  {
    derive: {};
    resolve: {};
    schema: {};
  }
>;
export type App = typeof app;

export {};
