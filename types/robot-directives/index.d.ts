// Type definitions for robot-directives 0.4
// Project: https://github.com/stevenvachon/robot-directives#readme
// Definitions by: Gordon Burgett <https://github.com/gburgett>
//                 Justin Powell <https://github.com/jpowell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = RobotDirectives;

interface Options {
  allIsReadonly?: boolean;
	currentTime?: () => number;
	restrictive?: boolean;
	userAgent?: string;
}

declare class RobotDirectives {
  constructor(options: Options)

  header(value: string): this;

  is(directive: string, options?: Options): boolean;
  oneIs(directive: string[], options?: Options): boolean;

  isNot(directive: string, options?: Options): boolean;
  oneIsNot(directive: string[], options?: Options): boolean;

  meta(name: string, content: string): this;

  static isBot(botAgent: string): boolean;

  static ALL: "all";
  static ARCHIVE: "archive";
  static CACHE: "cache";
  static FOLLOW: "follow";
  static IMAGEINDEX: "imageindex";
  static INDEX: "index";
  static NOARCHIVE: "noarchive";
  static NOCACHE: "nocache";
  static NOFOLLOW: "nofollow";
  static NOIMAGEINDEX: "noimageindex";
  static NOINDEX: "noindex";
  static NONE: "none";
  static NOODP: "noodp";
  static NOSNIPPET: "nosnippet";
  static NOTRANSLATE: "notranslate";
  static ODP: "odp";
  static SNIPPET: "snippet";
  static TRANSLATE: "translate";
}
